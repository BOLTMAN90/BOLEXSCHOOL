import type { LucideIcon } from "lucide-react";
import {
  Bell,
  BookOpen,
  Calendar,
  ClipboardList,
  CreditCard,
  FileText,
  GraduationCap,
  MessageSquare,
  Trophy,
  User,
  Users,
} from "lucide-react";
import { ROUTES } from "@/lib/constants";
import type { PortalRole } from "@/lib/portal";

export interface PortalQuickLink {
  icon: LucideIcon;
  label: string;
  note: string;
}

export interface PortalExperience {
  role: PortalRole;
  label: string;
  badge: string;
  title: string;
  subtitle: string;
  heroGradient: string;
  icon: LucideIcon;
  dashboardPath: string;
  quickLinks: PortalQuickLink[];
  highlights: string[];
}

export const PORTAL_EXPERIENCE: Record<PortalRole, PortalExperience> = {
  parent: {
    role: "parent",
    label: "Parent",
    badge: "Parent Portal",
    title: "Support your child's learning",
    subtitle: "Fees, reports, messages, and school updates in one place.",
    heroGradient: "from-secondary/20 via-secondary/5 to-transparent",
    icon: User,
    dashboardPath: `${ROUTES.portal}/parent/dashboard`,
    quickLinks: [
      { icon: Users, label: "My Children", note: "Profiles and class details" },
      { icon: BookOpen, label: "Grades & Reports", note: "Progress and report cards" },
      { icon: CreditCard, label: "Fees & Payments", note: "Invoices and payment history" },
      { icon: MessageSquare, label: "Teacher Messages", note: "Contact class teachers" },
      { icon: Bell, label: "School Announcements", note: "News and event alerts" },
      { icon: Calendar, label: "School Calendar", note: "PTA meetings and events" },
    ],
    highlights: [
      "Monitor attendance and academic progress",
      "Stay informed about fees and school events",
      "Message teachers and receive announcements",
    ],
  },
  student: {
    role: "student",
    label: "Student",
    badge: "Student Portal",
    title: "Your school hub",
    subtitle: "Classes, homework, grades, and campus life — built for you.",
    heroGradient: "from-accent/30 via-accent/10 to-transparent",
    icon: GraduationCap,
    dashboardPath: `${ROUTES.portal}/student/dashboard`,
    quickLinks: [
      { icon: BookOpen, label: "My Grades", note: "Subjects and results" },
      { icon: ClipboardList, label: "Assignments", note: "Homework and due dates" },
      { icon: Calendar, label: "Class Schedule", note: "Timetable and rooms" },
      { icon: FileText, label: "Learning Resources", note: "Notes and materials" },
      { icon: Trophy, label: "Achievements", note: "Awards and activities" },
      { icon: Bell, label: "Announcements", note: "School and class updates" },
    ],
    highlights: [
      "Check assignments and upcoming deadlines",
      "View your grades and class schedule",
      "Follow announcements and school activities",
    ],
  },
};

export function getPortalDashboardPath(role: PortalRole) {
  return PORTAL_EXPERIENCE[role].dashboardPath;
}
