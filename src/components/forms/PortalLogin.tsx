"use client";

import { useState } from "react";
import { LogIn, User, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ROUTES } from "@/lib/constants";

type PortalRole = "student" | "parent";

export function PortalLogin() {
  const [role, setRole] = useState<PortalRole>("parent");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email") as string;
    const password = form.get("password") as string;

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    setError("");
    // Demo credentials for preview
    if (email === "demo@bolexman.edu" && password === "demo123") {
      alert(`Welcome! ${role === "parent" ? "Parent" : "Student"} portal login successful. (Demo mode)`);
      return;
    }

    setError("Invalid credentials. Use demo@bolexman.edu / demo123 for preview access.");
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

          <Button type="submit" variant="secondary" size="lg" className="w-full">
            <LogIn className="h-5 w-5" />
            Sign In to {role === "parent" ? "Parent" : "Student"} Portal
          </Button>
        </form>

        <p className="mt-4 text-center text-xs text-slate-500">
          Demo: demo@bolexman.edu / demo123
        </p>
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
