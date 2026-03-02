import { documents, getContent, getUiMessages, resolveLocale } from "@/data";

const stripHtml = (value: string): string =>
  value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

type ProjectsPageProps = {
  searchParams: Promise<{ lang?: string }>;
};

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const { lang } = await searchParams;
  const locale = resolveLocale(lang);
  const ui = getUiMessages(locale);
  const content = getContent(locale);

  return (
    <div className="space-y-8 md:space-y-10">
      <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/45">
          {ui.projects.title}
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {content.PROJECTS_TITLE}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65">
          {ui.projects.subtitle}
        </p>
      </section>

      <section className="grid gap-4">
        {content.projects.map((project) => (
          <article
            key={project.name}
            className="rounded-2xl border border-white/10 bg-[#0b111a] p-6"
          >
            <h2 className="text-xl font-medium text-white">{project.name}</h2>
            <p className="mt-3 text-sm leading-7 text-white/70">
              {stripHtml(project.description)}
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-white/15 bg-white/[0.04] px-3 py-1.5 text-sm text-white/85 transition hover:bg-white/[0.1]"
                >
                  GitHub
                </a>
              ) : null}

              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-white/15 bg-white/[0.04] px-3 py-1.5 text-sm text-white/85 transition hover:bg-white/[0.1]"
                >
                  {ui.projects.liveDemo}
                </a>
              ) : null}

              {project.doc ? (
                <a
                  href={project.doc === "assets/docs/report.pdf" ? documents.report : project.doc}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-white/15 bg-white/[0.04] px-3 py-1.5 text-sm text-white/85 transition hover:bg-white/[0.1]"
                >
                  {content.REPORT}
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
