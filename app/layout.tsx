import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CommandMenu } from "@/components/command-menu";
import { ReadingProgress } from "@/components/reading-progress";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: {
    default: "Aaqib | Software Developer",
    template: "%s | Aaqib"
  },
  description:
    "Premium interactive software developer portfolio for full-time opportunities, freelance projects, AI integrations, SaaS builds, and technical case studies.",
  keywords: [
    "Software Developer",
    "Full Stack Developer",
    "AI Developer",
    "Freelance Developer",
    "Next.js",
    "React",
    "TypeScript"
  ],
  authors: [{ name: "Aaqib" }],
  creator: "Aaqib",
  openGraph: {
    title: "Aaqib | Software Developer",
    description: "Interactive developer portfolio with projects, services, GitHub insights, AI assistant, and resume.",
    url: "https://aaqib.dev",
    siteName: "Aaqib Portfolio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaqib | Software Developer",
    description: "Software Developer portfolio for recruiters, founders, and freelance clients."
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fbff" },
    { media: "(prefers-color-scheme: dark)", color: "#06111f" }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="aurora" />
          <div className="mesh" />
          <ReadingProgress />
          <SiteHeader />
          {children}
          <CommandMenu />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
