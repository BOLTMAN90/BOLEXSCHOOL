"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getPortalDashboardPath } from "@/lib/portal-content";
import { ROUTES } from "@/lib/constants";
import { readPortalSession } from "@/lib/portal";

export function PortalDashboardRedirect() {
  const router = useRouter();

  useEffect(() => {
    const session = readPortalSession();
    if (session) {
      router.replace(getPortalDashboardPath(session.role));
      return;
    }
    router.replace(ROUTES.portal);
  }, [router]);

  return (
    <div className="mx-auto max-w-md py-24 text-center text-slate-500">
      Redirecting to your portal...
    </div>
  );
}
