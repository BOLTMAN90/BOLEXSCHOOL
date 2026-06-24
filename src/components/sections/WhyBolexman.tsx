"use client";

import { motion } from "framer-motion";
import { GraduationCap, Lightbulb, Trophy } from "lucide-react";
import { FadeInView } from "@/components/ui/FadeInView";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WHY_CARDS } from "@/lib/constants";
import { cardHover, staggerContainer } from "@/lib/animations";

const iconMap = {
  GraduationCap,
  Lightbulb,
  Trophy,
};

export function WhyBolexman() {
  return (
    <section id="why" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <SectionHeading
            eyebrow="Why BOLEXMAN"
            title="Excellence in Every Dimension"
            description="We combine rigorous academics with character development to prepare students for a world of opportunity."
          />
        </FadeInView>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-8 md:grid-cols-3"
        >
          {WHY_CARDS.map((card) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={card.title}
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                className="group cursor-default"
              >
                <div className="h-full rounded-2xl border border-slate-200/80 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group-hover:border-accent/30 group-hover:shadow-[0_20px_50px_rgb(0,0,0,0.12)] dark:border-slate-700 dark:bg-slate-900">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 transition-colors group-hover:bg-accent/20">
                    <Icon className="h-7 w-7 text-secondary group-hover:text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary dark:text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
