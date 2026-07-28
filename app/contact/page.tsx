import type { Metadata } from "next";
import { BusinessInfo } from "@/components/contact/BusinessInfo";
import { ContactCards } from "@/components/contact/ContactCards";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { ContactFAQ } from "@/components/contact/ContactFAQ";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactHero } from "@/components/contact/ContactHero";
import { GoogleMap } from "@/components/contact/GoogleMap";
import { Footer } from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Contact Us | Hotel & Banquet Enquiries",
  description:
    "Contact Annapurna Group of Hotels in Bhopal for hotel reservations, banquet enquiries, corporate stays and 24×7 guest assistance.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Annapurna Group of Hotels",
    description: "Speak with our Bhopal hospitality team about rooms, banquets, business stays and guest support.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Annapurna Group of Hotels",
    description: "Hotel reservations, banquet enquiries and 24×7 guest assistance in Bhopal.",
  },
};

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://annapurna-hotels-navbar.shrisatyasai25.chatgpt.site/" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://annapurna-hotels-navbar.shrisatyasai25.chatgpt.site/contact" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@id": "https://annapurna-hotels-navbar.shrisatyasai25.chatgpt.site/#organization",
    name: "Annapurna Group of Hotels",
    url: "https://annapurna-hotels-navbar.shrisatyasai25.chatgpt.site",
    telephone: "+91-75665-00040",
    email: "info@annapurnagroupofhotels.com",
    openingHours: "Mo-Su 00:00-23:59",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bhopal",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
    areaServed: { "@type": "City", name: "Bhopal" },
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <main aria-label="Contact Annapurna Group of Hotels">
        <ContactHero />
        <ContactCards />
        <ContactForm />
        <GoogleMap />
        <BusinessInfo />
        <ContactFAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
