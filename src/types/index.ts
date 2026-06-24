export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  extendedDescription: string;
  image: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: "Achievement" | "Competition" | "Event" | "Announcement";
  image: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  image: string;
  rating: number;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  aspect: "tall" | "wide" | "square";
}

export interface CampusImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface AdmissionStep {
  step: number;
  title: string;
  description: string;
}

export interface WhyCard {
  title: string;
  description: string;
  icon: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface VirtualTourChapter {
  id: string;
  title: string;
  narration: string;
  image: string;
  duration: number;
}
