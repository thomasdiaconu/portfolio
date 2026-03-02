import Image from "next/image";
import { documents, getUiMessages, resolveLocale, resumeContent } from "@/data";

type ResumePageProps = {
  searchParams: Promise<{ lang?: string }>;
};

export default async function ResumePage({ searchParams }: ResumePageProps) {
  const { lang } = await searchParams;
  const locale = resolveLocale(lang);
  const ui = getUiMessages(locale);

  return (
    <div className="space-y-8 md:space-y-10">
      <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/45">
              {ui.resume.title}
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {ui.resume.subtitle}
            </h1>
          </div>
          <a
            href={documents.resume}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:bg-white/10"
          >
            {ui.resume.openPdf}
          </a>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 md:p-10">
        <h2 className="text-xl font-semibold text-white">{ui.resume.experience}</h2>
        <div className="mt-6 space-y-4">
          {resumeContent.experience.map((entry) => (
            <article
              key={`${entry.company}-${entry.period}`}
              className="rounded-xl border border-white/10 bg-[#0b111a] p-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-medium text-white">{entry.role}</h3>
                  <p className="text-sm text-white/65">
                    {entry.company} · {entry.location}
                  </p>
                </div>
                <p className="font-mono text-xs text-white/45">{entry.period}</p>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {entry.technologies.map((tech) => (
                  <li
                    key={`${entry.company}-${tech.name}`}
                    className="inline-flex items-center gap-2 rounded-md border border-white/12 bg-white/[0.04] px-2.5 py-1.5 text-xs text-white/80"
                  >
                    <Image
                      src={`https://cdn.simpleicons.org/${tech.iconSlug}/E6EDF7`}
                      alt={`${tech.name} logo`}
                      width={14}
                      height={14}
                      className="h-3.5 w-3.5"
                      unoptimized
                    />
                    <span>{tech.name}</span>
                  </li>
                ))}
              </ul>
              <ul className="mt-4 space-y-2">
                {entry.highlights.map((highlight) => (
                  <li key={highlight} className="text-sm leading-7 text-white/70">
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 md:p-10">
        <h2 className="text-xl font-semibold text-white">{ui.resume.education}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {resumeContent.education.map((entry) => (
            <article
              key={`${entry.degree}-${entry.institution}`}
              className="rounded-xl border border-white/10 bg-[#0b111a] p-5"
            >
              <h3 className="text-lg font-medium text-white">{entry.degree}</h3>
              <p className="mt-1 text-sm text-white/65">
                {entry.institution} · {entry.location}
              </p>
              <p className="mt-1 font-mono text-xs text-white/45">{entry.period}</p>
              <ul className="mt-3 space-y-2">
                {entry.details.map((detail) => (
                  <li key={detail} className="text-sm leading-7 text-white/70">
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
