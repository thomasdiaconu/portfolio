export type Locale = "en" | "fr" | "ro" | "de";

export interface Project {
  name: string;
  description: string;
  github: string;
  demo: string;
  doc: string;
}

export interface Experience {
  jobTitle: string;
  company: string;
  companyLogo: string;
  date: string;
  description: string;
}

export interface Education {
  title: string;
  school: string;
  years: string;
  description: string;
}

export interface LegacyContent {
  HOME: string;
  RESUME: string;
  SKILLS: string;
  PROJECTS: string;
  COURSES: string;
  CONTACT: string;
  WELCOME: string;
  JOB: string;
  PROJECTS_TITLE: string;
  REPORT: string;
  RESUME_DESC: string;
  PROFESSIONAL_EXP: string;
  EDUCATION: string;
  TEACHING_TITLE: string;
  TEACHING_DESC: string;
  MATH_TUTORING: string;
  MATH_TUTORING_DESC: string;
  CS_TUTORING: string;
  CS_TUTORING_DESC: string;
  READY: string;
  SCHEDULE: string;
  GET_IN_TOUCH: string;
  GET_IN_TOUCH_DESC: string;
  SEND_MESSAGE: string;
  FULL_NAME: string;
  EMAIL: string;
  SEND: string;
  RIGHTS: string;
  introduction: string;
  projects: Project[];
  experiences: Experience[];
  education: Education[];
  [key: string]: string | Project[] | Experience[] | Education[] | undefined;
}

export interface NavigationItem {
  path: string;
  key: "home" | "resume" | "projects" | "writings" | "contact";
}

export interface SocialLinks {
  github: string;
  linkedin: string;
}

export interface SkillsContent {
  overview: string[];
  detailed: Array<{ title: string; description: string }>;
  languages: Array<{ language: string; level: string; note?: string }>;
  hobbies: Array<{ name: string; description: string }>;
}
