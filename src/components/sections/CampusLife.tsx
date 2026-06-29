"use client";

import Image from "next/image";
import { useState } from "react";
import { FadeInView } from "@/components/ui/FadeInView";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CAMPUS_CATEGORIES, CAMPUS_IMAGES } from "@/lib/constants";
import { useTranslation } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/utils";

export function CampusLife({ hideHeading = false }: { hideHeading?: boolean }) {
  const { t, content } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All"
      ? CAMPUS_IMAGES
      : CAMPUS_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <section id="campus-life" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInView>
          {!hideHeading && (
            <SectionHeading
              eyebrow={t("pages.campusLife.eyebrow")}
              title={t("pages.campusLife.title")}
              description={t("pages.campusLife.description")}
            />
          )}
        </FadeInView>

        <FadeInView delay={0.1}>
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {CAMPUS_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-all duration-300",
                  activeCategory === cat
                    ? "bg-secondary text-white shadow-lg shadow-secondary/20"
                    : "bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300"
                )}
              >
                {content.campus.categories[cat]}
              </button>
            ))}
          </div>
        </FadeInView>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {filtered.map((image, i) => {
            const localized = content.campus.images[image.id];
            return (
              <FadeInView key={image.id} delay={i * 0.05}>
                <div className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={image.src}
                      alt={localized?.alt ?? image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-primary/0 transition-all duration-300 group-hover:bg-primary/60" />
                    <div className="absolute inset-0 flex items-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                          {localized?.category ?? image.category}
                        </span>
                        <p className="mt-1 font-heading text-lg font-bold text-white">
                          {localized?.alt ?? image.alt}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
