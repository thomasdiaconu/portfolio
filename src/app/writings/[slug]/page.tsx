import { notFound } from "next/navigation";
import { getUiMessages, resolveLocale } from "@/data";
import { getWritings, writings } from "@/data/writings";

type WritingPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
};

export function generateStaticParams() {
  return writings.map((writing) => ({ slug: writing.slug }));
}

export default async function WritingDetailPage({
  params,
  searchParams,
}: WritingPageProps) {
  const { slug } = await params;
  const { lang } = await searchParams;
  const locale = resolveLocale(lang);
  const ui = getUiMessages(locale);
  const writing = getWritings(locale).find((entry) => entry.slug === slug);

  if (!writing) {
    notFound();
  }

  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-10">
      <p className="font-mono text-xs text-white/45">{writing.date}</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {writing.title}
      </h1>
      <p className="mt-6 text-base leading-8 text-white/75">{writing.excerpt}</p>
      <p className="mt-6 text-sm leading-7 text-white/55">{ui.writings.addContentHint}</p>
    </article>
  );
}
