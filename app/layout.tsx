import type { Metadata } from "next";
import "./styles.css";
const site = "https://nomyr-security.github.io/nomyr-landing/";
export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: "Nomyr — Open-Source Non-Human Identity Security",
  description:
    "Free, open-source non-human identity security: machine identity discovery, ownership, credential lifecycle management, and AI agent governance. Explore Nomyr.",
  alternates: { canonical: site },
  openGraph: {
    title: "Nomyr — Every machine identity, and the human who answers for it.",
    description:
      "Free, open-source non-human identity security, from discovery to retirement.",
    url: site,
    siteName: "Nomyr",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Nomyr — Non-Human Identity Security",
    description: "Machine identity security, built on evidence.",
  },
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/icon.svg` },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
