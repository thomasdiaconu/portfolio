"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import {
  availableLocales,
  getUiMessages,
  navigation,
  profile,
  resolveLocale,
  socialLinks,
  withLocale,
} from "@/data";

export function SiteHeader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = resolveLocale(searchParams.get("lang") ?? undefined);
  const ui = getUiMessages(locale);

  return (
    <header className="sticky top-4 z-30 py-2">
      <div className="rounded-2xl border border-white/10 bg-[#0c1119]/80 px-4 py-3 backdrop-blur-xl md:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link href={withLocale("/", locale)} className="group inline-flex items-center gap-3">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(52,211,153,0.85)]" />
            <div>
              <p className="text-sm font-semibold tracking-wide text-white/95">
                {profile.fullName}
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">
                {profile.roleByLocale[locale]}
              </p>
            </div>
          </Link>

          <nav aria-label="Main navigation" className="flex flex-wrap gap-1">
            {navigation.map((item) => {
              const active =
                pathname === item.path ||
                (item.path !== "/" && pathname.startsWith(`${item.path}/`));

              return (
                <Link
                  key={item.path}
                  href={withLocale(item.path, locale)}
                  className={`rounded-lg px-3 py-2 text-sm transition ${
                    active
                      ? "bg-white/12 text-white"
                      : "text-white/65 hover:bg-white/8 hover:text-white"
                  }`}
                >
                  {ui.nav[item.key]}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-1 py-1">
              {availableLocales.map((entry) => (
                <Link
                  key={entry}
                  href={withLocale(pathname, entry)}
                  className={`rounded px-2 py-1 font-mono text-[11px] uppercase transition ${
                    locale === entry
                      ? "bg-white/15 text-white"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  {entry}
                </Link>
              ))}
            </div>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-white/60 transition hover:text-white"
            >
              GitHub
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-white/60 transition hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
