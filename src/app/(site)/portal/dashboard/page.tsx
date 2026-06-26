import type { Metadata } from "next";
import { PortalDashboard } from "@/components/forms/PortalDashboard";

export const metadata: Metadata = {
  title: "Portal Dashboard",
  description: "BOLEXMAN student and parent portal dashboard.",
};

export default function PortalDashboardPage() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PortalDashboard />
      </div>
    </section>
  );
}
