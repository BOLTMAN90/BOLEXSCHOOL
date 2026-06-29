"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Home, LogOut } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { GlassCard } from "@/components/ui/GlassCard";
import { PORTAL_EXPERIENCE } from "@/lib/portal-content";
import { ROUTES } from "@/lib/constants";
import {
  clearPortalSession,
  readPortalSession,
  sessionMatchesRole,
  type PortalRole,
  type PortalSession,
} from "@/lib/portal";
import { cn } from "@/lib/utils";

interface PortalDashboardViewProps {
  expectedRole: PortalRole;
}

export function PortalDashboardView({ expectedRole }: PortalDashboardViewProps) {
  const router = useRouter();
  const [session, setSession] = useState<PortalSession | null>(null);
  const experience = PORTAL_EXPERIENCE[expectedRole];
  const Icon = experience.icon;

  useEffect(() => {
    const current = readPortalSession();
    if (!current) {
      router.replace(ROUTES.portal);
      return;
    }

    if (!sessionMatchesRole(current, expectedRole)) {
      router.replace(ROUTES.portal);
      return;
    }

    setSession(current);
  }, [expectedRole, router]);

  const handleLogout = () => {
    clearPortalSession();
    router.push(ROUTES.portal);
  };

  if (!session) {
    return (
      <div className="mx-auto max-w-md text-center text-slate-500">
        Loading your {expectedRole} portal...
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div
        className={cn(
          "overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br p-6 dark:border-slate-700",
          experience.heroGradient
        )}
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div
              className={cn(
                "flex h-16 w-16 items-center justify-center rounded-2xl",
                expectedRole === "parent"
                  ? "bg-secondary/15 text-secondary"
                  : "bg-accent/30 text-primary"
              )}
            >
              <Icon className="h-8 w-8" />
            </div>
            <div>
              <span
                className={cn(
                  "inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
                  expectedRole === "parent"
                    ? "bg-secondary/15 text-secondary"
                    : "bg-accent/40 text-primary"
                )}
              >
                {experience.badge}
              </span>
              <h1 className="mt-2 font-heading text-3xl font-bold text-primary dark:text-white">
                Welcome, {session.name}
              </h1>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{session.email}</p>
              <p className="mt-3 max-w-xl text-sm text-slate-600 dark:text-slate-400">
                {experience.subtitle}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <ButtonLink href={ROUTES.home} variant="outline" size="md">
              <Home className="h-4 w-4" />
              Browse Website
            </ButtonLink>
            <ButtonLink href={ROUTES.portal} variant="ghost" size="md">
              My Account
            </ButtonLink>
            <Button type="button" variant="outline" onClick={handleLogout}>
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {experience.highlights.map((item) => (
          <GlassCard key={item} className="flex items-start gap-3">
            <CheckCircle2
              className={cn(
                "mt-0.5 h-5 w-5 shrink-0",
                expectedRole === "parent" ? "text-secondary" : "text-primary"
              )}
            />
            <p className="text-sm text-slate-600 dark:text-slate-400">{item}</p>
          </GlassCard>
        ))}
      </div>

      <div>
        <h2 className="mb-4 font-heading text-xl font-semibold text-primary dark:text-white">
          {expectedRole === "parent" ? "Parent tools" : "Student tools"}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {experience.quickLinks.map((item) => (
            <GlassCard key={item.label} className="flex items-start gap-4">
              <div
                className={cn(
                  "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
                  expectedRole === "parent" ? "bg-secondary/10 text-secondary" : "bg-accent/25 text-primary"
                )}
              >
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-primary dark:text-white">{item.label}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.note}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      <GlassCard>
        <h3 className="font-heading text-lg font-semibold text-primary dark:text-white">
          {experience.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          Your {expectedRole} portal is active. You can leave anytime using &quot;Browse Website&quot;
          or the main menu — you will stay signed in until you sign out. Full live data for grades,
          fees, and messaging will be connected in a future update.
        </p>
      </GlassCard>
    </div>
  );
}
