import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import { get, put } from "@vercel/blob";
import bcrypt from "bcryptjs";
import type { PortalRole } from "./portal";

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

function emailStorageKey(email: string) {
  return Buffer.from(normalizeEmail(email)).toString("base64url");
}

function userBlobPath(email: string) {
  return `portal-users/${emailStorageKey(email)}.json`;
}

function userLocalPath(email: string) {
  return path.join(process.cwd(), "data", "portal-users", `${emailStorageKey(email)}.json`);
}

async function readLocalUser(email: string): Promise<StoredPortalUser | null> {
  try {
    const raw = await readFile(userLocalPath(email), "utf8");
    return JSON.parse(raw) as StoredPortalUser;
  } catch {
    return null;
  }
}

async function writeLocalUser(user: StoredPortalUser) {
  const filePath = userLocalPath(user.email);
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, JSON.stringify(user, null, 2), "utf8");
}

async function readBlobUser(email: string): Promise<StoredPortalUser | null | undefined> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return undefined;

  try {
    const result = await get(userBlobPath(email), { access: "private" });
    if (!result?.stream) return null;

    const raw = await new Response(result.stream).text();
    return JSON.parse(raw) as StoredPortalUser;
  } catch {
    return null;
  }
}

async function writeBlobUser(user: StoredPortalUser) {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    throw new Error("BLOB_READ_WRITE_TOKEN is not configured.");
  }

  await put(userBlobPath(user.email), JSON.stringify(user, null, 2), {
    access: "private",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
  });
}

export async function getPortalUser(email: string): Promise<StoredPortalUser | null> {
  const blobUser = await readBlobUser(email);
  if (blobUser !== undefined) return blobUser;
  return readLocalUser(email);
}

async function savePortalUser(user: StoredPortalUser) {
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    await writeBlobUser(user);
    return;
  }
  await writeLocalUser(user);
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

  const existing = await getPortalUser(email);
  if (existing) {
    throw new Error("An account with this email already exists. Please sign in instead.");
  }

  const nextUser: StoredPortalUser = {
    email,
    passwordHash: await bcrypt.hash(input.password, 10),
    role: input.role,
    name,
    createdAt: new Date().toISOString(),
  };

  await savePortalUser(nextUser);

  const saved = await getPortalUser(email);
  if (!saved) {
    throw new Error("Account could not be saved. Please try again.");
  }

  return saved;
}

export async function verifyPortalUser(input: { email: string; password: string }) {
  const user = await getPortalUser(input.email);
  if (!user) return null;

  const valid = await bcrypt.compare(input.password, user.passwordHash);
  return valid ? user : null;
}
