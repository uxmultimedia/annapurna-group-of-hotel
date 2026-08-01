import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { SiteExperience } from "@/components/ui/SiteExperience";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const siteUrl = "https://annapurna-hotels-navbar.shrisatyasai25.chatgpt.site";
const seoTitle = "Annapurna Group of Hotels | Premium Hotels in Bhopal";
const seoDescription =
  "Book comfortable and premium stays with Annapurna Group of Hotels. Explore Arch Manor, Mohit Regency, Kamla Regency, Divine Casa, CT Palace and Smriti Star.";

export const viewport: Viewport = {
  themeColor: "#111111",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seoTitle,
    template: "%s | Annapurna Group of Hotels",
  },
  description: seoDescription,
  applicationName: "Annapurna Group of Hotels",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: siteUrl,
    siteName: "Annapurna Group of Hotels",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/images/logo/logo.png", width: 1254, height: 1254, alt: "Annapurna Group of Hotels logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: ["/images/logo/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/hero/hero-poster.jpg"
          fetchPriority="high"
        />
      </head>
      <body className={`${manrope.variable} ${cormorant.variable} antialiased`}>
        <a
          href="#main-content"
          className="fixed left-4 top-3 z-[300] -translate-y-20 rounded-full bg-white px-5 py-3 text-xs font-semibold text-[#173c2b] shadow-xl transition-transform focus:translate-y-0"
        >
          Skip to main content
        </a>
        <SiteExperience />
        {children}
      </body>
    </html>
  );
}
