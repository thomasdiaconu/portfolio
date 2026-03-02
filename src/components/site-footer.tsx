"use client";

import { useSearchParams } from "next/navigation";
import { getContent, getUiMessages, profile, resolveLocale, socialLinks } from "@/data";

export function SiteFooter() {
  const searchParams = useSearchParams();
  const locale = resolveLocale(searchParams.get("lang") ?? undefined);
  const content = getContent(locale);
  const ui = getUiMessages(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="pb-8 pt-4">
      <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:items-center">
        <p>
          © {year} {profile.fullName}. {content.RIGHTS}
        </p>
        <div className="flex items-center gap-5">
          <a
            href={`mailto:${profile.email}`}
            className="transition hover:text-white"
            aria-label="Email"
          >
            {ui.footer.email}
          </a>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            {ui.footer.github}
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            {ui.footer.linkedin}
          </a>
        </div>
      </div>
    </footer>
  );
}
