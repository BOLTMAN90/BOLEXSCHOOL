import { ROUTES } from "@/lib/constants";
import type { TranslationKey } from "@/lib/i18n/translations";

export type NavItem = { href: string; labelKey: TranslationKey };

/** Top-level nav links (Academics sub-pages are in the dropdown). */
export const NAV_ITEMS: NavItem[] = [
  { href: ROUTES.home, labelKey: "nav.home" },
  { href: ROUTES.about, labelKey: "nav.about" },
  { href: ROUTES.gallery, labelKey: "nav.gallery" },
  { href: ROUTES.contact, labelKey: "nav.contact" },
];

/** Shown under the Academics dropdown in the header. */
export const ACADEMICS_DROPDOWN_ITEMS: NavItem[] = [
  { href: ROUTES.admissions, labelKey: "nav.admissions" },
  { href: ROUTES.campusLife, labelKey: "nav.campusLife" },
  { href: ROUTES.news, labelKey: "nav.news" },
];

/** All pages for footer quick links and search. */
export const ALL_NAV_ITEMS: NavItem[] = [
  { href: ROUTES.home, labelKey: "nav.home" },
  { href: ROUTES.about, labelKey: "nav.about" },
  { href: ROUTES.academics, labelKey: "nav.academics" },
  ...ACADEMICS_DROPDOWN_ITEMS,
  { href: ROUTES.gallery, labelKey: "nav.gallery" },
  { href: ROUTES.contact, labelKey: "nav.contact" },
];

export const ACADEMICS_PATHS = [
  ROUTES.academics,
  ...ACADEMICS_DROPDOWN_ITEMS.map((item) => item.href),
];
