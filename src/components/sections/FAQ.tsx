"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";
import { FadeInView } from "@/components/ui/FadeInView";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQ({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <section id="faq" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeInView>
          {!hideHeading && (
            <SectionHeading
              eyebrow="FAQ"
              title="Frequently Asked Questions"
              description="Find answers to common questions about admissions, programs, and campus life."
            />
          )}
        </FadeInView>

        <FadeInView delay={0.1}>
          <Accordion.Root type="single" collapsible className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <Accordion.Item
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between px-6 py-5 text-left font-heading font-semibold text-primary transition-colors hover:text-secondary dark:text-white">
                    {item.question}
                    <Plus className="h-5 w-5 shrink-0 text-secondary transition-transform group-data-[state=open]:hidden" />
                    <Minus className="hidden h-5 w-5 shrink-0 text-secondary group-data-[state=open]:block" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="px-6 pb-5 text-slate-600 dark:text-slate-400">
                    {item.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </FadeInView>
      </div>
    </section>
  );
}
