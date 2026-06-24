import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FeaturedNews } from "@/components/sections/FeaturedNews";
import { EventCalendar } from "@/components/sections/EventCalendar";

export const metadata: Metadata = {
  title: "News & Events",
  description: "Stay updated with BOLEXMAN achievements, competitions, events, and announcements.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrowKey="pages.news.eyebrow"
        titleKey="pages.news.title"
        descriptionKey="pages.news.description"
      />
      <FeaturedNews hideHeading />
      <EventCalendar />
    </>
  );
}
