import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ApplyForm } from "@/components/forms/ApplyForm";

export const metadata: Metadata = {
  title: "Apply for Admission",
  description: "Submit your application to join BOLEXMAN International Academy.",
};

export default function ApplyPage() {
  return (
    <>
      <PageHero
        eyebrowKey="pages.apply.eyebrow"
        titleKey="pages.apply.title"
        descriptionKey="pages.apply.description"
      />
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ApplyForm />
        </div>
      </section>
    </>
  );
}
