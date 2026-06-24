"use client";

import { useTranslation } from "@/components/providers/LanguageProvider";
import { FadeInView } from "@/components/ui/FadeInView";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ROUTES } from "@/lib/constants";

export function CTABanner() {
  const { t } = useTranslation();

  return (
    <section id="cta" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <FadeInView>
          <h2 className="font-heading text-3xl font-bold text-white md:text-5xl">
            {t("cta.title")}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            {t("cta.subtitle")}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink href={ROUTES.apply} variant="accent" size="lg">
              {t("btn.applyNow")}
            </ButtonLink>
            <ButtonLink href={ROUTES.contact} variant="outline" size="lg">
              {t("btn.contactUs")}
            </ButtonLink>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
