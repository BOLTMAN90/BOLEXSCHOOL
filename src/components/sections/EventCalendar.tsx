"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FadeInView } from "@/components/ui/FadeInView";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CALENDAR_EVENTS, CATEGORY_COLORS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export function EventCalendar() {
  const [month, setMonth] = useState(5);
  const [year, setYear] = useState(2026);
  const [selectedDay, setSelectedDay] = useState<number | null>(20);

  const eventDates = useMemo(() => {
    const dates = new Map<number, string>();
    CALENDAR_EVENTS.forEach((e) => {
      const d = new Date(e.date);
      if (d.getMonth() === month && d.getFullYear() === year) {
        dates.set(d.getDate(), e.category);
      }
    });
    return dates;
  }, [month, year]);

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const selectedEvents = CALENDAR_EVENTS.filter((e) => {
    const d = new Date(e.date);
    return (
      d.getDate() === selectedDay &&
      d.getMonth() === month &&
      d.getFullYear() === year
    );
  });

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear(year - 1); }
    else setMonth(month - 1);
  };

  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(year + 1); }
    else setMonth(month + 1);
  };

  return (
    <section id="events" className="bg-white py-20 dark:bg-slate-950 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <SectionHeading
            eyebrow="Events"
            title="School Calendar"
            description="Stay up to date with upcoming events, open houses, and important dates."
          />
        </FadeInView>

        <div className="grid gap-8 lg:grid-cols-5">
          <FadeInView className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-slate-900">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-heading text-xl font-bold text-primary dark:text-white">
                  {MONTHS[month]} {year}
                </h3>
                <div className="flex gap-2">
                  <button onClick={prevMonth} className="rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Previous month">
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button onClick={nextMonth} className="rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Next month">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center">
                {DAYS.map((d) => (
                  <div key={d} className="py-2 text-xs font-semibold text-slate-500">{d}</div>
                ))}
                {Array.from({ length: firstDay }).map((_, i) => (
                  <div key={`empty-${i}`} />
                ))}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const hasEvent = eventDates.has(day);
                  const isSelected = selectedDay === day;
                  return (
                    <button
                      key={day}
                      onClick={() => setSelectedDay(day)}
                      className={cn(
                        "relative rounded-lg py-2 text-sm transition-colors",
                        isSelected
                          ? "bg-secondary text-white"
                          : "hover:bg-slate-100 dark:hover:bg-slate-800",
                        hasEvent && !isSelected && "font-bold text-secondary"
                      )}
                    >
                      {day}
                      {hasEvent && (
                        <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </FadeInView>

          <FadeInView delay={0.2} className="lg:col-span-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-slate-900">
              <h3 className="font-heading text-lg font-bold text-primary dark:text-white">
                {selectedDay
                  ? `Events on ${MONTHS[month]} ${selectedDay}, ${year}`
                  : "Select a date"}
              </h3>
              <div className="mt-4 space-y-4">
                {selectedEvents.length > 0 ? (
                  selectedEvents.map((event) => (
                    <div
                      key={event.id}
                      className="rounded-xl border border-slate-100 p-4 dark:border-slate-700"
                    >
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 text-xs font-semibold",
                          CATEGORY_COLORS[event.category] ?? "bg-slate-100"
                        )}
                      >
                        {event.category}
                      </span>
                      <h4 className="mt-2 font-semibold text-primary dark:text-white">
                        {event.title}
                      </h4>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                        {event.description}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-slate-500">No events on this date.</p>
                )}
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
