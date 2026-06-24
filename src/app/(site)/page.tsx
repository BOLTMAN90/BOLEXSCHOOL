import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { WhyBolexman } from "@/components/sections/WhyBolexman";
import { Achievements } from "@/components/sections/Achievements";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Home",
  description:
    "BOLEXMAN — Premium international academy shaping tomorrow's leaders through academic excellence and innovation.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyBolexman />
      <Achievements />
      <CTABanner />
    </>
  );
}
