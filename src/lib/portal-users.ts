import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import { get, put } from "@vercel/blob";
import bcrypt from "bcryptjs";
import type { PortalRole } from "./portal";

const BLOB_PATHNAME = "portal-users.json";
const LOCAL_USERS_FILE = path.join(process.cwd(), "data", "portal-users.json");

export interface StoredPortalUser {
  email: string;
  passwordHash: string;
  role: PortalRole;
  name: string;
  createdAt: string;
}

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

async function readLocalUsers(): Promise<StoredPortalUser[]> {
  try {
    const raw = await readFile(LOCAL_USERS_FILE, "utf8");
    return JSON.parse(raw) as StoredPortalUser[];
  } catch {
    return [];
  }
}

async function writeLocalUsers(users: StoredPortalUser[]) {
  await mkdir(path.dirname(LOCAL_USERS_FILE), { recursive: true });
  await writeFile(LOCAL_USERS_FILE, JSON.stringify(users, null, 2), "utf8");
}

async function readBlobUsers(): Promise<StoredPortalUser[] | null> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return null;

  try {
    const result = await get(BLOB_PATHNAME, { access: "private" });
    if (!result?.stream) return [];

    const raw = await new Response(result.stream).text();
    return JSON.parse(raw) as StoredPortalUser[];
  } catch {
    return [];
  }
}

async function writeBlobUsers(users: StoredPortalUser[]) {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    throw new Error("BLOB_READ_WRITE_TOKEN is not configured.");
  }

  await put(BLOB_PATHNAME, JSON.stringify(users, null, 2), {
    access: "private",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
  });
}

export async function listPortalUsers(): Promise<StoredPortalUser[]> {
  const blobUsers = await readBlobUsers();
  if (blobUsers !== null) return blobUsers;
  return readLocalUsers();
}

async function savePortalUsers(users: StoredPortalUser[]) {
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    await writeBlobUsers(users);
    return;
  }
  await writeLocalUsers(users);
}

export async function findPortalUser(email: string, role: PortalRole) {
  const users = await listPortalUsers();
  const normalizedEmail = normalizeEmail(email);
  return users.find(
    (user) => normalizeEmail(user.email) === normalizedEmail && user.role === role
  );
}

export async function registerPortalUser(input: {
  email: string;
  password: string;
  role: PortalRole;
  name: string;
}) {
  const email = normalizeEmail(input.email);
  const name = input.name.trim();

  if (!email || !input.password || !name) {
    throw new Error("Name, email, password, and portal type are required.");
  }

  if (input.password.length < 8) {
    throw new Error("Password must be at least 8 characters.");
  }

  const users = await listPortalUsers();
  const exists = users.some(
    (user) => normalizeEmail(user.email) === email && user.role === input.role
  );

  if (exists) {
    throw new Error("An account with this email already exists for that portal type.");
  }

  const passwordHash = await bcrypt.hash(input.password, 10);
  const nextUser: StoredPortalUser = {
    email,
    passwordHash,
    role: input.role,
    name,
    createdAt: new Date().toISOString(),
  };

  users.push(nextUser);
  await savePortalUsers(users);
  return nextUser;
}

export async function verifyPortalUser(input: {
  email: string;
  password: string;
  role: PortalRole;
}) {
  const user = await findPortalUser(input.email, input.role);
  if (!user) return null;

  const valid = await bcrypt.compare(input.password, user.passwordHash);
  return valid ? user : null;
}
