import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { GalleryShowcase } from "@/components/sections/GalleryShowcase";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse photos of campus life, academics, sports, arts, and events at BOLEXMAN.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrowKey="pages.gallery.eyebrow"
        titleKey="pages.gallery.title"
        descriptionKey="pages.gallery.description"
      />
      <GalleryShowcase hideHeading />
    </>
  );
}
