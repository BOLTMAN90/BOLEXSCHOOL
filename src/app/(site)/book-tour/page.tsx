import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { BookTourForm } from "@/components/forms/BookTourForm";
import { VirtualTour } from "@/components/sections/VirtualTour";

export const metadata: Metadata = {
  title: "Book a Campus Tour",
  description: "Schedule a personalized visit to explore BOLEXMAN's campus, facilities, and community.",
};

export default function BookTourPage() {
  return (
    <>
      <PageHero
        eyebrowKey="pages.bookTour.eyebrow"
        titleKey="pages.bookTour.title"
        descriptionKey="pages.bookTour.description"
      />
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BookTourForm />
        </div>
      </section>
      <VirtualTour />
    </>
  );
}
