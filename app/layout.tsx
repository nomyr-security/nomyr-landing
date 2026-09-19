import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./styles.css";
const site = "https://nomyr.io/";
const assetPath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "");
const googleAnalyticsId = "G-W1J8TG88J4";
export const viewport: Viewport = { themeColor: "#0C3B43" };

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
    images: [{ url: `${assetPath}/og-image.png`, width: 1200, height: 630, alt: "Nomyr — non-human identity security" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${assetPath}/og-image.png`],
    title: "Nomyr — Non-Human Identity Security",
    description: "Machine identity security, built on evidence.",
  },
  manifest: `${assetPath}/site.webmanifest`,
  icons: {
    icon: [
      { url: `${assetPath}/favicon.ico`, sizes: "16x16 32x32 48x48" },
      { url: `${assetPath}/favicon.svg`, type: "image/svg+xml" },
    ],
    apple: [{ url: `${assetPath}/apple-touch-icon.png`, sizes: "180x180" }],
    other: [{ rel: "mask-icon", url: `${assetPath}/safari-pinned-tab.svg`, color: "#0C3B43" }],
  },
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
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${googleAnalyticsId}');`}
      </Script>
    </html>
  );
}
