import { AboutPreview } from "@/components/about/AboutPreview";
import { BanquetPreview } from "@/components/banquet/BanquetPreview";
import { BookingCTA } from "@/components/booking/BookingCTA";
import { Footer } from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import { HotelsSection } from "@/components/hotels/HotelsSection";
import { Navbar } from "@/components/navbar/Navbar";

const siteUrl = "https://annapurna-hotels-navbar.shrisatyasai25.chatgpt.site";
const logoUrl = `${siteUrl}/images/logo/annpurna-logo-transparent.png`;
const address = {
  "@type": "PostalAddress",
  addressLocality: "Bhopal",
  addressRegion: "Madhya Pradesh",
  addressCountry: "IN",
};
const hotelNames = [
  "Hotel Arch Manor",
  "Hotel Mohit Regency",
  "Hotel Kamla Regency",
  "Hotel Divine Casa",
  "Hotel CT Palace",
  "Hotel Smriti Star",
];

const hotelSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "Annapurna Group of Hotels",
    url: siteUrl,
    logo: logoUrl,
    foundingDate: "2018",
    telephone: "+91 91791 91110",
    email: "info@annapurnagroupofhotels.com",
    address,
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: "Annapurna Group of Hotels",
    url: siteUrl,
    logo: logoUrl,
    image: logoUrl,
    telephone: "+91 91791 91110",
    address,
    areaServed: { "@type": "City", name: "Bhopal" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@id": `${siteUrl}/#hotel-group`,
    name: "Annapurna Group of Hotels",
    url: siteUrl,
    logo: logoUrl,
    image: logoUrl,
    telephone: "+91 91791 91110",
    address,
    containsPlace: hotelNames.map((name) => ({ "@type": "Hotel", name })),
    parentOrganization: { "@id": `${siteUrl}/#organization` },
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(hotelSchema).replace(/</g, "\\u003c"),
        }}
      />
      <main id="main-content" aria-label="Page content">
        <Hero />
        <HotelsSection />
        <AboutPreview />
        <BanquetPreview />
        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}
