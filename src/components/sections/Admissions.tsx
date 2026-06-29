"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { FadeInView } from "@/components/ui/FadeInView";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ADMISSION_STEPS } from "@/lib/constants";
import { useTranslation } from "@/components/providers/LanguageProvider";

export function Admissions({ hideHeading = false }: { hideHeading?: boolean }) {
  const { t, content } = useTranslation();

  return (
    <section id="admissions" className="bg-white py-20 dark:bg-slate-950 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInView>
          {!hideHeading && (
            <SectionHeading
              eyebrow={t("pages.admissions.eyebrow")}
              title={t("pages.admissions.title")}
              description={content.admissions.homeDescription}
            />
          )}
        </FadeInView>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-secondary via-accent to-success md:block" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute left-0 right-0 top-8 hidden h-0.5 origin-left bg-gradient-to-r from-secondary via-accent to-success md:block"
          />

          <div className="grid gap-8 md:grid-cols-4">
            {ADMISSION_STEPS.map((step, i) => (
              <FadeInView key={step.step} delay={i * 0.15}>
                <div className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-xl font-bold text-white shadow-lg shadow-secondary/30">
                    {step.step}
                  </div>
                  {i < ADMISSION_STEPS.length - 1 && (
                    <div className="my-4 h-8 w-0.5 bg-gradient-to-b from-secondary to-accent md:hidden" />
                  )}
                  <h3 className="mt-4 font-heading text-lg font-bold text-primary dark:text-white">
                    {content.admissions.steps[i].title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {content.admissions.steps[i].description}
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-success">
                    <Check className="h-4 w-4" />
                    <span className="text-xs font-medium">
                      {content.admissions.stepLabel} {step.step}
                    </span>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
