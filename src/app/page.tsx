import Link from "next/link";
import { getContent, getUiMessages, profile, resolveLocale, withLocale } from "@/data";
import { getWritings } from "@/data/writings";

type HomePageProps = {
  searchParams: Promise<{ lang?: string }>;
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const { lang } = await searchParams;
  const locale = resolveLocale(lang);
  const ui = getUiMessages(locale);
  const content = getContent(locale);
  const writings = getWritings(locale).slice(0, 2);
  const introParagraphs = content.introduction
    .split("\n\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <div className="space-y-10 md:space-y-12">
      <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/45">
          {ui.home.about}
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {profile.fullName}
        </h1>
        <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-cyan-200/80">
          {profile.roleByLocale[locale]} · {profile.location}
        </p>
        <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-7 text-white/72 md:text-base">
          {introParagraphs.slice(0, 2).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <a
          href={`mailto:${profile.email}`}
          className="mt-6 inline-flex rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/15"
        >
          {ui.home.contactCta}
        </a>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 md:p-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/45">
          {ui.home.writings}
        </p>
        <div className="mt-4 space-y-2">
          {writings.map((writing) => (
            <Link
              key={writing.slug}
              href={withLocale(`/writings/${writing.slug}`, locale)}
              className="block rounded-lg border border-white/10 bg-[#0b111a] px-4 py-3 transition hover:bg-[#111827]"
            >
              <p className="font-mono text-[11px] text-white/45">{writing.date}</p>
              <h2 className="mt-1 text-sm font-medium text-white">
                {writing.title}
              </h2>
            </Link>
          ))}
        </div>
        <Link
          href={withLocale("/writings", locale)}
          className="mt-4 inline-block text-sm text-cyan-200/80 transition hover:text-cyan-100"
        >
          {ui.home.viewAllWritings}
        </Link>
      </section>
    </div>
  );
}
