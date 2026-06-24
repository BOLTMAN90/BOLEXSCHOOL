"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/components/providers/LanguageProvider";
import { ROUTES } from "@/lib/constants";
import { ACADEMICS_DROPDOWN_ITEMS, ACADEMICS_PATHS } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function AcademicsNavDropdown() {
  const pathname = usePathname();
  const { t } = useTranslation();
  const isActive = ACADEMICS_PATHS.includes(pathname);

  return (
    <div className="flex items-center">
      <Link
        href={ROUTES.academics}
        className={cn(
          "rounded-l-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white",
          pathname === ROUTES.academics ? "bg-white/10 text-white" : "text-white/90"
        )}
      >
        {t("nav.academics")}
      </Link>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            className={cn(
              "rounded-r-lg px-1.5 py-2 transition-colors hover:bg-white/10",
              isActive ? "bg-white/10 text-white" : "text-white/90"
            )}
            aria-label="Open academics submenu"
          >
            <ChevronDown className="h-4 w-4" />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="z-50 min-w-[200px] rounded-xl border border-white/20 bg-primary/95 p-1.5 shadow-xl backdrop-blur-xl"
            sideOffset={8}
            align="start"
          >
            {ACADEMICS_DROPDOWN_ITEMS.map((item) => (
              <DropdownMenu.Item key={item.href} asChild>
                <Link
                  href={item.href}
                  className={cn(
                    "block cursor-pointer rounded-lg px-3 py-2.5 text-sm outline-none transition-colors hover:bg-white/10",
                    pathname === item.href ? "bg-white/10 text-accent" : "text-white/90"
                  )}
                >
                  {t(item.labelKey)}
                </Link>
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}
