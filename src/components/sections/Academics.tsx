"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/components/providers/LanguageProvider";
import { FadeInView } from "@/components/ui/FadeInView";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROGRAMS } from "@/lib/constants";
import type { TranslationKey } from "@/lib/i18n/translations";
import { staggerContainer, fadeUp } from "@/lib/animations";

const programTitleKeys: Record<string, TranslationKey> = {
  "early-years": "programs.early-years.title",
  primary: "programs.primary.title",
  secondary: "programs.secondary.title",
  science: "programs.science.title",
  technology: "programs.technology.title",
  arts: "programs.arts.title",
};

const programDescKeys: Record<string, TranslationKey> = {
  "early-years": "programs.early-years.description",
  primary: "programs.primary.description",
  secondary: "programs.secondary.description",
  science: "programs.science.description",
  technology: "programs.technology.description",
  arts: "programs.arts.description",
};

export function Academics({ hideHeading = false }: { hideHeading?: boolean }) {
  const { t, content } = useTranslation();

  return (
    <section id="academics" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInView>
          {!hideHeading && (
            <SectionHeading
              eyebrow={t("sections.academics.eyebrow")}
              title={t("sections.academics.title")}
              description={t("sections.academics.description")}
            />
          )}
        </FadeInView>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PROGRAMS.map((program) => (
            <motion.div
              key={program.id}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={program.image}
                  alt={t(programTitleKeys[program.id])}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 transition-all duration-500 group-hover:pb-8">
                  <h3 className="font-heading text-xl font-bold text-white">
                    {t(programTitleKeys[program.id])}
                  </h3>
                  <p className="mt-2 text-sm text-white/80">
                    {t(programDescKeys[program.id])}
                  </p>
                  <p className="mt-0 max-h-0 overflow-hidden text-sm text-white/70 opacity-0 transition-all duration-500 group-hover:mt-3 group-hover:max-h-24 group-hover:opacity-100">
                    {content.programs.extended[program.id]}
                  </p>
                  <button className="mt-4 flex items-center gap-2 text-sm font-semibold text-accent opacity-0 transition-all duration-300 group-hover:opacity-100">
                    {t("programs.learnMore")}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
