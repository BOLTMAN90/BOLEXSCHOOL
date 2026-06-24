"use client";

import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "@/components/providers/LanguageProvider";
import { ALL_NAV_ITEMS } from "@/lib/nav";
import { cn } from "@/lib/utils";

interface SearchModalProps {
  className?: string;
}

export function SearchModal({ className }: SearchModalProps) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const results = ALL_NAV_ITEMS.filter((link) =>
    t(link.labelKey).toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/10",
            className
          )}
          aria-label="Search"
        >
          <Search className="h-5 w-5" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-[20%] z-50 w-full max-w-lg -translate-x-1/2 rounded-2xl border border-white/20 bg-white p-4 shadow-2xl backdrop-blur-xl dark:bg-slate-900">
          <Dialog.Title className="sr-only">Search site pages</Dialog.Title>
          <div className="flex items-center gap-3 border-b border-slate-200 pb-3 dark:border-slate-700">
            <Search className="h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search pages... (Ctrl+K)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent text-lg outline-none placeholder:text-slate-400"
              autoFocus
            />
            <Dialog.Close asChild>
              <button aria-label="Close search">
                <X className="h-5 w-5 text-slate-400" />
              </button>
            </Dialog.Close>
          </div>
          <div className="mt-3 max-h-64 overflow-y-auto">
            {results.length > 0 ? (
              results.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm hover:bg-secondary/10"
                >
                  {t(link.labelKey)}
                </Link>
              ))
            ) : (
              <p className="px-3 py-4 text-sm text-slate-500">No results found</p>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
