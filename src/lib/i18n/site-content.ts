import type { Locale } from "./translations";
import { ar } from "./site-content-ar";
import { es } from "./site-content-es";

export interface SiteContent {
  hero: {
    imageAlt: string;
    stats: { students: string; teachers: string; successRate: string; years: string };
  };
  about: {
    body: string;
    missionTitle: string;
    missionText: string;
    imageAlts: [string, string, string];
    counters: { years: string; campuses: string; programs: string };
  };
  why: {
    eyebrow: string;
    title: string;
    description: string;
    cards: [{ title: string; description: string }, { title: string; description: string }, { title: string; description: string }];
  };
  admissions: {
    homeDescription: string;
    steps: [
      { title: string; description: string },
      { title: string; description: string },
      { title: string; description: string },
      { title: string; description: string },
    ];
    stepLabel: string;
  };
  programs: {
    extended: Record<string, string>;
  };
  campus: {
    categories: Record<string, string>;
    images: Record<string, { alt: string; category: string }>;
  };
  news: {
    items: Record<string, { title: string; excerpt: string; category: string }>;
    prev: string;
    next: string;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    description: string;
    items: Record<string, { quote: string; role: string }>;
    goTo: string;
  };
  achievements: {
    eyebrow: string;
    title: string;
    stats: { graduation: string; awards: string; scholarships: string; alumni: string };
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ question: string; answer: string }>;
  };
  calendar: {
    eyebrow: string;
    title: string;
    description: string;
    days: string[];
    months: string[];
    prevMonth: string;
    nextMonth: string;
    eventsOn: string;
    selectDate: string;
    noEvents: string;
    events: Record<string, { title: string; category: string; description: string }>;
  };
  gallery: {
    viewImage: string;
    preview: string;
    images: Record<string, { alt: string; category: string }>;
  };
  virtualTour: {
    imageAlt: string;
    startAria: string;
    eyebrow: string;
    title: string;
    description: string;
    features: string[];
    startButton: string;
    playerTitle: string;
    playerDesc: string;
    chapterOf: string;
    close: string;
    playing: string;
    chapters: Record<string, { title: string; narration: string }>;
  };
  contact: {
    phone: string;
    address: string;
  };
  categories: Record<string, string>;
}

