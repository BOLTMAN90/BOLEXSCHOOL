"use client";

import Image from "next/image";
import { Play, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { FadeInView } from "@/components/ui/FadeInView";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HERO_IMAGE, VIRTUAL_TOUR_FEATURES } from "@/lib/constants";
import { VirtualTourPlayer } from "@/components/sections/VirtualTourPlayer";

function shouldAutoOpenTour() {
  if (typeof window === "undefined") return false;
  return window.location.hash === "#virtual-tour";
}

export function VirtualTour() {
  const [tourOpen, setTourOpen] = useState(false);

  useEffect(() => {
    if (shouldAutoOpenTour()) {
      setTourOpen(true);
    }

    const handleHashChange = () => {
      if (shouldAutoOpenTour()) {
        setTourOpen(true);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <>
      <section id="virtual-tour" className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeInView>
              <div className="group relative aspect-video overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={HERO_IMAGE}
                  alt="Virtual campus tour preview"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-primary/30 transition-colors group-hover:bg-primary/40" />
                <button
                  type="button"
                  onClick={() => setTourOpen(true)}
                  className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-primary shadow-xl transition-transform group-hover:scale-110"
                  aria-label="Start virtual tour"
                >
                  <Play className="ml-1 h-8 w-8" fill="currentColor" />
                </button>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <SectionHeading
                eyebrow="Virtual Tour"
                title="Explore Our Campus From Anywhere"
                description="Take an immersive virtual tour of our world-class facilities and discover what makes BOLEXMAN special."
                align="left"
              />
              <ul className="space-y-4">
                {VIRTUAL_TOUR_FEATURES.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                    <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="secondary"
                size="lg"
                className="mt-8"
                onClick={() => setTourOpen(true)}
              >
                <Play className="h-5 w-5" />
                Start Virtual Tour
              </Button>
            </FadeInView>
          </div>
        </div>
      </section>

      <VirtualTourPlayer open={tourOpen} onOpenChange={setTourOpen} />
    </>
  );
}
