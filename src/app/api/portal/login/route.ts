import { NextResponse } from "next/server";
import { verifyPortalUser } from "@/lib/portal-users";
import type { PortalRole } from "@/lib/portal";

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
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

    if (role !== "parent" && role !== "student") {
      return NextResponse.json({ error: "Invalid portal type." }, { status: 400 });
    }

    const result = await verifyPortalUser({ email, password, role });

    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 401 });
    }

    return NextResponse.json({
      success: true,
      session: {
        email: normalizeEmail(result.user.email),
        role: result.user.role,
        name: result.user.name,
      },
    });
  } catch {
    return NextResponse.json({ error: "Login failed. Please try again." }, { status: 500 });
  }
}
