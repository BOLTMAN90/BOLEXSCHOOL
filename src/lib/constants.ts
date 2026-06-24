import type {
  AdmissionStep,
  CalendarEvent,
  CampusImage,
  FAQItem,
  GalleryImage,
  NavLink,
  NewsItem,
  Program,
  StatItem,
  Testimonial,
  VirtualTourChapter,
  WhyCard,
} from "@/types";

export const SITE_NAME = "BOLEXMAN";
export const SITE_TAGLINE = "Shaping Tomorrow's Leaders Today";
export const SITE_DESCRIPTION =
  "BOLEXMAN is a premium international academy empowering students with academic excellence, leadership, innovation, and character development.";

export const CONTACT = {
  email: "Belrender000@gmail.com",
  phone: "+2349026466738",
  address: "N01, aratunmi street, kelebe, osogbo, osun state",
};

export const ROUTES = {
  home: "/",
  about: "/about",
  academics: "/academics",
  admissions: "/admissions",
  apply: "/apply",
  bookTour: "/book-tour",
  portal: "/portal",
  campusLife: "/campus-life",
  news: "/news",
  gallery: "/gallery",
  contact: "/contact",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: ROUTES.home },
  { label: "About Us", href: ROUTES.about },
  { label: "Academics", href: ROUTES.academics },
  { label: "Admissions", href: ROUTES.admissions },
  { label: "Campus Life", href: ROUTES.campusLife },
  { label: "News", href: ROUTES.news },
  { label: "Gallery", href: ROUTES.gallery },
  { label: "Contact", href: ROUTES.contact },
];

export const HERO_STATS: StatItem[] = [
  { value: 5000, suffix: "+", label: "Students" },
  { value: 150, suffix: "+", label: "Expert Teachers" },
  { value: 98, suffix: "%", label: "Success Rate" },
  { value: 25, suffix: "+", label: "Years of Excellence" },
];

export const WHY_CARDS: WhyCard[] = [
  {
    title: "Academic Excellence",
    description:
      "Rigorous curricula aligned with global standards, delivered by world-class educators committed to every student's success.",
    icon: "GraduationCap",
  },
  {
    title: "Innovative Learning",
    description:
      "Cutting-edge STEM labs, digital classrooms, and project-based learning that prepares students for the future.",
    icon: "Lightbulb",
  },
  {
    title: "Leadership Development",
    description:
      "Character-building programs, mentorship, and real-world leadership opportunities that shape confident global citizens.",
    icon: "Trophy",
  },
];

export const ABOUT_COUNTERS: StatItem[] = [
  { value: 25, suffix: "+", label: "Years of Excellence" },
  { value: 3, suffix: "", label: "Campus Locations" },
  { value: 12, suffix: "+", label: "Academic Programs" },
];

export const PROGRAMS: Program[] = [
  {
    id: "early-years",
    title: "Early Years",
    description: "Nurturing curiosity and foundational skills in a joyful environment.",
    extendedDescription:
      "Our Early Years program fosters creativity, social skills, and a love of learning through play-based and inquiry-driven activities.",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
  },
  {
    id: "primary",
    title: "Primary School",
    description: "Building strong academic foundations with personalized attention.",
    extendedDescription:
      "Students develop literacy, numeracy, and critical thinking through an integrated curriculum designed for holistic growth.",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80",
  },
  {
    id: "secondary",
    title: "Secondary School",
    description: "Preparing students for university and global leadership roles.",
    extendedDescription:
      "Advanced coursework, career guidance, and leadership programs equip students for top universities worldwide.",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80",
  },
  {
    id: "science",
    title: "Science Department",
    description: "Hands-on experiments and research-driven scientific inquiry.",
    extendedDescription:
      "State-of-the-art laboratories and expert faculty inspire the next generation of scientists and innovators.",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
  },
  {
    id: "technology",
    title: "Technology Department",
    description: "Coding, robotics, and digital literacy for the modern world.",
    extendedDescription:
      "From AI fundamentals to app development, students gain practical tech skills valued by leading industries.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
  },
  {
    id: "arts",
    title: "Arts Department",
    description: "Creative expression through visual arts, music, and performance.",
    extendedDescription:
      "Our arts program cultivates imagination and cultural appreciation through studio work, ensembles, and exhibitions.",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80",
  },
];

export const ADMISSION_STEPS: AdmissionStep[] = [
  {
    step: 1,
    title: "Submit Application",
    description:
      "Complete our online application form with academic records and supporting documents.",
  },
  {
    step: 2,
    title: "Assessment",
    description:
      "Students participate in age-appropriate academic assessments and skill evaluations.",
  },
  {
    step: 3,
    title: "Interview",
    description:
      "A friendly interview with our admissions team and program coordinators.",
  },
  {
    step: 4,
    title: "Enrollment",
    description:
      "Receive your acceptance letter and complete enrollment for the upcoming term.",
  },
];

