"use client";

import Image from "next/image";
import { FadeInView } from "@/components/ui/FadeInView";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ABOUT_IMAGES } from "@/lib/constants";
import { useTranslation } from "@/components/providers/LanguageProvider";

const counterKeys = ["years", "campuses", "programs"] as const;

export function About({ hideHeading = false }: { hideHeading?: boolean }) {
  const { t, content } = useTranslation();
  const counters = [
    { value: 25, suffix: "+" },
    { value: 3, suffix: "" },
    { value: 12, suffix: "+" },
  ];

  return (
    <section id="about" className="bg-white py-20 dark:bg-slate-950 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeInView>
            <div className="relative h-[500px]">
              {ABOUT_IMAGES.map((src, i) => (
                <div
                  key={src}
                  className={`absolute overflow-hidden rounded-2xl shadow-xl ${
                    i === 0
                      ? "left-0 top-0 h-64 w-48"
                      : i === 1
                        ? "right-0 top-12 h-72 w-56"
                        : "bottom-0 left-1/4 h-56 w-64"
                  }`}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={src}
                      alt={content.about.imageAlts[i]}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 256px"
                    />
                  </div>
                </div>
              ))}
              <div className="absolute -right-4 top-1/2 h-24 w-24 rounded-full bg-accent/20 blur-2xl" />
            </div>
          </FadeInView>

          <FadeInView delay={0.2}>
            {!hideHeading && (
              <SectionHeading
                eyebrow={t("pages.about.eyebrow")}
                title={t("pages.about.title")}
                align="left"
              />
            )}
            <p className="leading-relaxed text-slate-600 dark:text-slate-400">{content.about.body}</p>
            <blockquote className="mt-8 border-l-4 border-accent pl-6">
              <p className="font-heading text-lg font-semibold text-primary dark:text-white">
                {content.about.missionTitle}
              </p>
              <p className="mt-2 text-slate-600 dark:text-slate-400">{content.about.missionText}</p>
            </blockquote>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {counters.map((counter, i) => (
                <AnimatedCounter
                  key={counterKeys[i]}
                  value={counter.value}
                  suffix={counter.suffix}
                  label={content.about.counters[counterKeys[i]]}
                />
              ))}
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
