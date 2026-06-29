import { NextResponse } from "next/server";
import { verifyPortalUser } from "@/lib/portal-users";

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body as {
      email?: string;
      password?: string;
    };

    if (!email?.trim() || !password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 }
      );
    }

    const registeredUser = await verifyPortalUser({ email, password });

    if (!registeredUser) {
      return NextResponse.json(
        {
          error:
            "Invalid email or password. Create an account first if you are new, then sign in with the same details.",
        },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      session: {
        email: normalizeEmail(registeredUser.email),
        role: registeredUser.role,
        name: registeredUser.name,
      },
    });
  } catch {
    return NextResponse.json({ error: "Login failed. Please try again." }, { status: 500 });
  }
}
