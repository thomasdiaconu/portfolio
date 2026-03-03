"use client";

import { useEffect, useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [sidebarLanguageMenuOpen, setSidebarLanguageMenuOpen] = useState(false);

  const languageLabels: Record<string, string> = {
    en: "English",
    fr: "Francais",
    ro: "Romana",
    de: "Deutsch",
  };

  useEffect(() => {
    if (!menuOpen) return;

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setLanguageMenuOpen(false);
        setSidebarLanguageMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [menuOpen]);

  const navLinks = navigation.map((item) => {
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
  });

  return (
    <header className="sticky top-4 z-30 py-2">
      <div className="rounded-2xl border border-white/10 bg-[#0c1119]/80 px-3 py-3 backdrop-blur-xl md:px-6">
        <div className="flex items-center justify-between gap-3">
          <Link
            href={withLocale("/", locale)}
            className="group inline-flex items-center gap-3 self-start"
          >
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

          <div className="hidden min-w-0 items-center gap-3 lg:flex">
            <nav aria-label="Main navigation" className="flex gap-1">
              {navLinks}
            </nav>

            <div className="relative">
              <button
                type="button"
                onClick={() => setLanguageMenuOpen((open) => !open)}
                aria-label="Open language selector"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/75 transition hover:bg-white/10"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  fill="none"
                  suppressHydrationWarning
                >
                  <path
                    d="M12 3a9 9 0 1 0 0 18m0-18c2.3 2.1 3.5 5.8 3.5 9s-1.2 6.9-3.5 9m0-18C9.7 5.1 8.5 8.8 8.5 12s1.2 6.9 3.5 9M4 12h16M5.5 7h13M5.5 17h13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    suppressHydrationWarning
                  />
                </svg>
                <span className="font-mono uppercase text-white">{locale}</span>
                <span className="text-white/50">▾</span>
              </button>

              {languageMenuOpen ? (
                <div className="absolute right-0 top-[calc(100%+8px)] z-50 w-40 rounded-lg border border-white/10 bg-[#0d1320] p-1 shadow-xl">
                  {availableLocales.map((entry) => (
                    <Link
                      key={entry}
                      href={withLocale(pathname, entry)}
                      onClick={() => setLanguageMenuOpen(false)}
                      className={`block rounded px-2.5 py-2 text-sm transition ${
                        locale === entry
                          ? "bg-white/12 text-white"
                          : "text-white/65 hover:bg-white/8 hover:text-white"
                      }`}
                    >
                      {languageLabels[entry]}
                    </Link>
                  ))}
                </div>
              ) : null}
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

          <button
            type="button"
            onClick={() => {
              setMenuOpen(true);
              setLanguageMenuOpen(false);
            }}
            aria-label="Open navigation menu"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 p-2 text-white transition hover:bg-white/10 lg:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              suppressHydrationWarning
            >
              <path
                d="M4 7h16M4 12h16M4 17h12"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                suppressHydrationWarning
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/50 transition ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        } lg:hidden`}
        onClick={() => {
          setMenuOpen(false);
          setSidebarLanguageMenuOpen(false);
        }}
      />
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[82%] max-w-sm border-r border-white/10 bg-[#090d15] p-5 transition-transform duration-200 lg:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/55">
            {ui.nav.home} / {ui.nav.contact}
          </p>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 p-2 text-white transition hover:bg-white/10"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              suppressHydrationWarning
            >
              <path
                d="m6 6 12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                suppressHydrationWarning
              />
            </svg>
          </button>
        </div>

        <nav aria-label="Sidebar navigation" className="mt-5 grid gap-1">
          {navLinks.map((link, idx) => (
            <div
              key={idx}
              onClick={() => {
                setMenuOpen(false);
                setSidebarLanguageMenuOpen(false);
              }}
            >
              {link}
            </div>
          ))}
        </nav>

        <div className="mt-6">
          <button
            type="button"
            onClick={() => setSidebarLanguageMenuOpen((open) => !open)}
            aria-label="Open language selector"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/75 transition hover:bg-white/10"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              fill="none"
              suppressHydrationWarning
            >
              <path
                d="M12 3a9 9 0 1 0 0 18m0-18c2.3 2.1 3.5 5.8 3.5 9s-1.2 6.9-3.5 9m0-18C9.7 5.1 8.5 8.8 8.5 12s1.2 6.9 3.5 9M4 12h16M5.5 7h13M5.5 17h13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                suppressHydrationWarning
              />
            </svg>
            <span className="font-mono uppercase text-white">{locale}</span>
            <span className="text-white/50">▾</span>
          </button>

          {sidebarLanguageMenuOpen ? (
            <div className="mt-2 rounded-lg border border-white/10 bg-[#0d1320] p-1">
              {availableLocales.map((entry) => (
                <Link
                  key={entry}
                  href={withLocale(pathname, entry)}
                  onClick={() => {
                    setSidebarLanguageMenuOpen(false);
                    setMenuOpen(false);
                  }}
                  className={`block rounded px-2.5 py-2 text-sm transition ${
                    locale === entry
                      ? "bg-white/12 text-white"
                      : "text-white/65 hover:bg-white/8 hover:text-white"
                  }`}
                >
                  {languageLabels[entry]}
                </Link>
              ))}
            </div>
          ) : null}
        </div>

        <div className="mt-6 flex items-center gap-4">
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
      </aside>

    </header>
  );
}
