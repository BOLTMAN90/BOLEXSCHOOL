"use client";

import { useState } from "react";
import { Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

const TOUR_TIMES = [
  "9:00 AM",
  "10:30 AM",
  "1:00 PM",
  "2:30 PM",
];

export function BookTourForm() {
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
          Tour Booked Successfully
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Your campus tour has been scheduled. A confirmation email will be sent
          shortly with directions and what to expect on your visit.
        </p>
      </GlassCard>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="tourName" className="mb-2 block text-sm font-medium">
            Full Name *
          </label>
          <input
            id="tourName"
            name="name"
            required
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-secondary dark:border-slate-700 dark:bg-slate-900"
          />
        </div>
        <div>
          <label htmlFor="tourEmail" className="mb-2 block text-sm font-medium">
            Email Address *
          </label>
          <input
            id="tourEmail"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-secondary dark:border-slate-700 dark:bg-slate-900"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="tourDate" className="mb-2 block text-sm font-medium">
            Preferred Date *
          </label>
          <input
            id="tourDate"
            name="date"
            type="date"
            required
            min={new Date().toISOString().split("T")[0]}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-secondary dark:border-slate-700 dark:bg-slate-900"
          />
        </div>
        <div>
          <label htmlFor="tourTime" className="mb-2 block text-sm font-medium">
            Preferred Time *
          </label>
          <select
            id="tourTime"
            name="time"
            required
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-secondary dark:border-slate-700 dark:bg-slate-900"
          >
            <option value="">Select a time</option>
            {TOUR_TIMES.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="tourPhone" className="mb-2 block text-sm font-medium">
          Phone Number *
        </label>
        <input
          id="tourPhone"
          name="phone"
          type="tel"
          required
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-secondary dark:border-slate-700 dark:bg-slate-900"
        />
      </div>

      <div>
        <label htmlFor="tourGuests" className="mb-2 block text-sm font-medium">
          Number of Guests
        </label>
        <input
          id="tourGuests"
          name="guests"
          type="number"
          min={1}
          max={10}
          defaultValue={2}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-secondary dark:border-slate-700 dark:bg-slate-900"
        />
      </div>

      <div>
        <label htmlFor="tourNotes" className="mb-2 block text-sm font-medium">
          Special Requests
        </label>
        <textarea
          id="tourNotes"
          name="notes"
          rows={3}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-secondary dark:border-slate-700 dark:bg-slate-900"
          placeholder="Programs you'd like to see, accessibility needs, etc."
        />
      </div>

      <Button type="submit" variant="secondary" size="lg" className="w-full sm:w-auto">
        <Calendar className="h-5 w-5" />
        Confirm Tour Booking
      </Button>
    </form>
  );
}
