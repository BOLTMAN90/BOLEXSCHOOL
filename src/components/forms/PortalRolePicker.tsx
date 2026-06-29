"use client";

import { GraduationCap, User } from "lucide-react";
import type { PortalRole } from "@/lib/portal";
import { cn } from "@/lib/utils";

interface PortalRolePickerProps {
  role: PortalRole;
  onChange: (role: PortalRole) => void;
  className?: string;
}

export function PortalRolePicker({ role, onChange, className }: PortalRolePickerProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <p className="text-center text-xs font-medium uppercase tracking-wide text-slate-500">
        Choose your portal
      </p>
      <div className="flex rounded-xl bg-slate-100 p-1 dark:bg-slate-800">
        <button
          type="button"
          onClick={() => onChange("parent")}
          className={cn(
            "flex flex-1 flex-col items-center justify-center gap-1 rounded-lg py-3 text-sm font-medium transition-colors",
            role === "parent"
              ? "bg-white text-secondary shadow dark:bg-slate-900"
              : "text-slate-500 hover:text-slate-700"
          )}
        >
          <User className="h-5 w-5" />
          Parent Portal
        </button>
        <button
          type="button"
          onClick={() => onChange("student")}
          className={cn(
            "flex flex-1 flex-col items-center justify-center gap-1 rounded-lg py-3 text-sm font-medium transition-colors",
            role === "student"
              ? "bg-white text-primary shadow dark:bg-slate-900"
              : "text-slate-500 hover:text-slate-700"
          )}
        >
          <GraduationCap className="h-5 w-5" />
          Student Portal
        </button>
      </div>
      <p className="text-center text-xs text-slate-500">
        {role === "parent"
          ? "For parents and guardians — fees, reports, and school updates."
          : "For students — classes, homework, grades, and announcements."}
      </p>
    </div>
  );
}
