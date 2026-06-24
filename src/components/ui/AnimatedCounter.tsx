"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  labelClassName?: string;
  label?: string;
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2.5,
  className,
  labelClassName,
  label,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <div
        className={cn(
          "font-stats text-4xl font-bold text-primary md:text-5xl dark:text-white",
          className
        )}
      >
        {prefix}
        {inView ? (
          <CountUp end={value} duration={duration} enableScrollSpy={false} />
        ) : (
          "0"
        )}
        {suffix}
      </div>
      {label && (
        <p
          className={cn(
            "mt-2 text-sm font-medium text-slate-600 dark:text-slate-400",
            labelClassName
          )}
        >
          {label}
        </p>
      )}
    </div>
  );
}
