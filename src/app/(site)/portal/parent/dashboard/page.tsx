import type { Metadata } from "next";
import { PortalDashboardView } from "@/components/forms/PortalDashboardView";

export const metadata: Metadata = {
  title: "Parent Portal Dashboard",
  description: "BOLEXMAN parent portal for fees, reports, and school updates.",
};

export default function ParentPortalDashboardPage() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PortalDashboardView expectedRole="parent" />
      </div>
    </section>
  );
}
