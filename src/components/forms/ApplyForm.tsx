"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { PROGRAMS } from "@/lib/constants";

export function ApplyForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <GlassCard className="mx-auto max-w-2xl text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-success" />
        <h2 className="mt-4 font-heading text-2xl font-bold text-primary dark:text-white">
          Application Submitted
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Thank you for applying to BOLEXMAN. Our admissions team will review
          your application and contact you within 3–5 business days.
        </p>
      </GlassCard>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-2 block text-sm font-medium">
            Student First Name *
          </label>
          <input
            id="firstName"
            name="firstName"
            required
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-secondary dark:border-slate-700 dark:bg-slate-900"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="mb-2 block text-sm font-medium">
            Student Last Name *
          </label>
          <input
            id="lastName"
            name="lastName"
            required
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-secondary dark:border-slate-700 dark:bg-slate-900"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="parentName" className="mb-2 block text-sm font-medium">
            Parent / Guardian Name *
          </label>
          <input
            id="parentName"
            name="parentName"
            required
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-secondary dark:border-slate-700 dark:bg-slate-900"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-secondary dark:border-slate-700 dark:bg-slate-900"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium">
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-secondary dark:border-slate-700 dark:bg-slate-900"
          />
        </div>
        <div>
          <label htmlFor="program" className="mb-2 block text-sm font-medium">
            Program Applying For *
          </label>
          <select
            id="program"
            name="program"
            required
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-secondary dark:border-slate-700 dark:bg-slate-900"
          >
            <option value="">Select a program</option>
            {PROGRAMS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Additional Information
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-secondary dark:border-slate-700 dark:bg-slate-900"
          placeholder="Tell us about the student, previous school, or any questions..."
        />
      </div>

      <Button type="submit" variant="accent" size="lg" className="w-full sm:w-auto">
        Submit Application
      </Button>
    </form>
  );
}
