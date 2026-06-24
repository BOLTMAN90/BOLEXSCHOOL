"use client";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { useTranslation } from "@/components/providers/LanguageProvider";
import { ROUTES } from "@/lib/constants";
import type { TranslationKey } from "@/lib/i18n/translations";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof ButtonLink> & {
  labelKey: TranslationKey;
};

export function TranslatedButtonLink({ labelKey, children, ...props }: Props) {
  const { t } = useTranslation();
  return <ButtonLink {...props}>{children ?? t(labelKey)}</ButtonLink>;
}

export function AdmissionsApplyCta() {
  return (
    <section className="bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <TranslatedButtonLink href={ROUTES.apply} variant="accent" size="lg" labelKey="btn.startApplication" />
      </div>
    </section>
  );
}
