"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Home, LogIn, LayoutDashboard, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PortalRolePicker } from "@/components/forms/PortalRolePicker";
import { getPortalDashboardPath } from "@/lib/portal-content";
import { ROUTES } from "@/lib/constants";
import {
  clearPortalSession,
  readPortalSession,
  savePortalSession,
  type PortalRole,
  type PortalSession,
} from "@/lib/portal";

type PortalMode = "signin" | "register";

export function PortalLogin() {
  const router = useRouter();
  const [mode, setMode] = useState<PortalMode>("signin");
  const [role, setRole] = useState<PortalRole>("parent");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState<PortalSession | null>(null);

  useEffect(() => {
    setSession(readPortalSession());
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email") as string;
    const password = form.get("password") as string;
    const name = (form.get("name") as string) || "";

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    if (mode === "register" && !name.trim()) {
      setError("Please enter your full name.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const endpoint = mode === "register" ? "/api/portal/register" : "/api/portal/login";
      const body = { email, password, role, ...(mode === "register" ? { name: name.trim() } : {}) };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = (await response.json()) as {
        error?: string;
        session?: PortalSession;
      };

      if (!response.ok || !data.session) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      savePortalSession(data.session);
      setSession(data.session);
      router.push(getPortalDashboardPath(data.session.role));
    } catch {
      setError(
        mode === "register"
          ? "Unable to create your account right now. Please try again."
          : "Unable to sign in right now. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const switchMode = (nextMode: PortalMode) => {
    setMode(nextMode);
    setError("");
  };

  const handleSignOut = () => {
    clearPortalSession();
    setSession(null);
    setError("");
  };

  if (session) {
    return (
      <div className="mx-auto max-w-md">
        <GlassCard className="space-y-5 text-center">
          <div>
            <p className="text-sm text-slate-500">Signed in as</p>
            <h2 className="font-heading text-2xl font-bold text-primary dark:text-white">
              {session.name}
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{session.email}</p>
            <p className="mt-2 inline-flex rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium capitalize text-secondary">
              {session.role} portal
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <ButtonLink
              href={getPortalDashboardPath(session.role)}
              variant="secondary"
              size="lg"
              className="w-full"
            >
              <LayoutDashboard className="h-5 w-5" />
              Go to {session.role === "parent" ? "Parent" : "Student"} Portal
            </ButtonLink>
            <ButtonLink href={ROUTES.home} variant="outline" size="lg" className="w-full">
              <Home className="h-5 w-5" />
              Browse Website
            </ButtonLink>
            <Button type="button" variant="ghost" size="md" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md">
      <div className="mb-4">
        <ButtonLink href={ROUTES.home} variant="ghost" size="sm" className="text-slate-600 dark:text-slate-400">
          <ArrowLeft className="h-4 w-4" />
          Back to Website
        </ButtonLink>
      </div>

      <GlassCard>
        <div className="mb-6 flex rounded-xl bg-slate-100 p-1 dark:bg-slate-800">
          <button
            type="button"
            onClick={() => switchMode("signin")}
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium transition-colors ${
              mode === "signin"
                ? "bg-white text-primary shadow dark:bg-slate-900 dark:text-white"
                : "text-slate-500"
            }`}
          >
            <LogIn className="h-4 w-4" />
            Sign In
          </button>
          <button
            type="button"
            onClick={() => switchMode("register")}
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium transition-colors ${
              mode === "register"
                ? "bg-white text-primary shadow dark:bg-slate-900 dark:text-white"
                : "text-slate-500"
            }`}
          >
            <UserPlus className="h-4 w-4" />
            Create Account
          </button>
        </div>

        <PortalRolePicker role={role} onChange={setRole} className="mb-6" />

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "register" && (
            <div>
              <label htmlFor="portalName" className="mb-2 block text-sm font-medium">
                Full Name
              </label>
              <input
                id="portalName"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Jane Doe"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-secondary dark:border-slate-700 dark:bg-slate-900"
              />
            </div>
          )}

          <div>
            <label htmlFor="portalEmail" className="mb-2 block text-sm font-medium">
              Gmail / Email Address
            </label>
            <input
              id="portalEmail"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@gmail.com"
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
              autoComplete={mode === "register" ? "new-password" : "current-password"}
              placeholder="••••••••"
              minLength={mode === "register" ? 8 : undefined}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-secondary dark:border-slate-700 dark:bg-slate-900"
            />
            {mode === "register" && (
              <p className="mt-1 text-xs text-slate-500">At least 8 characters</p>
            )}
          </div>

          {error && (
            <p className="text-sm text-red-500" role="alert">
              {error}
            </p>
          )}

          <Button type="submit" variant="secondary" size="lg" className="w-full" disabled={loading}>
            {mode === "register" ? (
              <>
                <UserPlus className="h-5 w-5" />
                {loading
                  ? "Creating account..."
                  : `Create ${role === "parent" ? "Parent" : "Student"} Account`}
              </>
            ) : (
              <>
                <LogIn className="h-5 w-5" />
                {loading
                  ? "Signing in..."
                  : `Sign In to ${role === "parent" ? "Parent" : "Student"} Portal`}
              </>
            )}
          </Button>
        </form>

        {mode === "signin" && (
          <p className="mt-4 text-center text-xs text-slate-500">
            Use the same portal type, email, and password from when you created your account.
          </p>
        )}
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
