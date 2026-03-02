import { getUiMessages, profile, resolveLocale, socialLinks } from "@/data";

type ContactPageProps = {
  searchParams: Promise<{ lang?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { lang } = await searchParams;
  const locale = resolveLocale(lang);
  const ui = getUiMessages(locale);
  const hasBooking = Boolean(profile.bookingUrl.trim());

  return (
    <div className="space-y-8 md:space-y-10">
      <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/45">
          {ui.nav.contact}
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {ui.contact.title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65">
          {ui.contact.subtitle}
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-[#0b111a] p-5">
          <p className="text-xs uppercase tracking-wider text-white/45">{ui.contact.email}</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-2 block text-sm text-cyan-200/85 transition hover:text-cyan-100"
          >
            {profile.email}
          </a>
        </article>

        <article className="rounded-2xl border border-white/10 bg-[#0b111a] p-5">
          <p className="text-xs uppercase tracking-wider text-white/45">{ui.contact.github}</p>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="mt-2 block text-sm text-cyan-200/85 transition hover:text-cyan-100"
          >
            {socialLinks.github.replace("https://", "")}
          </a>
        </article>

        <article className="rounded-2xl border border-white/10 bg-[#0b111a] p-5">
          <p className="text-xs uppercase tracking-wider text-white/45">{ui.contact.linkedin}</p>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="mt-2 block text-sm text-cyan-200/85 transition hover:text-cyan-100"
          >
            {socialLinks.linkedin.replace("https://", "")}
          </a>
        </article>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="space-y-4">
          <article className="rounded-2xl border border-white/10 bg-[#0b111a] p-6">
            <h2 className="text-lg font-medium text-white">{ui.contact.courses}</h2>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>{ui.contact.coursesLine1}</li>
              <li>{ui.contact.coursesLine2}</li>
              <li>{ui.contact.coursesLine3}</li>
            </ul>
            <a
              href={`mailto:${profile.email}?subject=Tutoring%20request`}
              className="mt-5 inline-flex rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/15"
            >
              {ui.contact.askTutoring}
            </a>
          </article>
        </div>

        <div className="space-y-4">
          <article className="rounded-2xl border border-white/10 bg-[#0b111a] p-6">
            <h2 className="text-lg font-medium text-white">{ui.contact.calendar}</h2>
            {hasBooking ? (
              <a
                href={profile.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/15"
              >
                {ui.contact.openBooking}
              </a>
            ) : (
              <a
                href={`mailto:${profile.email}?subject=1:1%20booking%20request`}
                className="mt-5 inline-flex rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/15"
              >
                {ui.contact.requestByEmail}
              </a>
            )}
          </article>

          <article className="rounded-2xl border border-white/10 bg-[#0b111a] p-6">
            <h2 className="text-lg font-medium text-white">{ui.contact.mail}</h2>
            <a
              href={`mailto:${profile.email}`}
              className="mt-3 inline-flex rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/15"
            >
              {ui.contact.requestByEmail}
            </a>
          </article>
        </div>
      </section>
    </div>
  );
}