const en: SiteContent = {
  hero: {
    imageAlt: "Students learning and collaborating at BOLEXMAN",
    stats: {
      students: "Students",
      teachers: "Expert Teachers",
      successRate: "Success Rate",
      years: "Years of Excellence",
    },
  },
  about: {
    body: "Founded over 25 years ago, BOLEXMAN has grown into a premier international academy trusted by families worldwide. Our holistic approach nurtures intellectual curiosity, creative expression, and ethical leadership in every student.",
    missionTitle: "Our Mission",
    missionText: "To nurture excellence, integrity, innovation, and leadership.",
    imageAlts: ["Students collaborating", "Classroom learning", "Campus activities"],
    counters: { years: "Years of Excellence", campuses: "Campus Locations", programs: "Academic Programs" },
  },
  why: {
    eyebrow: "Why BOLEXMAN",
    title: "Excellence in Every Dimension",
    description: "We combine rigorous academics with character development to prepare students for a world of opportunity.",
    cards: [
      { title: "Academic Excellence", description: "Rigorous curricula aligned with global standards, delivered by world-class educators committed to every student's success." },
      { title: "Innovative Learning", description: "Cutting-edge STEM labs, digital classrooms, and project-based learning that prepares students for the future." },
      { title: "Leadership Development", description: "Character-building programs, mentorship, and real-world leadership opportunities that shape confident global citizens." },
    ],
  },
  admissions: {
    homeDescription: "Our streamlined four-step admissions process makes it easy to join the BOLEXMAN family.",
    steps: [
      { title: "Submit Application", description: "Complete our online application form with academic records and supporting documents." },
      { title: "Assessment", description: "Students participate in age-appropriate academic assessments and skill evaluations." },
      { title: "Interview", description: "A friendly interview with our admissions team and program coordinators." },
      { title: "Enrollment", description: "Receive your acceptance letter and complete enrollment for the upcoming term." },
    ],
    stepLabel: "Step",
  },
  programs: {
    extended: {
      "early-years": "Our Early Years program fosters creativity, social skills, and a love of learning through play-based and inquiry-driven activities.",
      primary: "Students develop literacy, numeracy, and critical thinking through an integrated curriculum designed for holistic growth.",
      secondary: "Advanced coursework, career guidance, and leadership programs equip students for top universities worldwide.",
      science: "State-of-the-art laboratories and expert faculty inspire the next generation of scientists and innovators.",
      technology: "From AI fundamentals to app development, students gain practical tech skills valued by leading industries.",
      arts: "Our arts program cultivates imagination and cultural appreciation through studio work, ensembles, and exhibitions.",
    },
  },
  campus: {
    categories: { All: "All", Sports: "Sports", Technology: "Technology", Arts: "Arts", "Science Labs": "Science Labs", Events: "Events", "Student Clubs": "Student Clubs" },
    images: {
      "1": { alt: "Students playing sports", category: "Sports" },
      "2": { alt: "Sports field activities", category: "Sports" },
      "3": { alt: "Technology classroom", category: "Technology" },
      "4": { alt: "Coding workshop", category: "Technology" },
      "5": { alt: "Art studio session", category: "Arts" },
      "6": { alt: "Music performance", category: "Arts" },
      "7": { alt: "Science laboratory", category: "Science Labs" },
      "8": { alt: "Chemistry experiment", category: "Science Labs" },
      "9": { alt: "School event celebration", category: "Events" },
      "10": { alt: "Graduation ceremony", category: "Events" },
      "11": { alt: "Student club meeting", category: "Student Clubs" },
      "12": { alt: "Collaborative club project", category: "Student Clubs" },
    },
  },
  news: {
    items: {
      "1": { title: "BOLEXMAN Ranked Top International School 2026", excerpt: "Our academy has been recognized among the top 10 international schools for academic excellence and innovation.", category: "Achievement" },
      "2": { title: "National Science Olympiad Champions", excerpt: "Our students secured first place in the National Science Olympiad, showcasing exceptional talent and dedication.", category: "Competition" },
      "3": { title: "Annual Cultural Festival 2026", excerpt: "Join us for a vibrant celebration of diversity, arts, and community at our flagship cultural festival.", category: "Event" },
      "4": { title: "Admissions Open for 2026–2027", excerpt: "Applications are now open for the new academic year. Early application is encouraged for preferred programs.", category: "Announcement" },
    },
    prev: "Previous news",
    next: "Next news",
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "Voices From Our Community",
    description: "Hear from parents, students, and alumni about their BOLEXMAN experience.",
    items: {
      "1": { quote: "BOLEXMAN has transformed our daughter's confidence and academic performance. The teachers genuinely care about each child's growth.", role: "Parent of Grade 8 Student" },
      "2": { quote: "The leadership programs and STEM facilities are world-class. I feel prepared for university and beyond.", role: "Grade 12 Student" },
      "3": { quote: "We chose BOLEXMAN for its values and global outlook. It has exceeded every expectation we had as a family.", role: "Parent of Grade 5 Student" },
      "4": { quote: "The arts and sports programs gave me balance alongside academics. BOLEXMAN nurtures the whole person.", role: "Alumni, Class of 2024" },
    },
    goTo: "Go to testimonial",
  },
  achievements: {
    eyebrow: "Our Achievements",
    title: "Numbers That Speak",
    stats: { graduation: "Graduation Rate", awards: "National Awards", scholarships: "Scholarships", alumni: "Alumni" },
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently Asked Questions",
    description: "Find answers to common questions about admissions, programs, and campus life.",
    items: [
      { question: "What age groups does BOLEXMAN accept?", answer: "We welcome students from Early Years (ages 3–5) through Secondary School (ages 11–18). Each program is tailored to the developmental needs of its age group." },
      { question: "What is the admissions process?", answer: "Our four-step process includes submitting an application, completing an assessment, attending an interview, and finalizing enrollment upon acceptance." },
      { question: "Does BOLEXMAN offer scholarships?", answer: "Yes. We offer merit-based and need-based scholarships. Over 200 scholarships are awarded annually to deserving students." },
      { question: "What extracurricular activities are available?", answer: "Students can participate in sports, robotics, debate, music, drama, community service, and over 30 student-led clubs." },
      { question: "Is transportation provided?", answer: "We operate a safe and reliable bus service covering major routes across the city. Contact admissions for route details." },
      { question: "What are the school hours?", answer: "Regular school hours are 8:00 AM to 3:30 PM, Monday through Friday. Extended care programs are available until 6:00 PM." },
      { question: "How can I schedule a campus tour?", answer: "Click 'Book a Tour' on our website or contact Belrender000@gmail.com to schedule a personalized campus visit." },
      { question: "What curriculum does BOLEXMAN follow?", answer: "We offer an internationally recognized curriculum blending rigorous academics with character education and 21st-century skills." },
    ],
  },
  calendar: {
    eyebrow: "Events",
    title: "School Calendar",
    description: "Stay up to date with admissions events, academic milestones, and community gatherings.",
    days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    prevMonth: "Previous month",
    nextMonth: "Next month",
    eventsOn: "Events on",
    selectDate: "Select a date",
    noEvents: "No events on this date.",
    events: {
      e1: { title: "Open House Day", category: "Admissions", description: "Tour our campus and meet faculty members." },
      e2: { title: "Science Fair", category: "Academics", description: "Student science projects on display." },
      e3: { title: "Parent-Teacher Conference", category: "Community", description: "Meet with teachers to discuss student progress." },
      e4: { title: "Summer Arts Showcase", category: "Arts", description: "Performances and exhibitions by our talented students." },
      e5: { title: "New Student Orientation", category: "Admissions", description: "Welcome event for incoming students and families." },
    },
  },
  gallery: {
    viewImage: "View",
    preview: "Gallery image preview",
    images: {
      g1: { alt: "Campus overview", category: "Campus" },
      g2: { alt: "Students in classroom", category: "Academics" },
      g3: { alt: "Sports day", category: "Sports" },
      g4: { alt: "Tech lab", category: "Technology" },
      g5: { alt: "Art exhibition", category: "Arts" },
      g6: { alt: "Science lab", category: "Science" },
      g7: { alt: "School event", category: "Events" },
      g8: { alt: "Group study", category: "Students" },
      g9: { alt: "Primary classroom", category: "Academics" },
    },
  },
  virtualTour: {
    imageAlt: "Virtual campus tour preview",
    startAria: "Start virtual tour",
    eyebrow: "Virtual Tour",
    title: "Explore Our Campus From Anywhere",
    description: "Take an immersive virtual tour of our world-class facilities and discover what makes BOLEXMAN special.",
    features: [
      "Explore modern classrooms and lecture halls",
      "Tour state-of-the-art science and technology labs",
      "Visit sports facilities and performing arts centers",
      "Discover student common areas and libraries",
    ],
    startButton: "Start Virtual Tour",
    playerTitle: "BOLEXMAN virtual campus tour",
    playerDesc: "Guided automatic tour of BOLEXMAN International Academy",
    chapterOf: "Chapter",
    close: "Close virtual tour",
    playing: "Playing automatically",
    chapters: {
      welcome: { title: "Welcome to BOLEXMAN", narration: "Welcome to BOLEXMAN — a premium international academy in Osogbo, Osun State. For over 25 years we have empowered students with academic excellence, leadership, innovation, and strong character." },
      mission: { title: "Our Mission & Values", narration: "Our mission is to shape tomorrow's leaders today. We blend rigorous academics with mentorship, creativity, and global citizenship so every student discovers their potential." },
      academics: { title: "Academic Programs", narration: "From Early Years through Secondary School, our internationally recognized curriculum builds literacy, numeracy, and critical thinking. STEM labs, arts studios, and technology programs prepare students for top universities worldwide." },
      innovation: { title: "Innovation & STEM", narration: "State-of-the-art science and technology labs bring learning to life. Students explore robotics, coding, research, and hands-on experiments guided by expert faculty." },
      "campus-life": { title: "Campus Life", narration: "Beyond the classroom, BOLEXMAN offers sports fields, performing arts centers, student clubs, and vibrant community events that build confidence and lifelong friendships." },
      community: { title: "A Thriving Community", narration: "With 5,000+ students and 150+ expert teachers, our community celebrates achievement, diversity, and a 98% success rate. Families trust BOLEXMAN for holistic education." },
      admissions: { title: "Join BOLEXMAN", narration: "Ready to begin? Apply online, complete our friendly assessment and interview, and enroll for the upcoming term. We welcome families who share our passion for excellence." },
      visit: { title: "Visit Our Campus", narration: "Experience BOLEXMAN in person. Book a campus tour or contact us at Belrender000@gmail.com. We are located at N01, aratunmi street, kelebe, osogbo, osun state. We look forward to meeting you." },
    },
  },
  contact: { phone: "Phone", address: "Address" },
  categories: {
    Achievement: "Achievement",
    Competition: "Competition",
    Event: "Event",
    Announcement: "Announcement",
    Admissions: "Admissions",
    Academics: "Academics",
    Community: "Community",
    Arts: "Arts",
    Campus: "Campus",
    Sports: "Sports",
    Technology: "Technology",
    Science: "Science",
    Students: "Students",
  },
};

