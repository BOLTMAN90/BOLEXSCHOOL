import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CampusLife } from "@/components/sections/CampusLife";
import { VirtualTour } from "@/components/sections/VirtualTour";

export const metadata: Metadata = {
  title: "Campus Life",
  description: "Discover sports, arts, technology, clubs, and events that make life at BOLEXMAN vibrant.",
};

export default function CampusLifePage() {
  return (
    <>
      <PageHero
        eyebrowKey="pages.campusLife.eyebrow"
        titleKey="pages.campusLife.title"
        descriptionKey="pages.campusLife.description"
      />
      <CampusLife hideHeading />
      <VirtualTour />
    </>
  );
}
