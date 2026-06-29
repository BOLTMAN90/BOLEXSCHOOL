import type { Metadata } from "next";
import { PortalDashboardRedirect } from "@/components/forms/PortalDashboardRedirect";

export const metadata: Metadata = {
  title: "Portal Dashboard",
  description: "BOLEXMAN student and parent portal dashboard.",
};

export default function LegacyPortalDashboardPage() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PortalDashboardRedirect />
      </div>
    </section>
  );
}
