import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { AdmissionsApplyCta } from "@/components/ui/TranslatedButtonLink";
import { Admissions } from "@/components/sections/Admissions";
import { FAQ } from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Admissions",
  description: "Learn about the BOLEXMAN admissions process and start your application today.",
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrowKey="pages.admissions.eyebrow"
        titleKey="pages.admissions.title"
        descriptionKey="pages.admissions.description"
      />
      <Admissions hideHeading />
      <AdmissionsApplyCta />
      <FAQ hideHeading />
    </>
  );
}
