"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { HERO_IMAGE, HERO_STATS, ROUTES } from "@/lib/constants";
import { useTranslation } from "@/components/providers/LanguageProvider";
import { floatAnimation } from "@/lib/animations";

const statKeys = ["students", "teachers", "successRate", "years"] as const;

export function Hero() {
  const { t, content } = useTranslation();
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const y = useTransform(scrollY, [0, 500], [0, prefersReducedMotion ? 0 : 150]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt={content.hero.imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary/90" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-24 pb-32 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-semibold text-accent">
            {t("hero.badge")}
          </span>
          <h1 className="font-heading text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            {t("hero.title")}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
            {t("hero.subtitle")}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href={ROUTES.apply} variant="accent" size="lg">
              {t("btn.applyAdmission")}
              <ArrowRight className="h-5 w-5" />
            </ButtonLink>
            <ButtonLink href={ROUTES.academics} variant="outline" size="lg">
              {t("btn.explorePrograms")}
            </ButtonLink>
          </div>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 lg:mt-24">
          {HERO_STATS.map((stat, i) => (
            <motion.div
              key={statKeys[i]}
              variants={floatAnimation}
              animate="animate"
              transition={{ delay: i * 0.5 }}
            >
              <GlassCard className="text-center">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={content.hero.stats[statKeys[i]]}
                  className="text-2xl text-white md:text-3xl"
                  labelClassName="text-white/70"
                />
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
