import type { Metadata } from "next";
import { ContactPageContent } from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with BOLEXMAN for admissions, tours, and general inquiries.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
