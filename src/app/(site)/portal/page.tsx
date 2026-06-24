import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { PortalLogin } from "@/components/forms/PortalLogin";

export const metadata: Metadata = {
  title: "Student & Parent Portal",
  description: "Access the BOLEXMAN student and parent portal for grades, schedules, and school updates.",
};

export default function PortalPage() {
  return (
    <>
      <PageHero
        eyebrowKey="pages.portal.eyebrow"
        titleKey="pages.portal.title"
        descriptionKey="pages.portal.description"
      />
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PortalLogin />
        </div>
      </section>
    </>
  );
}
