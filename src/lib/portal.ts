export const PORTAL_SESSION_KEY = "bolexman_portal_session";

export type PortalRole = "student" | "parent";

export interface PortalSession {
  email: string;
  role: PortalRole;
  name: string;
}

export function readPortalSession(): PortalSession | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = sessionStorage.getItem(PORTAL_SESSION_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as PortalSession;
  } catch {
    return null;
  }
}

export function savePortalSession(session: PortalSession) {
  sessionStorage.setItem(PORTAL_SESSION_KEY, JSON.stringify(session));
}

export function clearPortalSession() {
  sessionStorage.removeItem(PORTAL_SESSION_KEY);
}

export function hasPortalSession() {
  return readPortalSession() !== null;
}

export function sessionMatchesRole(session: PortalSession | null, role: PortalRole) {
  return session?.role === role;
}
