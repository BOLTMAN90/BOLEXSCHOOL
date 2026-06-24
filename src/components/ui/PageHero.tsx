"use client";

import { useTranslation } from "@/components/providers/LanguageProvider";
import type { TranslationKey } from "@/lib/i18n/translations";

interface PageHeroProps {
  eyebrowKey?: TranslationKey;
  titleKey: TranslationKey;
  descriptionKey?: TranslationKey;
}

export function PageHero({ eyebrowKey, titleKey, descriptionKey }: PageHeroProps) {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {eyebrowKey && (
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-accent">
            {t(eyebrowKey)}
          </span>
        )}
        <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          {t(titleKey)}
        </h1>
        {descriptionKey && (
          <p className="mt-4 max-w-2xl text-lg text-white/80">{t(descriptionKey)}</p>
        )}
      </div>
    </section>
  );
}
