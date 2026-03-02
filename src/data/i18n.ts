import type { Locale } from "@/data/types";

type UiMessages = {
  nav: Record<"home" | "resume" | "projects" | "writings" | "contact", string>;
  home: {
    about: string;
    contactCta: string;
    writings: string;
    viewAllWritings: string;
  };
  writings: {
    title: string;
    subtitle: string;
    readArticle: string;
    addContentHint: string;
  };
  projects: {
    title: string;
    subtitle: string;
    liveDemo: string;
  };
  resume: {
    title: string;
    subtitle: string;
    openPdf: string;
    experience: string;
    education: string;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    github: string;
    linkedin: string;
    calendar: string;
    mail: string;
    courses: string;
    coursesLine1: string;
    coursesLine2: string;
    coursesLine3: string;
    askTutoring: string;
    openBooking: string;
    requestByEmail: string;
  };
  footer: {
    email: string;
    github: string;
    linkedin: string;
  };
  languageLabel: string;
};

export const availableLocales: Locale[] = ["en", "fr", "ro", "de"];
export const defaultLocale: Locale = "en";

export const resolveLocale = (value: string | undefined): Locale =>
  availableLocales.includes((value ?? "") as Locale)
    ? (value as Locale)
    : defaultLocale;

export const withLocale = (path: string, locale: Locale): string =>
  locale === defaultLocale ? path : `${path}?lang=${locale}`;

