import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
