"use client";

import { FadeInView } from "@/components/ui/FadeInView";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ACHIEVEMENT_STATS } from "@/lib/constants";
import { useTranslation } from "@/components/providers/LanguageProvider";

const statKeys = ["graduation", "awards", "scholarships", "alumni"] as const;

export function Achievements() {
  const { content } = useTranslation();

  return (
    <section id="achievements" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              {content.achievements.eyebrow}
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white md:text-4xl">
              {content.achievements.title}
            </h2>
          </div>
        </FadeInView>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {ACHIEVEMENT_STATS.map((stat, i) => (
            <FadeInView key={statKeys[i]} delay={i * 0.1}>
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                label={content.achievements.stats[statKeys[i]]}
                className="text-white"
                labelClassName="text-white/70"
              />
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
