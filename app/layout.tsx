import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://annapurna-hotels-navbar.shrisatyasai25.chatgpt.site",
  ),
  title: {
    default: "Annapurna Group of Hotels | Premium Hotels in Bhopal",
    template: "%s | Annapurna Group of Hotels",
  },
  description:
    "Discover six thoughtfully managed Annapurna hotels in Bhopal for business travel, family stays, celebrations and comfortable city visits.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Annapurna Group of Hotels | Premium Hotels in Bhopal",
    description:
      "Warm hospitality, modern comfort and six trusted hotels across Bhopal since 2018.",
    url: "/",
    siteName: "Annapurna Group of Hotels",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Annapurna Group of Hotels",
    description:
      "Six thoughtfully managed hotels offering warm, modern hospitality across Bhopal.",
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
