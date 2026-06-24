"use client";

import {
  Camera,
  Link2,
  Mail,
  MapPin,
  Phone,
  Share2,
  Video,
} from "lucide-react";
import Link from "next/link";
import { useCallback, useState } from "react";
import { useTranslation } from "@/components/providers/LanguageProvider";
import { CONTACT, ROUTES, SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";
import { ALL_NAV_ITEMS } from "@/lib/nav";

export function Footer() {
  const { t } = useTranslation();
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const showStatus = useCallback((message: string) => {
    setStatusMessage(message);
    window.setTimeout(() => setStatusMessage(null), 2500);
  }, []);

  const getSiteUrl = useCallback(() => {
    if (typeof window === "undefined") return "";
    return window.location.origin;
  }, []);

  const handleShare = useCallback(async () => {
    const url = getSiteUrl();
    const shareData = {
      title: SITE_NAME,
      text: SITE_DESCRIPTION,
      url,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      showStatus(t("footer.linkCopied"));
    } catch {
      window.prompt("Copy this link:", url);
    }
  }, [getSiteUrl, showStatus, t]);

  const handleCopyLink = useCallback(async () => {
    const url = getSiteUrl();

    try {
      await navigator.clipboard.writeText(url);
      showStatus(t("footer.linkCopied"));
    } catch {
      window.prompt("Copy this link:", url);
    }
  }, [getSiteUrl, showStatus, t]);

  const quickActions = [
    {
      key: "share",
      Icon: Share2,
      label: t("footer.share"),
      onClick: handleShare,
    },
    {
      key: "gallery",
      Icon: Camera,
      label: t("footer.gallery"),
      href: ROUTES.gallery,
    },
    {
      key: "copy-link",
      Icon: Link2,
      label: t("footer.copyLink"),
      onClick: handleCopyLink,
    },
    {
      key: "virtual-tour",
      Icon: Video,
      label: t("footer.virtualTour"),
      href: `${ROUTES.campusLife}#virtual-tour`,
    },
    {
      key: "email",
      Icon: Mail,
      label: t("footer.email"),
      href: `mailto:${CONTACT.email}`,
    },
  ] as const;

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href={ROUTES.home} className="font-heading text-2xl font-bold">
              {SITE_NAME}
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {t("hero.title")}. {t("footer.tagline")}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {quickActions.map((action) => {
                const className =
                  "flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary";

                if ("href" in action && action.href) {
                  const isExternal = action.href.startsWith("http") || action.href.startsWith("mailto:");

                  if (isExternal || action.href.includes("#")) {
                    return (
                      <a
                        key={action.key}
                        href={action.href}
                        className={className}
                        aria-label={action.label}
                        title={action.label}
                      >
                        <action.Icon className="h-4 w-4" />
                      </a>
                    );
                  }

                  return (
                    <Link
                      key={action.key}
                      href={action.href}
                      className={className}
                      aria-label={action.label}
                      title={action.label}
                    >
                      <action.Icon className="h-4 w-4" />
                    </Link>
                  );
                }

                return (
                  <button
                    key={action.key}
                    type="button"
                    onClick={action.onClick}
                    className={className}
                    aria-label={action.label}
                    title={action.label}
                  >
                    <action.Icon className="h-4 w-4" />
                  </button>
                );
              })}
            </div>
            {statusMessage && (
              <p className="mt-3 text-xs text-accent" role="status" aria-live="polite">
                {statusMessage}
              </p>
            )}
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold">{t("footer.quickLinks")}</h3>
            <ul className="mt-4 space-y-3">
              {ALL_NAV_ITEMS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-accent"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold">{t("footer.contact")}</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href={`tel:${CONTACT.phone}`} className="hover:text-white">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{CONTACT.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold">{t("footer.newsletter")}</h3>
            <p className="mt-4 text-sm text-white/70">{t("footer.newsletterDesc")}</p>
            <form className="mt-4 flex flex-col gap-3">
              <input
                type="email"
                placeholder={t("footer.emailPlaceholder")}
                className="rounded-full bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-accent"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="rounded-full bg-accent px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-accent/90"
              >
                {t("footer.subscribe")}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          <p>
            &copy; {new Date().getFullYear()} {SITE_NAME}. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
