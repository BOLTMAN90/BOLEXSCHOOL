import { NextResponse } from "next/server";
import { registerPortalUser } from "@/lib/portal-users";
import type { PortalRole } from "@/lib/portal";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, role, name } = body as {
      email?: string;
      password?: string;
      role?: PortalRole;
      name?: string;
    };

    if (!email?.trim() || !password || !role || !name?.trim()) {
      return NextResponse.json(
        { error: "Name, email, password, and portal type are required." },
        { status: 400 }
      );
    }

    if (role !== "parent" && role !== "student") {
      return NextResponse.json({ error: "Invalid portal type." }, { status: 400 });
    }

    const user = await registerPortalUser({
      email,
      password,
      role,
      name,
    });

    return NextResponse.json({
      success: true,
      session: {
        email: user.email,
        role: user.role,
        name: user.name,
      },
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Registration failed. Please try again.";

    const status = message.includes("already exists") ? 409 : 400;
    return NextResponse.json({ error: message }, { status });
  }
}