export const CAMPUS_CATEGORIES = [
  "All",
  "Sports",
  "Technology",
  "Arts",
  "Science Labs",
  "Events",
  "Student Clubs",
] as const;

export const CAMPUS_IMAGES: CampusImage[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
    alt: "Students playing sports",
    category: "Sports",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",
    alt: "Sports field activities",
    category: "Sports",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
    alt: "Technology classroom",
    category: "Technology",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80",
    alt: "Coding workshop",
    category: "Technology",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&q=80",
    alt: "Art studio session",
    category: "Arts",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&q=80",
    alt: "Music performance",
    category: "Arts",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80",
    alt: "Science laboratory",
    category: "Science Labs",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80",
    alt: "Chemistry experiment",
    category: "Science Labs",
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    alt: "School event celebration",
    category: "Events",
  },
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    alt: "Graduation ceremony",
    category: "Events",
  },
  {
    id: "11",
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    alt: "Student club meeting",
    category: "Student Clubs",
  },
  {
    id: "12",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
    alt: "Collaborative club project",
    category: "Student Clubs",
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "1",
    title: "BOLEXMAN Ranked Top International School 2026",
    excerpt:
      "Our academy has been recognized among the top 10 international schools for academic excellence and innovation.",
    date: "2026-05-15",
    category: "Achievement",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
  },
  {
    id: "2",
    title: "National Science Olympiad Champions",
    excerpt:
      "Our students secured first place in the National Science Olympiad, showcasing exceptional talent and dedication.",
    date: "2026-04-22",
    category: "Competition",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
  },
  {
    id: "3",
    title: "Annual Cultural Festival 2026",
    excerpt:
      "Join us for a vibrant celebration of diversity, arts, and community at our flagship cultural festival.",
    date: "2026-06-01",
    category: "Event",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  },
  {
    id: "4",
    title: "Admissions Open for 2026–2027",
    excerpt:
      "Applications are now open for the new academic year. Early application is encouraged for preferred programs.",
    date: "2026-05-01",
    category: "Announcement",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote:
      "BOLEXMAN has transformed our daughter's confidence and academic performance. The teachers genuinely care about each child's growth.",
    name: "Sarah Mitchell",
    role: "Parent of Grade 8 Student",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "The leadership programs and STEM facilities are world-class. I feel prepared for university and beyond.",
    name: "James Okonkwo",
    role: "Grade 12 Student",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "We chose BOLEXMAN for its values and global outlook. It has exceeded every expectation we had as a family.",
    name: "Elena Rodriguez",
    role: "Parent of Grade 5 Student",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    rating: 5,
  },
  {
    id: "4",
    quote:
      "The arts and sports programs gave me balance alongside academics. BOLEXMAN nurtures the whole person.",
    name: "Aisha Patel",
    role: "Alumni, Class of 2024",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
    rating: 5,
  },
];

export const ACHIEVEMENT_STATS: StatItem[] = [
  { value: 100, suffix: "%", label: "Graduation Rate" },
  { value: 50, suffix: "+", label: "National Awards" },
  { value: 200, suffix: "+", label: "Scholarships" },
  { value: 10000, suffix: "+", label: "Alumni" },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
    alt: "Campus overview",
    category: "Campus",
    aspect: "wide",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80",
    alt: "Students in classroom",
    category: "Academics",
    aspect: "tall",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",
    alt: "Sports day",
    category: "Sports",
    aspect: "square",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
    alt: "Tech lab",
    category: "Technology",
    aspect: "wide",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&q=80",
    alt: "Art exhibition",
    category: "Arts",
    aspect: "tall",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80",
    alt: "Science lab",
    category: "Science",
    aspect: "square",
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    alt: "School event",
    category: "Events",
    aspect: "wide",
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
    alt: "Group study",
    category: "Students",
    aspect: "tall",
  },
  {
    id: "g9",
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80",
    alt: "Primary classroom",
    category: "Academics",
    aspect: "square",
  },
];

