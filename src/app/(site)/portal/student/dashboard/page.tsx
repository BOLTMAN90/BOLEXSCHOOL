import type { Metadata } from "next";
import { PortalDashboardView } from "@/components/forms/PortalDashboardView";

export const metadata: Metadata = {
  title: "Student Portal Dashboard",
  description: "BOLEXMAN student portal for classes, grades, and assignments.",
};

export default function StudentPortalDashboardPage() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PortalDashboardView expectedRole="student" />
      </div>
    </section>
  );
}
