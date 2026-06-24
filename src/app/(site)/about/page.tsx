import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about BOLEXMAN's mission, history, and commitment to nurturing excellence and leadership.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrowKey="pages.about.eyebrow"
        titleKey="pages.about.title"
        descriptionKey="pages.about.description"
      />
      <About hideHeading />
      <Testimonials />
    </>
  );
}
