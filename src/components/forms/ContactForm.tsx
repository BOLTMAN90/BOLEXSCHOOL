"use client";

import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { useTranslation } from "@/components/providers/LanguageProvider";
import { CONTACT } from "@/lib/constants";

export function ContactForm() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = new FormData(e.currentTarget);
    const name = form.get("name") as string;
    const email = form.get("email") as string;
    const message = form.get("message") as string;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : `Failed to send. Email us directly at ${CONTACT.email}`
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-lg dark:border-slate-700 dark:bg-slate-900">
        <CheckCircle className="mx-auto h-12 w-12 text-success" />
        <p className="mt-4 font-semibold text-primary dark:text-white">
          {t("contactForm.successTitle")}
        </p>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          {t("contactForm.successMessage")}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-700 dark:bg-slate-900"
    >
      <h3 className="font-heading text-xl font-bold text-primary dark:text-white">
        {t("contactForm.title")}
      </h3>
      <div>
        <label htmlFor="contactName" className="mb-2 block text-sm font-medium">
          {t("contactForm.name")}
        </label>
        <input
          id="contactName"
          name="name"
          type="text"
          required
          disabled={loading}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-secondary disabled:opacity-60 dark:border-slate-700 dark:bg-slate-800"
        />
      </div>
      <div>
        <label htmlFor="contactEmail" className="mb-2 block text-sm font-medium">
          {t("contactForm.email")}
        </label>
        <input
          id="contactEmail"
          name="email"
          type="email"
          required
          disabled={loading}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-secondary disabled:opacity-60 dark:border-slate-700 dark:bg-slate-800"
        />
      </div>
      <div>
        <label htmlFor="contactMessage" className="mb-2 block text-sm font-medium">
          {t("contactForm.message")}
        </label>
        <textarea
          id="contactMessage"
          name="message"
          rows={4}
          required
          disabled={loading}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-secondary disabled:opacity-60 dark:border-slate-700 dark:bg-slate-800"
        />
      </div>
      {error && (
        <p className="text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 font-medium text-white transition-colors hover:bg-secondary/90 disabled:opacity-60"
      >
        {loading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            {t("contactForm.sending")}
          </>
        ) : (
          t("contactForm.send")
        )}
      </button>
    </form>
  );
}
