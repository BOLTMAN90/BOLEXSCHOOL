"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Bell,
  BookOpen,
  Calendar,
  GraduationCap,
  LogOut,
  MessageSquare,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { ROUTES } from "@/lib/constants";
import {
  clearPortalSession,
  readPortalSession,
  type PortalSession,
} from "@/lib/portal";

const quickLinks = [
  { icon: BookOpen, label: "Grades & Reports", note: "Coming soon" },
  { icon: Calendar, label: "Class Schedule", note: "Coming soon" },
  { icon: MessageSquare, label: "School Messages", note: "Coming soon" },
  { icon: Bell, label: "Announcements", note: "Coming soon" },
];

export function PortalDashboard() {
  const router = useRouter();
  const [session, setSession] = useState<PortalSession | null>(null);

  useEffect(() => {
    const current = readPortalSession();
    if (!current) {
      router.replace(ROUTES.portal);
      return;
    }
    setSession(current);
  }, [router]);

  const handleLogout = () => {
    clearPortalSession();
    router.push(ROUTES.portal);
  };

  if (!session) {
    return (
      <div className="mx-auto max-w-md text-center text-slate-500">
        Loading your portal...
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <GlassCard className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
            {session.role === "parent" ? (
              <User className="h-7 w-7" />
            ) : (
              <GraduationCap className="h-7 w-7" />
            )}
          </div>
          <div>
            <p className="text-sm text-slate-500">
              {session.role === "parent" ? "Parent Portal" : "Student Portal"}
            </p>
            <h2 className="font-heading text-2xl font-bold text-primary dark:text-white">
              Welcome, {session.name}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">{session.email}</p>
          </div>
        </div>
        <Button type="button" variant="outline" onClick={handleLogout}>
          <LogOut className="h-4 w-4" />
          Sign Out
        </Button>
      </GlassCard>

      <div className="grid gap-4 sm:grid-cols-2">
        {quickLinks.map((item) => (
          <GlassCard key={item.label} className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-primary">
              <item.icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-primary dark:text-white">{item.label}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.note}</p>
            </div>
          </GlassCard>
        ))}
      </div>

      <GlassCard>
        <h3 className="font-heading text-lg font-semibold text-primary dark:text-white">
          Portal preview
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          You are signed in successfully. Full grades, attendance, fees, and messaging will be
          connected here in a future update. For admissions or support, visit our contact page.
        </p>
      </GlassCard>
    </div>
  );
}
