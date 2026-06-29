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

function userBlobPath(email: string, role: PortalRole) {
  return `portal-users/${emailStorageKey(email)}-${role}.json`;
}

function legacyUserBlobPath(email: string) {
  return `portal-users/${emailStorageKey(email)}.json`;
}

function userLocalPath(email: string, role: PortalRole) {
  return path.join(process.cwd(), "data", "portal-users", `${emailStorageKey(email)}-${role}.json`);
}

function legacyUserLocalPath(email: string) {
  return path.join(process.cwd(), "data", "portal-users", `${emailStorageKey(email)}.json`);
}

async function readLocalUserAt(filePath: string): Promise<StoredPortalUser | null> {
  try {
    const raw = await readFile(filePath, "utf8");
    return JSON.parse(raw) as StoredPortalUser;
  } catch {
    return null;
  }
}

async function readBlobUserAt(blobPath: string): Promise<StoredPortalUser | null | undefined> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return undefined;

  try {
    const result = await get(blobPath, { access: "private" });
    if (!result?.stream) return null;

    const raw = await new Response(result.stream).text();
    return JSON.parse(raw) as StoredPortalUser;
  } catch {
    return null;
  }
}

async function readLegacyUser(email: string): Promise<StoredPortalUser | null> {
  const legacyBlob = await readBlobUserAt(legacyUserBlobPath(email));
  if (legacyBlob !== undefined) return legacyBlob;
  return readLocalUserAt(legacyUserLocalPath(email));
}

export async function getPortalUser(
  email: string,
  role: PortalRole
): Promise<StoredPortalUser | null> {
  const roleBlob = await readBlobUserAt(userBlobPath(email, role));
  if (roleBlob) return roleBlob;

  if (roleBlob === undefined) {
    const roleLocal = await readLocalUserAt(userLocalPath(email, role));
    if (roleLocal) return roleLocal;
  }

  const legacy = await readLegacyUser(email);
  if (legacy?.role === role) return legacy;

  return null;
}

async function savePortalUser(user: StoredPortalUser) {
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    await put(userBlobPath(user.email, user.role), JSON.stringify(user, null, 2), {
      access: "private",
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: "application/json",
    });
    return;
  }

  const filePath = userLocalPath(user.email, user.role);
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, JSON.stringify(user, null, 2), "utf8");
}

export async function registerPortalUser(input: {
  email: string;
  password: string;
  role: PortalRole;
  name: string;
}) {
  const email = normalizeEmail(input.email);
  const name = input.name.trim();
  const password = input.password;

  if (!email || !password || !name) {
    throw new Error("Name, email, password, and portal type are required.");
  }

  if (password.length < 8) {
    throw new Error("Password must be at least 8 characters.");
  }

  const existing = await getPortalUser(email, input.role);
  if (existing) {
    throw new Error(
      `A ${input.role} account already exists for this email. Sign in with the same portal type instead.`
    );
  }

  const nextUser: StoredPortalUser = {
    email,
    passwordHash: await bcrypt.hash(password, 10),
    role: input.role,
    name,
    createdAt: new Date().toISOString(),
  };

  await savePortalUser(nextUser);

  const saved = await getPortalUser(email, input.role);
  if (!saved) {
    throw new Error("Account could not be saved. Please try again.");
  }

  return saved;
}

type VerifyResult =
  | { ok: true; user: StoredPortalUser }
  | { ok: false; error: string };

export async function verifyPortalUser(input: {
  email: string;
  password: string;
  role: PortalRole;
}): Promise<VerifyResult> {
  const user = await getPortalUser(input.email, input.role);

  if (!user) {
    const otherRole: PortalRole = input.role === "parent" ? "student" : "parent";
    const otherAccount = await getPortalUser(input.email, otherRole);

    if (otherAccount) {
      return {
        ok: false,
        error: `This email is registered as a ${otherRole}. Select "${otherRole === "parent" ? "Parent" : "Student"}" above to sign in.`,
      };
    }

    return {
      ok: false,
      error: `No ${input.role} account found for this email. Create a ${input.role} account first.`,
    };
  }

  const valid = await bcrypt.compare(input.password, user.passwordHash);
  if (!valid) {
    return {
      ok: false,
      error: "Incorrect password. Use the same password you set when creating this account.",
    };
  }

  return { ok: true, user };
}
