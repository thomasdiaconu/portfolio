import { defaultLocale } from "@/data/i18n";
import type { Locale } from "@/data/types";

export interface Writing {
  slug: string;
  date: string;
  translations: Partial<
    Record<
      Locale,
      {
        title: string;
        excerpt: string;
      }
    >
  >;
}

export const writings: Writing[] = [
  {
    slug: "modernizing-legacy-systems",
    date: "2026-03-01",
    translations: {
      en: {
        title: "Modernizing legacy systems without losing reliability",
        excerpt:
          "A practical approach to modernization projects: incrementality, observability, and delivery discipline.",
      },
      fr: {
        title: "Moderniser les systemes legacy sans perdre en fiabilite",
        excerpt:
          "Une approche pragmatique de la modernisation: incrementalite, observabilite et discipline de livraison.",
      },
      ro: {
        title: "Modernizarea sistemelor legacy fara a pierde fiabilitatea",
        excerpt:
          "O abordare practica: incrementare, observabilitate si disciplina de livrare.",
      },
      de: {
        title: "Legacy-Systeme modernisieren ohne Zuverlaessigkeit zu verlieren",
        excerpt:
          "Ein pragmatischer Ansatz mit Inkrementen, Observability und Lieferdisziplin.",
      },
    },
  },
  {
    slug: "engineering-notes-on-ai-assistance",
    date: "2026-02-12",
    translations: {
      en: {
        title: "Engineering notes on AI-assisted development",
        excerpt:
          "How I use AI tools in daily engineering work while keeping code quality and architecture standards high.",
      },
      fr: {
        title: "Notes d'ingenierie sur le developpement assiste par IA",
        excerpt:
          "Comment j'utilise les outils IA au quotidien en conservant un haut niveau de qualite de code et d'architecture.",
      },
      ro: {
        title: "Notite de inginerie despre dezvoltarea asistata de AI",
        excerpt:
          "Cum folosesc zilnic instrumente AI pastrand standarde ridicate de cod si arhitectura.",
      },
      de: {
        title: "Engineering-Notizen zur KI-unterstuetzten Entwicklung",
        excerpt:
          "Wie ich KI-Tools im Alltag nutze und gleichzeitig hohe Code- und Architekturstandards halte.",
      },
    },
  },
];

export const getWritings = (locale: Locale) =>
  writings.map((writing) => {
    const localized =
      writing.translations[locale] ?? writing.translations[defaultLocale];
    const fallback = writing.translations.en;

    return {
      slug: writing.slug,
      date: writing.date,
      title: localized?.title ?? fallback?.title ?? "",
      excerpt: localized?.excerpt ?? fallback?.excerpt ?? "",
    };
  });
