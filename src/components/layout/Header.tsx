"use client";

import { Menu, X, LogIn, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AcademicsNavDropdown } from "@/components/layout/AcademicsNavDropdown";
import { useTranslation } from "@/components/providers/LanguageProvider";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SearchModal } from "@/components/ui/SearchModal";
import { DarkModeToggle } from "@/components/widgets/DarkModeToggle";
import { LanguageSwitcher } from "@/components/widgets/LanguageSwitcher";
import { useScrollHeader } from "@/hooks/useScrollHeader";
import { ROUTES, SITE_NAME } from "@/lib/constants";
import { ACADEMICS_DROPDOWN_ITEMS, NAV_ITEMS } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const { t } = useTranslation();
  const scrolled = useScrollHeader();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAcademicsOpen, setMobileAcademicsOpen] = useState(false);
  const isHome = pathname === "/";
  const solid = !isHome || scrolled;

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileAcademicsOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-500",
          solid
            ? "bg-primary/95 shadow-lg shadow-black/10 backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href={ROUTES.home}
            className="font-heading text-2xl font-bold tracking-tight text-white"
          >
            {SITE_NAME}
          </Link>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
            {NAV_ITEMS.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white",
                  pathname === link.href ? "bg-white/10 text-white" : "text-white/90"
                )}
              >
                {t(link.labelKey)}
              </Link>
            ))}
            <AcademicsNavDropdown />
            {NAV_ITEMS.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white",
                  pathname === link.href ? "bg-white/10 text-white" : "text-white/90"
                )}
              >
                {t(link.labelKey)}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-1 lg:flex">
            <SearchModal className="text-white" />
            <LanguageSwitcher className="text-white" />
            <DarkModeToggle className="text-white" />
            <Link
              href={ROUTES.portal}
              className="ml-2 flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10"
            >
              <LogIn className="h-4 w-4" />
              {t("nav.portal")}
            </Link>
            <ButtonLink href={ROUTES.apply} variant="accent" size="sm" className="ml-2">
              {t("btn.applyNow")}
            </ButtonLink>
            <ButtonLink href={ROUTES.bookTour} variant="outline" size="sm" className="ml-2 border-white/50">
              {t("btn.bookTour")}
            </ButtonLink>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeMobile} />
          <div className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-primary p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="font-heading text-xl font-bold text-white">{SITE_NAME}</span>
              <button onClick={closeMobile} aria-label="Close menu">
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <nav className="mt-8 flex flex-col gap-1 overflow-y-auto" aria-label="Mobile navigation">
              <Link
                href={ROUTES.home}
                onClick={closeMobile}
                className={cn(
                  "rounded-lg px-4 py-3 text-lg font-medium hover:bg-white/10",
                  pathname === ROUTES.home ? "bg-white/10 text-white" : "text-white/90"
                )}
              >
                {t("nav.home")}
              </Link>
              <Link
                href={ROUTES.about}
                onClick={closeMobile}
                className={cn(
                  "rounded-lg px-4 py-3 text-lg font-medium hover:bg-white/10",
                  pathname === ROUTES.about ? "bg-white/10 text-white" : "text-white/90"
                )}
              >
                {t("nav.about")}
              </Link>

              <button
                type="button"
                onClick={() => setMobileAcademicsOpen(!mobileAcademicsOpen)}
                className="flex items-center justify-between rounded-lg px-4 py-3 text-lg font-medium text-white/90 hover:bg-white/10"
              >
                {t("nav.academics")}
                <ChevronDown
                  className={cn("h-5 w-5 transition-transform", mobileAcademicsOpen && "rotate-180")}
                />
              </button>
              {mobileAcademicsOpen && (
                <div className="ml-4 flex flex-col gap-1 border-l border-white/20 pl-4">
                  <Link
                    href={ROUTES.academics}
                    onClick={closeMobile}
                    className={cn(
                      "rounded-lg px-3 py-2 text-base font-medium hover:bg-white/10",
                      pathname === ROUTES.academics ? "text-accent" : "text-white/80"
                    )}
                  >
                    {t("nav.academics")}
                  </Link>
                  {ACADEMICS_DROPDOWN_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMobile}
                      className={cn(
                        "rounded-lg px-3 py-2 text-base font-medium hover:bg-white/10",
                        pathname === item.href ? "text-accent" : "text-white/80"
                      )}
                    >
                      {t(item.labelKey)}
                    </Link>
                  ))}
                </div>
              )}

              <Link
                href={ROUTES.gallery}
                onClick={closeMobile}
                className={cn(
                  "rounded-lg px-4 py-3 text-lg font-medium hover:bg-white/10",
                  pathname === ROUTES.gallery ? "bg-white/10 text-white" : "text-white/90"
                )}
              >
                {t("nav.gallery")}
              </Link>
              <Link
                href={ROUTES.contact}
                onClick={closeMobile}
                className={cn(
                  "rounded-lg px-4 py-3 text-lg font-medium hover:bg-white/10",
                  pathname === ROUTES.contact ? "bg-white/10 text-white" : "text-white/90"
                )}
              >
                {t("nav.contact")}
              </Link>
              <Link
                href={ROUTES.portal}
                onClick={closeMobile}
                className="rounded-lg px-4 py-3 text-lg font-medium text-white/90 hover:bg-white/10"
              >
                {t("nav.studentPortal")}
              </Link>
            </nav>
            <div className="mt-auto flex flex-col gap-3 pt-6">
              <ButtonLink href={ROUTES.apply} variant="accent" className="w-full" onClick={closeMobile}>
                {t("btn.applyNow")}
              </ButtonLink>
              <ButtonLink href={ROUTES.bookTour} variant="outline" className="w-full" onClick={closeMobile}>
                {t("btn.bookTour")}
              </ButtonLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
