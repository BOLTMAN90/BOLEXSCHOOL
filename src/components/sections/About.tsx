"use client";

import Image from "next/image";
import { FadeInView } from "@/components/ui/FadeInView";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ABOUT_COUNTERS, ABOUT_IMAGES } from "@/lib/constants";

export function About({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <section id="about" className="bg-white py-20 dark:bg-slate-950 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeInView>
            <div className="relative h-[500px]">
              <div className="absolute left-0 top-0 h-64 w-48 overflow-hidden rounded-2xl shadow-xl">
                <div className="relative h-full w-full">
                <Image
                  src={ABOUT_IMAGES[0]}
                  alt="Students collaborating"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 200px"
                />
                </div>
              </div>
              <div className="absolute right-0 top-12 h-72 w-56 overflow-hidden rounded-2xl shadow-xl">
                <div className="relative h-full w-full">
                <Image
                  src={ABOUT_IMAGES[1]}
                  alt="Classroom learning"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 224px"
                />
                </div>
              </div>
              <div className="absolute bottom-0 left-1/4 h-56 w-64 overflow-hidden rounded-2xl shadow-xl">
                <div className="relative h-full w-full">
                <Image
                  src={ABOUT_IMAGES[2]}
                  alt="Campus activities"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 256px"
                />
                </div>
              </div>
              <div className="absolute -right-4 top-1/2 h-24 w-24 rounded-full bg-accent/20 blur-2xl" />
            </div>
          </FadeInView>

          <FadeInView delay={0.2}>
            {!hideHeading && (
              <SectionHeading
                eyebrow="About Us"
                title="A Legacy of Excellence"
                align="left"
              />
            )}
            <p className="leading-relaxed text-slate-600 dark:text-slate-400">
              Founded over 25 years ago, BOLEXMAN has grown into a premier
              international academy trusted by families worldwide. Our holistic
              approach nurtures intellectual curiosity, creative expression, and
              ethical leadership in every student.
            </p>
            <blockquote className="mt-8 border-l-4 border-accent pl-6">
              <p className="font-heading text-lg font-semibold text-primary dark:text-white">
                Our Mission
              </p>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                To nurture excellence, integrity, innovation, and leadership.
              </p>
            </blockquote>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {ABOUT_COUNTERS.map((counter) => (
                <AnimatedCounter
                  key={counter.label}
                  value={counter.value}
                  suffix={counter.suffix}
                  label={counter.label}
                />
              ))}
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
