"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { useCallback } from "react";
import { FadeInView } from "@/components/ui/FadeInView";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CATEGORY_COLORS, NEWS_ITEMS } from "@/lib/constants";
import { useTranslation } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/utils";

const localeMap = { en: "en-US", fr: "fr-FR", es: "es-ES", ar: "ar-SA" } as const;

export function FeaturedNews({ hideHeading = false }: { hideHeading?: boolean }) {
  const { t, content, locale } = useTranslation();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="news" className="bg-white py-20 dark:bg-slate-950 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <div className="flex items-end justify-between">
            {!hideHeading ? (
              <SectionHeading
                eyebrow={t("pages.news.eyebrow")}
                title={t("pages.news.title")}
                description={t("pages.news.description")}
                align="left"
                className="mb-0"
              />
            ) : (
              <div />
            )}
            <div className="hidden gap-2 sm:flex">
              <button
                onClick={scrollPrev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 transition-colors hover:bg-slate-100 dark:border-slate-700"
                aria-label={content.news.prev}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={scrollNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 transition-colors hover:bg-slate-100 dark:border-slate-700"
                aria-label={content.news.next}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </FadeInView>

        <div className="mt-10 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {NEWS_ITEMS.map((item) => {
              const localized = content.news.items[item.id];
              const categoryKey = item.category as keyof typeof content.categories;
              return (
                <article
                  key={item.id}
                  className="group min-w-0 flex-[0_0_100%] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900 sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]"
                >
                  <div className="relative h-48 overflow-hidden sm:h-auto sm:w-2/5">
                    <Image
                      src={item.image}
                      alt={localized?.title ?? item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          "rounded-full px-3 py-1 text-xs font-semibold",
                          CATEGORY_COLORS[item.category]
                        )}
                      >
                        {content.categories[categoryKey] ?? localized?.category ?? item.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-500">
                        <Calendar className="h-3 w-3" />
                        {new Date(item.date).toLocaleDateString(localeMap[locale], {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h3 className="mt-3 font-heading text-lg font-bold text-primary dark:text-white">
                      {localized?.title ?? item.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">
                      {localized?.excerpt ?? item.excerpt}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