const fr: SiteContent = {
  ...en,
  hero: {
    imageAlt: "Élèves apprenant et collaborant à BOLEXMAN",
    stats: { students: "Élèves", teachers: "Enseignants experts", successRate: "Taux de réussite", years: "Années d'excellence" },
  },
  about: {
    body: "Fondée il y a plus de 25 ans, BOLEXMAN est devenue une académie internationale de premier plan, reconnue par les familles du monde entier. Notre approche holistique nourrit la curiosité intellectuelle, l'expression créative et le leadership éthique.",
    missionTitle: "Notre mission",
    missionText: "Cultiver l'excellence, l'intégrité, l'innovation et le leadership.",
    imageAlts: ["Élèves en collaboration", "Apprentissage en classe", "Activités sur le campus"],
    counters: { years: "Années d'excellence", campuses: "Campus", programs: "Programmes académiques" },
  },
  why: {
    eyebrow: "Pourquoi BOLEXMAN",
    title: "L'excellence à chaque dimension",
    description: "Nous allions une formation rigoureuse au développement du caractère pour préparer les élèves à un monde d'opportunités.",
    cards: [
      { title: "Excellence académique", description: "Des programmes rigoureux alignés sur les standards internationaux, dispensés par des éducateurs de classe mondiale." },
      { title: "Apprentissage innovant", description: "Laboratoires STEM, salles numériques et apprentissage par projet pour préparer l'avenir." },
      { title: "Développement du leadership", description: "Programmes de caractère, mentorat et opportunités de leadership qui façonnent des citoyens du monde confiants." },
    ],
  },
  admissions: {
    homeDescription: "Notre processus d'admission en quatre étapes facilite l'adhésion à la famille BOLEXMAN.",
    steps: [
      { title: "Soumettre la candidature", description: "Remplissez notre formulaire en ligne avec les relevés et documents requis." },
      { title: "Évaluation", description: "Les élèves passent des évaluations adaptées à leur âge et niveau." },
      { title: "Entretien", description: "Un entretien convivial avec notre équipe d'admission et les coordinateurs." },
      { title: "Inscription", description: "Recevez votre lettre d'acceptation et finalisez l'inscription." },
    ],
    stepLabel: "Étape",
  },
  programs: {
    extended: {
      "early-years": "Notre programme Petite enfance favorise la créativité, les compétences sociales et le goût d'apprendre par le jeu et l'exploration.",
      primary: "Les élèves développent littératie, numératie et esprit critique grâce à un programme intégré.",
      secondary: "Cours avancés, orientation et leadership préparent les élèves aux meilleures universités.",
      science: "Des laboratoires modernes et une équipe experte inspirent la prochaine génération de scientifiques.",
      technology: "De l'IA au développement d'applications, les élèves acquièrent des compétences recherchées.",
      arts: "Notre programme artistique cultive l'imagination par le studio, la musique et les expositions.",
    },
  },
  campus: {
    categories: { All: "Tout", Sports: "Sports", Technology: "Technologie", Arts: "Arts", "Science Labs": "Labos sciences", Events: "Événements", "Student Clubs": "Clubs étudiants" },
    images: {
      "1": { alt: "Élèves faisant du sport", category: "Sports" },
      "2": { alt: "Activités sur le terrain", category: "Sports" },
      "3": { alt: "Salle de technologie", category: "Technologie" },
      "4": { alt: "Atelier de codage", category: "Technologie" },
      "5": { alt: "Séance en studio d'art", category: "Arts" },
      "6": { alt: "Performance musicale", category: "Arts" },
      "7": { alt: "Laboratoire de sciences", category: "Labos sciences" },
      "8": { alt: "Expérience de chimie", category: "Labos sciences" },
      "9": { alt: "Célébration scolaire", category: "Événements" },
      "10": { alt: "Cérémonie de remise des diplômes", category: "Événements" },
      "11": { alt: "Réunion de club étudiant", category: "Clubs étudiants" },
      "12": { alt: "Projet collaboratif de club", category: "Clubs étudiants" },
    },
  },
  news: {
    items: {
      "1": { title: "BOLEXMAN classée meilleure école internationale 2026", excerpt: "Notre académie figure parmi les 10 meilleures écoles internationales pour l'excellence et l'innovation.", category: "Réussite" },
      "2": { title: "Champions de l'Olympiade nationale des sciences", excerpt: "Nos élèves ont remporté la première place, démontrant talent et dévouement.", category: "Compétition" },
      "3": { title: "Festival culturel annuel 2026", excerpt: "Célébrez la diversité, les arts et la communauté lors de notre festival phare.", category: "Événement" },
      "4": { title: "Admissions ouvertes 2026–2027", excerpt: "Les candidatures sont ouvertes. Postulez tôt pour les programmes privilégiés.", category: "Annonce" },
    },
    prev: "Actualité précédente",
    next: "Actualité suivante",
  },
  testimonials: {
    eyebrow: "Témoignages",
    title: "Voix de notre communauté",
    description: "Parents, élèves et anciens partagent leur expérience BOLEXMAN.",
    items: {
      "1": { quote: "BOLEXMAN a transformé la confiance et les résultats de notre fille. Les enseignants se soucient sincèrement de chaque enfant.", role: "Parent d'élève en 8e année" },
      "2": { quote: "Les programmes de leadership et les installations STEM sont exceptionnels. Je me sens prêt pour l'université.", role: "Élève de terminale" },
      "3": { quote: "Nous avons choisi BOLEXMAN pour ses valeurs et sa vision globale. Toutes nos attentes ont été dépassées.", role: "Parent d'élève en 5e année" },
      "4": { quote: "Les arts et le sport m'ont offert un équilibre avec les études. BOLEXMAN forme la personne entière.", role: "Ancienne, promotion 2024" },
    },
    goTo: "Aller au témoignage",
  },
  achievements: {
    eyebrow: "Nos réussites",
    title: "Des chiffres qui parlent",
    stats: { graduation: "Taux de diplomation", awards: "Prix nationaux", scholarships: "Bourses", alumni: "Anciens élèves" },
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions fréquentes",
    description: "Réponses aux questions courantes sur les admissions, programmes et vie du campus.",
    items: [
      { question: "Quels âges BOLEXMAN accepte-t-il ?", answer: "De la petite enfance (3–5 ans) au secondaire (11–18 ans), avec des programmes adaptés à chaque âge." },
      { question: "Quel est le processus d'admission ?", answer: "Candidature, évaluation, entretien et inscription après acceptation." },
      { question: "Proposez-vous des bourses ?", answer: "Oui, sur mérite et besoin. Plus de 200 bourses sont attribuées chaque année." },
      { question: "Quelles activités extrascolaires ?", answer: "Sports, robotique, débat, musique, théâtre, service communautaire et plus de 30 clubs." },
      { question: "Transport scolaire ?", answer: "Service de bus sûr sur les principaux axes. Contactez les admissions pour les itinéraires." },
      { question: "Horaires scolaires ?", answer: "8h00–15h30 du lundi au vendredi. Garderie possible jusqu'à 18h00." },
      { question: "Comment réserver une visite ?", answer: "Cliquez sur « Réserver une visite » ou écrivez à Belrender000@gmail.com." },
      { question: "Quel programme scolaire ?", answer: "Un programme international alliant rigueur académique, caractère et compétences du XXIe siècle." },
    ],
  },
  calendar: {
    eyebrow: "Événements",
    title: "Calendrier scolaire",
    description: "Admissions, jalons académiques et événements communautaires.",
    days: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
    months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
    prevMonth: "Mois précédent",
    nextMonth: "Mois suivant",
    eventsOn: "Événements le",
    selectDate: "Sélectionnez une date",
    noEvents: "Aucun événement à cette date.",
    events: {
      e1: { title: "Journée portes ouvertes", category: "Admissions", description: "Visitez le campus et rencontrez l'équipe." },
      e2: { title: "Foire aux sciences", category: "Académique", description: "Projets scientifiques des élèves." },
      e3: { title: "Conférence parents-professeurs", category: "Communauté", description: "Discutez des progrès de l'élève." },
      e4: { title: "Festival d'arts d'été", category: "Arts", description: "Spectacles et expositions des élèves." },
      e5: { title: "Orientation nouveaux élèves", category: "Admissions", description: "Accueil des familles entrantes." },
    },
  },
  gallery: {
    viewImage: "Voir",
    preview: "Aperçu de la galerie",
    images: {
      g1: { alt: "Vue du campus", category: "Campus" },
      g2: { alt: "Élèves en classe", category: "Académique" },
      g3: { alt: "Journée sportive", category: "Sports" },
      g4: { alt: "Labo technologie", category: "Technologie" },
      g5: { alt: "Exposition d'art", category: "Arts" },
      g6: { alt: "Laboratoire sciences", category: "Sciences" },
      g7: { alt: "Événement scolaire", category: "Événements" },
      g8: { alt: "Travail en groupe", category: "Élèves" },
      g9: { alt: "Classe primaire", category: "Académique" },
    },
  },
  virtualTour: {
    imageAlt: "Aperçu de la visite virtuelle",
    startAria: "Démarrer la visite virtuelle",
    eyebrow: "Visite virtuelle",
    title: "Explorez notre campus de partout",
    description: "Une visite immersive de nos installations de classe mondiale.",
    features: [
      "Salles de classe et amphithéâtres modernes",
      "Laboratoires sciences et technologie",
      "Installations sportives et arts du spectacle",
      "Espaces communs et bibliothèques",
    ],
    startButton: "Démarrer la visite",
    playerTitle: "Visite virtuelle BOLEXMAN",
    playerDesc: "Visite guidée automatique de l'académie BOLEXMAN",
    chapterOf: "Chapitre",
    close: "Fermer la visite",
    playing: "Lecture automatique",
    chapters: {
      welcome: { title: "Bienvenue à BOLEXMAN", narration: "Bienvenue à BOLEXMAN — académie internationale premium à Osogbo. Depuis plus de 25 ans, nous formons l'excellence, le leadership et le caractère." },
      mission: { title: "Mission et valeurs", narration: "Notre mission : former les leaders de demain. Nous allions rigueur académique, mentorat et citoyenneté mondiale." },
      academics: { title: "Programmes académiques", narration: "De la petite enfance au secondaire, un programme international prépare les élèves aux meilleures universités." },
      innovation: { title: "Innovation et STEM", narration: "Laboratoires de pointe : robotique, codage et expériences pratiques avec des experts." },
      "campus-life": { title: "Vie du campus", narration: "Sports, arts, clubs et événements qui créent confiance et amitiés durables." },
      community: { title: "Une communauté florissante", narration: "Plus de 5 000 élèves, 150 enseignants, 98 % de réussite. Une éducation holistique de confiance." },
      admissions: { title: "Rejoignez BOLEXMAN", narration: "Postulez en ligne, passez l'évaluation et l'entretien, puis inscrivez-vous." },
      visit: { title: "Visitez notre campus", narration: "Réservez une visite ou contactez Belrender000@gmail.com. N01, aratunmi street, kelebe, osogbo." },
    },
  },
  contact: { phone: "Téléphone", address: "Adresse" },
  categories: {
    Achievement: "Réussite", Competition: "Compétition", Event: "Événement", Announcement: "Annonce",
    Admissions: "Admissions", Academics: "Académique", Community: "Communauté", Arts: "Arts",
    Campus: "Campus", Sports: "Sports", Technology: "Technologie", Science: "Sciences", Students: "Élèves",
  },
};

export const siteContent: Record<Locale, SiteContent> = { en, fr, es, ar };