export const CALENDAR_EVENTS: CalendarEvent[] = [
  {
    id: "e1",
    title: "Open House Day",
    date: "2026-06-20",
    category: "Admissions",
    description: "Tour our campus and meet faculty members.",
  },
  {
    id: "e2",
    title: "Science Fair",
    date: "2026-06-25",
    category: "Academics",
    description: "Student science projects on display.",
  },
  {
    id: "e3",
    title: "Parent-Teacher Conference",
    date: "2026-07-05",
    category: "Community",
    description: "Meet with teachers to discuss student progress.",
  },
  {
    id: "e4",
    title: "Summer Arts Showcase",
    date: "2026-07-15",
    category: "Arts",
    description: "Performances and exhibitions by our talented students.",
  },
  {
    id: "e5",
    title: "New Student Orientation",
    date: "2026-08-20",
    category: "Admissions",
    description: "Welcome event for incoming students and families.",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What age groups does BOLEXMAN accept?",
    answer:
      "We welcome students from Early Years (ages 3–5) through Secondary School (ages 11–18). Each program is tailored to the developmental needs of its age group.",
  },
  {
    question: "What is the admissions process?",
    answer:
      "Our four-step process includes submitting an application, completing an assessment, attending an interview, and finalizing enrollment upon acceptance.",
  },
  {
    question: "Does BOLEXMAN offer scholarships?",
    answer:
      "Yes. We offer merit-based and need-based scholarships. Over 200 scholarships are awarded annually to deserving students.",
  },
  {
    question: "What extracurricular activities are available?",
    answer:
      "Students can participate in sports, robotics, debate, music, drama, community service, and over 30 student-led clubs.",
  },
  {
    question: "Is transportation provided?",
    answer:
      "We operate a safe and reliable bus service covering major routes across the city. Contact admissions for route details.",
  },
  {
    question: "What are the school hours?",
    answer:
      "Regular school hours are 8:00 AM to 3:30 PM, Monday through Friday. Extended care programs are available until 6:00 PM.",
  },
  {
    question: "How can I schedule a campus tour?",
    answer:
      "Click 'Book a Tour' on our website or contact Belrender000@gmail.com to schedule a personalized campus visit.",
  },
  {
    question: "What curriculum does BOLEXMAN follow?",
    answer:
      "We offer an internationally recognized curriculum blending rigorous academics with character education and 21st-century skills.",
  },
];

export const VIRTUAL_TOUR_FEATURES = [
  "Explore modern classrooms and lecture halls",
  "Tour state-of-the-art science and technology labs",
  "Visit sports facilities and performing arts centers",
  "Discover student common areas and libraries",
];

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80";

export const VIRTUAL_TOUR_CHAPTERS: VirtualTourChapter[] = [
  {
    id: "welcome",
    title: "Welcome to BOLEXMAN",
    narration:
      "Welcome to BOLEXMAN — a premium international academy in Osogbo, Osun State. For over 25 years we have empowered students with academic excellence, leadership, innovation, and strong character.",
    image: HERO_IMAGE,
    duration: 12,
  },
  {
    id: "mission",
    title: "Our Mission & Values",
    narration:
      "Our mission is to shape tomorrow's leaders today. We blend rigorous academics with mentorship, creativity, and global citizenship so every student discovers their potential.",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&q=80",
    duration: 11,
  },
  {
    id: "academics",
    title: "Academic Programs",
    narration:
      "From Early Years through Secondary School, our internationally recognized curriculum builds literacy, numeracy, and critical thinking. STEM labs, arts studios, and technology programs prepare students for top universities worldwide.",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1920&q=80",
    duration: 13,
  },
  {
    id: "innovation",
    title: "Innovation & STEM",
    narration:
      "State-of-the-art science and technology labs bring learning to life. Students explore robotics, coding, research, and hands-on experiments guided by expert faculty.",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1920&q=80",
    duration: 11,
  },
  {
    id: "campus-life",
    title: "Campus Life",
    narration:
      "Beyond the classroom, BOLEXMAN offers sports fields, performing arts centers, student clubs, and vibrant community events that build confidence and lifelong friendships.",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=80",
    duration: 11,
  },
  {
    id: "community",
    title: "A Thriving Community",
    narration:
      "With 5,000+ students and 150+ expert teachers, our community celebrates achievement, diversity, and a 98% success rate. Families trust BOLEXMAN for holistic education.",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1920&q=80",
    duration: 11,
  },
  {
    id: "admissions",
    title: "Join BOLEXMAN",
    narration:
      "Ready to begin? Apply online, complete our friendly assessment and interview, and enroll for the upcoming term. We welcome families who share our passion for excellence.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80",
    duration: 11,
  },
  {
    id: "visit",
    title: "Visit Our Campus",
    narration:
      "Experience BOLEXMAN in person. Book a campus tour or contact us at Belrender000@gmail.com. We are located at N01, aratunmi street, kelebe, osogbo, osun state. We look forward to meeting you.",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1920&q=80",
    duration: 12,
  },
];

export const ABOUT_IMAGES = [
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
  "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80",
  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80",
];

export const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "ar", label: "العربية" },
];

export const CATEGORY_COLORS: Record<string, string> = {
  Achievement: "bg-accent/20 text-accent",
  Competition: "bg-secondary/20 text-secondary",
  Event: "bg-success/20 text-success",
  Announcement: "bg-primary/10 text-primary dark:bg-white/10 dark:text-white",
  Admissions: "bg-secondary/20 text-secondary",
  Academics: "bg-accent/20 text-accent",
  Community: "bg-success/20 text-success",
  Arts: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
};
