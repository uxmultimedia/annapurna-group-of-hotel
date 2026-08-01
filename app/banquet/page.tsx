import type { Metadata } from "next";
import { BanquetFAQ } from "@/components/banquet/BanquetFAQ";
import { BanquetGallery } from "@/components/banquet/BanquetGallery";
import { BanquetHero } from "@/components/banquet/BanquetHero";
import { BookingProcess } from "@/components/banquet/BookingProcess";
import { DecorationCatering } from "@/components/banquet/DecorationCatering";
import { EnquiryCTA } from "@/components/banquet/EnquiryCTA";
import { EventCategories } from "@/components/banquet/EventCategories";
import { FacilitiesGrid } from "@/components/banquet/FacilitiesGrid";
import { FeaturedVenues } from "@/components/banquet/FeaturedVenues";
import { Testimonials } from "@/components/banquet/Testimonials";
import { VenueComparison } from "@/components/banquet/VenueComparison";
import { Footer } from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import { banquetVenues } from "@/data/banquets";

export const metadata: Metadata = {
  title: "Banquet Halls & Event Venues in Bhopal",
  description:
    "Celebrate weddings, engagements, birthdays and corporate events at Annapurna Group’s elegant banquet venues in Bhopal.",
  alternates: { canonical: "/banquet" },
  openGraph: {
    title: "Banquet & Event Venues | Annapurna Group of Hotels",
    description: "Elegant Bhopal venues, thoughtful catering and attentive event support for meaningful celebrations.",
    url: "/banquet",
    type: "website",
    images: [{ url: "/images/logo/logo.png", width: 1254, height: 1254, alt: "Annapurna Group of Hotels logo" }],
  },
  twitter: {
    card: "summary",
    title: "Annapurna Banquets & Events",
    description: "Premium venues for weddings, corporate events and private celebrations in Bhopal.",
    images: ["/images/logo/logo.png"],
  },
};

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://annapurna-hotels-navbar.shrisatyasai25.chatgpt.site/" },
      { "@type": "ListItem", position: 2, name: "Banquet", item: "https://annapurna-hotels-navbar.shrisatyasai25.chatgpt.site/banquet" },
    ],
  },
  ...banquetVenues.map((venue) => ({
    "@context": "https://schema.org",
    "@type": "EventVenue",
    name: venue.name,
    description: venue.description,
    maximumAttendeeCapacity: Number.parseInt(venue.capacity.replace(/\D/g, ""), 10),
    address: { "@type": "PostalAddress", addressLocality: "Bhopal", addressRegion: "Madhya Pradesh", addressCountry: "IN" },
    telephone: "+91 91791 91110",
  })),
];

export default function BanquetPage() {
  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <main id="main-content" aria-label="Annapurna banquet and event venues">
        <BanquetHero />
        <EventCategories />
        <FeaturedVenues venues={banquetVenues} />
        <VenueComparison venues={banquetVenues} />
        <BanquetGallery />
        <FacilitiesGrid />
        <DecorationCatering />
        <BookingProcess />
        <Testimonials />
        <BanquetFAQ />
        <EnquiryCTA />
      </main>
      <Footer />
    </>
  );
}
