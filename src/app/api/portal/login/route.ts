import { NextResponse } from "next/server";
import { CONTACT } from "@/lib/constants";
import { PORTAL_DEMO_EMAIL, PORTAL_DEMO_PASSWORD, type PortalRole } from "@/lib/portal";
import { verifyPortalUser } from "@/lib/portal-users";

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function getDisplayName(email: string, role: PortalRole) {
  if (email === PORTAL_DEMO_EMAIL) {
    return role === "parent" ? "Demo Parent" : "Demo Student";
  }

  if (normalizeEmail(email) === normalizeEmail(CONTACT.email)) {
    return "BOLEXMAN Admin";
  }

  return role === "parent" ? "Parent" : "Student";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, role } = body as {
      email?: string;
      password?: string;
      role?: PortalRole;
    };

    if (!email?.trim() || !password || !role) {
      return NextResponse.json(
        { error: "Email, password, and portal type are required." },
        { status: 400 }
      );
    }

    const normalizedEmail = normalizeEmail(email);
    const adminEmail = process.env.PORTAL_ADMIN_EMAIL || CONTACT.email;
    const adminPassword = process.env.PORTAL_ADMIN_PASSWORD;

    const isDemoLogin =
      normalizedEmail === PORTAL_DEMO_EMAIL && password === PORTAL_DEMO_PASSWORD;

    const isAdminLogin =
      !!adminPassword &&
      normalizedEmail === normalizeEmail(adminEmail) &&
      password === adminPassword;

    const registeredUser = await verifyPortalUser({ email, password, role });

    if (!isDemoLogin && !isAdminLogin && !registeredUser) {
      return NextResponse.json(
        {
          error:
            "Invalid credentials. Create an account first, use the demo login, or sign in with your registered email.",
        },
        { status: 401 }
      );
    }

    const sessionName = registeredUser
      ? registeredUser.name
      : getDisplayName(normalizedEmail, role);

    return NextResponse.json({
      success: true,
      session: {
        email: normalizedEmail,
        role,
        name: sessionName,
      },
    });
  } catch {
    return NextResponse.json({ error: "Login failed. Please try again." }, { status: 500 });
  }
}
