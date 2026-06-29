"use client";

import Link from "next/link";
import { GraduationCap, LogIn, User } from "lucide-react";
import { useEffect, useState } from "react";
import { getPortalDashboardPath } from "@/lib/portal-content";
import { ROUTES } from "@/lib/constants";
import { readPortalSession, type PortalSession } from "@/lib/portal";
import { useTranslation } from "@/components/providers/LanguageProvider";

export function PortalHeaderLink({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  const { t } = useTranslation();
  const [session, setSession] = useState<PortalSession | null>(null);

  useEffect(() => {
    setSession(readPortalSession());
  }, []);

  if (!session) {
    return (
      <Link
        href={ROUTES.portal}
        onClick={onClick}
        className={className}
      >
        <LogIn className="h-4 w-4" />
        {t("nav.portal")}
      </Link>
    );
  }

  const href = getPortalDashboardPath(session.role);
  const Icon = session.role === "parent" ? User : GraduationCap;

  return (
    <Link href={href} onClick={onClick} className={className} title={`${session.role} portal`}>
      <Icon className="h-4 w-4" />
      {session.role === "parent" ? "Parent Portal" : "Student Portal"}
    </Link>
  );
}