const uiMessages: Record<Locale, UiMessages> = {
  en: {
    nav: {
      home: "Home",
      resume: "Resume",
      projects: "Projects",
      writings: "Writings",
      contact: "Contact",
    },
    home: {
      about: "About",
      contactCta: "Reach out by email",
      writings: "Writings",
      viewAllWritings: "View all writings",
    },
    writings: {
      title: "Notes on engineering, architecture, and AI",
      subtitle: "A collection of short articles from day-to-day software engineering work.",
      readArticle: "Read article",
      addContentHint: "Full article content can be added in src/data/writings.ts and later moved to MDX if needed.",
    },
    projects: {
      title: "Projects",
      subtitle: "Selected software engineering and AI projects.",
      liveDemo: "Live demo",
    },
    resume: {
      title: "Resume",
      subtitle: "Experience, skills, and education",
      openPdf: "Open PDF",
      experience: "Experience",
      education: "Education",
    },
    contact: {
      title: "Let's work together",
      subtitle: "For collaboration, freelance opportunities, or engineering discussions, reach out directly.",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      calendar: "Calendar",
      mail: "Mail",
      courses: "Courses & tutoring",
      coursesLine1: "Mathematics: high school to engineering-level topics",
      coursesLine2: "Computer science: programming, algorithms, data structures",
      coursesLine3: "Format: personalized online sessions, goal-oriented",
      askTutoring: "Ask about tutoring",
      openBooking: "Open booking",
      requestByEmail: "Request by email",
    },
    footer: {
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    languageLabel: "Lang",
  },
  fr: {
    nav: {
      home: "Accueil",
      resume: "CV",
      projects: "Projets",
      writings: "Articles",
      contact: "Contact",
    },
    home: {
      about: "À propos",
      contactCta: "Me contacter par email",
      writings: "Articles",
      viewAllWritings: "Voir tous les articles",
    },
    writings: {
      title: "Notes sur l'ingénierie, l'architecture et l'IA",
      subtitle: "Une collection d'articles courts issus de mon quotidien d'ingénieur logiciel.",
      readArticle: "Lire l'article",
      addContentHint: "Le contenu complet peut être ajouté dans src/data/writings.ts puis migré vers MDX.",
    },
    projects: {
      title: "Projets",
      subtitle: "Une sélection de projets en ingénierie logicielle et IA.",
      liveDemo: "Démo",
    },
    resume: {
      title: "CV",
      subtitle: "Expérience, compétences et formation",
      openPdf: "Ouvrir le PDF",
      experience: "Expérience",
      education: "Formation",
    },
    contact: {
      title: "Travaillons ensemble",
      subtitle: "Pour collaborer, une mission freelance ou discuter ingénierie, contactez-moi directement.",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      calendar: "Calendrier",
      mail: "Mail",
      courses: "Cours particuliers",
      coursesLine1: "Mathématiques: du lycée au niveau ingénieur",
      coursesLine2: "Informatique: programmation, algorithmes, structures de données",
      coursesLine3: "Format: sessions en ligne personnalisées, orientées objectifs",
      askTutoring: "Demander un cours",
      openBooking: "Ouvrir le calendrier",
      requestByEmail: "Demander par email",
    },
    footer: {
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    languageLabel: "Langue",
  },
  ro: {
    nav: {
      home: "Acasa",
      resume: "CV",
      projects: "Proiecte",
      writings: "Articole",
      contact: "Contact",
    },
    home: {
      about: "Despre",
      contactCta: "Contact direct pe email",
      writings: "Articole",
      viewAllWritings: "Vezi toate articolele",
    },
    writings: {
      title: "Notite despre inginerie, arhitectura si AI",
      subtitle: "O colectie de articole scurte din activitatea mea zilnica de inginer software.",
      readArticle: "Citeste articolul",
      addContentHint: "Continutul complet poate fi adaugat in src/data/writings.ts si mutat ulterior in MDX.",
    },
    projects: {
      title: "Proiecte",
      subtitle: "Proiecte selectate de inginerie software si AI.",
      liveDemo: "Demo",
    },
    resume: {
      title: "CV",
      subtitle: "Experienta, competente si educatie",
      openPdf: "Deschide PDF",
      experience: "Experienta",
      education: "Educatie",
    },
    contact: {
      title: "Hai sa colaboram",
      subtitle: "Pentru colaborari, freelance sau discutii tehnice, ma poti contacta direct.",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      calendar: "Calendar",
      mail: "Mail",
      courses: "Cursuri si mentoring",
      coursesLine1: "Matematica: liceu pana la nivel de inginerie",
      coursesLine2: "Informatica: programare, algoritmi, structuri de date",
      coursesLine3: "Format: sesiuni online personalizate, orientate pe obiective",
      askTutoring: "Intreaba despre cursuri",
      openBooking: "Deschide calendarul",
      requestByEmail: "Cere prin email",
    },
    footer: {
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    languageLabel: "Limba",
  },
  de: {
    nav: {
      home: "Start",
      resume: "Lebenslauf",
      projects: "Projekte",
      writings: "Artikel",
      contact: "Kontakt",
    },
    home: {
      about: "Ueber mich",
      contactCta: "Direkt per E-Mail kontaktieren",
      writings: "Artikel",
      viewAllWritings: "Alle Artikel ansehen",
    },
    writings: {
      title: "Notizen zu Engineering, Architektur und KI",
      subtitle: "Eine Sammlung kurzer Artikel aus meinem Software-Engineering-Alltag.",
      readArticle: "Artikel lesen",
      addContentHint: "Der volle Inhalt kann in src/data/writings.ts hinzugefuegt und spaeter nach MDX verschoben werden.",
    },
    projects: {
      title: "Projekte",
      subtitle: "Ausgewaehlte Software-Engineering- und KI-Projekte.",
      liveDemo: "Live-Demo",
    },
    resume: {
      title: "Lebenslauf",
      subtitle: "Erfahrung, Kompetenzen und Ausbildung",
      openPdf: "PDF oeffnen",
      experience: "Erfahrung",
      education: "Ausbildung",
    },
    contact: {
      title: "Lass uns zusammenarbeiten",
      subtitle: "Fuer Zusammenarbeit, Freelance-Anfragen oder technische Themen kannst du mich direkt kontaktieren.",
      email: "E-Mail",
      github: "GitHub",
      linkedin: "LinkedIn",
      calendar: "Kalender",
      mail: "Mail",
      courses: "Kurse und Mentoring",
      coursesLine1: "Mathematik: von Schule bis Ingenieur-Niveau",
      coursesLine2: "Informatik: Programmierung, Algorithmen, Datenstrukturen",
      coursesLine3: "Format: personalisierte Online-Sessions mit klarem Ziel",
      askTutoring: "Nach Kursen fragen",
      openBooking: "Kalender oeffnen",
      requestByEmail: "Per E-Mail anfragen",
    },
    footer: {
      email: "E-Mail",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    languageLabel: "Sprache",
  },
};

export const getUiMessages = (locale: Locale): UiMessages =>
  uiMessages[locale] ?? uiMessages[defaultLocale];
