import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thomas Diaconu | Software Engineer",
  description:
    "Software engineer portfolio focused on modern product engineering, AI-assisted development, and craftsmanship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(28,34,46,0.75),transparent_30%),radial-gradient(circle_at_85%_25%,rgba(16,57,48,0.35),transparent_35%),linear-gradient(180deg,#07090e,#0b0f17_40%,#080b10)]" />
          <div className="pointer-events-none absolute inset-0 opacity-30 [background:linear-gradient(rgba(150,170,210,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(150,170,210,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />

          <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 md:px-10">
            <SiteHeader />
            <main className="flex-1 py-10 md:py-14">{children}</main>
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
