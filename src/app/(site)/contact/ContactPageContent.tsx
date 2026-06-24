"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { TranslatedButtonLink } from "@/components/ui/TranslatedButtonLink";
import { ContactForm } from "@/components/forms/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import { useTranslation } from "@/components/providers/LanguageProvider";
import { CONTACT, ROUTES } from "@/lib/constants";

export function ContactPageContent() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        eyebrowKey="pages.contact.eyebrow"
        titleKey="pages.contact.title"
        descriptionKey="pages.contact.description"
      />
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                  <Mail className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-primary dark:text-white">
                    {t("footer.contact")}
                  </h3>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="mt-1 text-slate-600 hover:text-secondary dark:text-slate-400"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-primary dark:text-white">Phone</h3>
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="mt-1 text-slate-600 hover:text-secondary dark:text-slate-400"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-primary dark:text-white">Address</h3>
                  <p className="mt-1 text-slate-600 dark:text-slate-400">{CONTACT.address}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <TranslatedButtonLink href={ROUTES.apply} variant="accent" labelKey="btn.applyNow" />
                <TranslatedButtonLink href={ROUTES.bookTour} variant="secondary" labelKey="btn.bookTour" />
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
      <FAQ hideHeading />
    </>
  );
}
