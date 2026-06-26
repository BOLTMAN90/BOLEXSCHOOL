"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogIn, User, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CONTACT, ROUTES } from "@/lib/constants";
import {
  PORTAL_DEMO_EMAIL,
  PORTAL_DEMO_PASSWORD,
  savePortalSession,
  type PortalRole,
} from "@/lib/portal";

export function PortalLogin() {
  const router = useRouter();
  const [role, setRole] = useState<PortalRole>("parent");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email") as string;
    const password = form.get("password") as string;

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/portal/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role }),
      });

      const data = (await response.json()) as {
        error?: string;
        session?: { email: string; role: PortalRole; name: string };
      };

      if (!response.ok || !data.session) {
        setError(data.error || "Invalid credentials. Please try again.");
        return;
      }

      savePortalSession(data.session);
      router.push(`${ROUTES.portal}/dashboard`);
    } catch {
      setError("Unable to sign in right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-md">
      <GlassCard>
        <div className="mb-6 flex rounded-xl bg-slate-100 p-1 dark:bg-slate-800">
          <button
            type="button"
            onClick={() => setRole("parent")}
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium transition-colors ${
              role === "parent"
                ? "bg-white text-primary shadow dark:bg-slate-900 dark:text-white"
                : "text-slate-500"
            }`}
          >
            <User className="h-4 w-4" />
            Parent
          </button>
          <button
            type="button"
            onClick={() => setRole("student")}
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium transition-colors ${
              role === "student"
                ? "bg-white text-primary shadow dark:bg-slate-900 dark:text-white"
                : "text-slate-500"
            }`}
          >
            <GraduationCap className="h-4 w-4" />
            Student
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="portalEmail" className="mb-2 block text-sm font-medium">
              Email Address
            </label>
            <input
              id="portalEmail"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-secondary dark:border-slate-700 dark:bg-slate-900"
            />
          </div>
          <div>
            <label htmlFor="portalPassword" className="mb-2 block text-sm font-medium">
              Password
            </label>
            <input
              id="portalPassword"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-secondary dark:border-slate-700 dark:bg-slate-900"
            />
          </div>

          {error && (
            <p className="text-sm text-red-500" role="alert">
              {error}
            </p>
          )}

          <Button type="submit" variant="secondary" size="lg" className="w-full" disabled={loading}>
            <LogIn className="h-5 w-5" />
            {loading ? "Signing in..." : `Sign In to ${role === "parent" ? "Parent" : "Student"} Portal`}
          </Button>
        </form>

        <div className="mt-4 space-y-2 text-center text-xs text-slate-500">
          <p>
            Demo: {PORTAL_DEMO_EMAIL} / {PORTAL_DEMO_PASSWORD}
          </p>
          <p>
            Admin: {CONTACT.email} / your portal password
          </p>
        </div>
      </GlassCard>

      <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
        New to BOLEXMAN?{" "}
        <ButtonLink href={ROUTES.apply} variant="ghost" size="sm" className="inline text-secondary">
          Apply for admission
        </ButtonLink>
      </p>
    </div>
  );
}
