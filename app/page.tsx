import { AboutPreview } from "@/components/about/AboutPreview";
import { BanquetPreview } from "@/components/banquet/BanquetPreview";
import { BookingCTA } from "@/components/booking/BookingCTA";
import { Footer } from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import { HotelsSection } from "@/components/hotels/HotelsSection";
import { Navbar } from "@/components/navbar/Navbar";

const hotelSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Annapurna Group of Hotels",
  url: "https://annapurna-hotels-navbar.shrisatyasai25.chatgpt.site",
  foundingDate: "2018",
  telephone: "+91-75665-00040",
  email: "info@annapurnagroupofhotels.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bhopal",
    addressRegion: "Madhya Pradesh",
    addressCountry: "IN",
  },
  containsPlace: [
    "Hotel Arch Manor",
    "Hotel Mohit Regency",
    "Hotel Kamla Regency",
    "Hotel Divine Casa",
    "Hotel CT Palace",
    "Hotel Smriti Star",
  ].map((name) => ({ "@type": "Hotel", name })),
};

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
