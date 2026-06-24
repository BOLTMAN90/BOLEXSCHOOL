import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Academics } from "@/components/sections/Academics";

export const metadata: Metadata = {
  title: "Academics",
  description: "Explore BOLEXMAN's academic programs from Early Years through Secondary School and specialized departments.",
};

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        eyebrowKey="pages.academics.eyebrow"
        titleKey="pages.academics.title"
        descriptionKey="pages.academics.description"
      />
      <Academics hideHeading />
    </>
  );
}
