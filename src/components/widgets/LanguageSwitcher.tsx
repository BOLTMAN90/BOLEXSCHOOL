"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Globe, Check } from "lucide-react";
import { useTranslation } from "@/components/providers/LanguageProvider";
import { LANGUAGES } from "@/lib/constants";
import type { Locale } from "@/lib/i18n/translations";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useTranslation();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/10",
            className
          )}
          aria-label="Change language"
        >
          <Globe className="h-5 w-5" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="z-50 min-w-[160px] rounded-xl border border-white/20 bg-white/90 p-1 shadow-xl backdrop-blur-xl dark:bg-slate-900/90"
          sideOffset={8}
          align="end"
        >
          {LANGUAGES.map((lang) => (
            <DropdownMenu.Item
              key={lang.code}
              className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm outline-none hover:bg-secondary/10 focus:bg-secondary/10"
              onSelect={() => setLocale(lang.code as Locale)}
            >
              {lang.label}
              {locale === lang.code && <Check className="h-4 w-4 text-secondary" />}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
