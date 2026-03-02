import rawEn from "@/data/legacy/en.json";
import rawFr from "@/data/legacy/fr.json";
import rawRo from "@/data/legacy/ro.json";
import rawDe from "@/data/legacy/de.json";
import { defaultLocale } from "@/data/i18n";
import type {
  LegacyContent,
  Locale,
  NavigationItem,
  SkillsContent,
  SocialLinks,
} from "@/data/types";

const en = rawEn as LegacyContent;
const fr = rawFr as LegacyContent;
const ro = rawRo as LegacyContent;
const de = rawDe as LegacyContent;

const text = (content: LegacyContent, key: string): string => {
  const value = content[key];
  return typeof value === "string" ? value : key;
};

const buildSkillsContent = (content: LegacyContent): SkillsContent => ({
  overview: [
    "Python",
    "Java",
    text(content, "ALGORITHMS"),
    text(content, "DATA_STRUCTURES"),
    "Angular",
    "HTML/CSS",
    text(content, "AI"),
    text(content, "MATHS"),
    "Git",
    "Docker",
  ],
  detailed: [
    { title: "Python", description: `${text(content, "AI")} & Data Science` },
    { title: "Java", description: text(content, "OOP") },
    {
      title: text(content, "ALGORITHMS"),
      description: `${text(content, "PS")} & ${text(content, "OPTIMIZATION")}`,
    },
    {
      title: text(content, "DATA_STRUCTURES"),
      description: text(content, "DATA_HANDLING"),
    },
    { title: "TS / JS", description: "Frontend & Backend" },
    { title: "Angular", description: text(content, "FRONTEND_DEV") },
    { title: "HTML/CSS", description: text(content, "RESPONSIVE") },
    {
      title: text(content, "AI_"),
      description: `Machine Learning, ${text(content, "NEURAL_NET")}`,
    },
    {
      title: text(content, "MATHS"),
      description: `${text(content, "PS")}, ${text(content, "ADVANCED_CALC")}, ${text(content, "ALGEBRA")}`,
    },
    { title: "Git", description: `${text(content, "VC")}, Collaboration` },
    {
      title: "Docker",
      description: `${text(content, "CONTAINERIZATION")}, ${text(content, "DEPLOYMENT")}`,
    },
  ],
  languages: [
    {
      language: text(content, "FR"),
      level: text(content, "BILINGUAL"),
    },
    {
      language: text(content, "EN"),
      level: text(content, "FLUENT"),
      note: "IELTS C1",
    },
    {
      language: text(content, "RO"),
      level: text(content, "BILINGUAL"),
    },
    {
      language: text(content, "GER"),
      level: text(content, "INTERMEDIATE"),
    },
  ],
  hobbies: [
    { name: "Tennis", description: text(content, "TENNIS_DESC") },
    { name: text(content, "CP"), description: text(content, "CP_DESC") },
    { name: text(content, "VG"), description: text(content, "VG_DESC") },
    { name: text(content, "FAMILY"), description: text(content, "FAMILY_DESC") },
    { name: text(content, "READING"), description: text(content, "READING_DESC") },
    {
      name: text(content, "TECH_ENTHUSIAST"),
      description: text(content, "TECH_ENTHUSIAST_DESC"),
    },
  ],
});

export const contentByLocale: Partial<Record<Locale, LegacyContent>> = {
  en,
  fr,
  ro,
  de,
};

export const navigation: NavigationItem[] = [
  { path: "/", key: "home" },
  { path: "/resume", key: "resume" },
  { path: "/projects", key: "projects" },
  { path: "/writings", key: "writings" },
  { path: "/contact", key: "contact" },
];

export const profile = {
  fullName: "Thomas Diaconu",
  location: "Paris",
  email: "thomas.diaconu94@gmail.com",
  bookingUrl: "",
  imagePath: "/images/profile.jpg",
  roleByLocale: {
    en: en.JOB,
    fr: fr.JOB,
    ro: ro.JOB,
    de: de.JOB,
  },
};

export const socialLinks: SocialLinks = {
  github: "https://github.com/thomasdiaconu",
  linkedin: "https://www.linkedin.com/in/thomas-diaconu/",
};

export const documents = {
  resume: "/docs/resume.pdf",
  report: "/docs/report.pdf",
};

export const teachingMedia = {
  mathematics:
    "https://static.vecteezy.com/system/resources/previews/021/692/542/original/math-formulas-mathematical-formulas-on-green-school-chalkboard-handwritten-scientific-math-equations-theories-or-calculations-background-vector.jpg",
  computerScience:
    "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/05/the-matrix-digital-rain-opening-credits-1.jpeg",
};

export const skillsByLocale: Record<Locale, SkillsContent> = {
  en: buildSkillsContent(en),
  fr: buildSkillsContent(fr),
  ro: buildSkillsContent(ro),
  de: buildSkillsContent(de),
};

export const getContent = (locale: Locale): LegacyContent => {
  const content = contentByLocale[locale];
  const fallback = contentByLocale[defaultLocale];
  if (content) return content;
  if (fallback) return fallback;
  return en;
};
