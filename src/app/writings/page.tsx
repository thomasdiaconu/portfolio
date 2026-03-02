import Link from "next/link";
import { getUiMessages, resolveLocale, withLocale } from "@/data";
import { getWritings } from "@/data/writings";

type WritingsPageProps = {
  searchParams: Promise<{ lang?: string }>;
};

export default async function WritingsPage({ searchParams }: WritingsPageProps) {
  const { lang } = await searchParams;
  const locale = resolveLocale(lang);
  const ui = getUiMessages(locale);
  const writings = getWritings(locale);

  return (
    <div className="space-y-8 md:space-y-10">
      <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/45">
          {ui.nav.writings}
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {ui.writings.title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65">
          {ui.writings.subtitle}
        </p>
      </section>

      <section className="space-y-4">
        {writings.map((writing) => (
          <article
            key={writing.slug}
            className="rounded-2xl border border-white/10 bg-[#0b111a] p-6"
          >
            <p className="font-mono text-xs text-white/45">{writing.date}</p>
            <h2 className="mt-1 text-xl font-medium text-white">{writing.title}</h2>
            <p className="mt-3 text-sm leading-7 text-white/70">
              {writing.excerpt}
            </p>
            <Link
              href={withLocale(`/writings/${writing.slug}`, locale)}
              className="mt-4 inline-block text-sm text-cyan-200/80 transition hover:text-cyan-100"
            >
              {ui.writings.readArticle}
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
