import type { Metadata } from "next";
import { AboutCTA } from "@/components/about/AboutCTA";
import { AboutHero } from "@/components/about/AboutHero";
import { CoreValues } from "@/components/about/CoreValues";
import { HospitalityExperience } from "@/components/about/HospitalityExperience";
import { JourneyTimeline } from "@/components/about/JourneyTimeline";
import { MissionVision } from "@/components/about/MissionVision";
import { OurStory } from "@/components/about/OurStory";
import { StatsSection } from "@/components/about/StatsSection";
import { WhyChooseUs } from "@/components/about/WhyChooseUs";
import { Footer } from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "About Us | Hospitality in Bhopal Since 2018",
  description:
    "Discover the story, values and guest-first philosophy behind Annapurna Group of Hotels, a trusted hospitality group with six hotels in Bhopal.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Annapurna Group of Hotels",
    description:
      "Creating comfortable, consistent and memorable hospitality experiences in Bhopal since 2018.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "About Annapurna Group of Hotels",
    description:
      "Meet the people, principles and guest-first philosophy behind six trusted hotels in Bhopal.",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Annapurna Group of Hotels",
  url: "https://annapurna-hotels-navbar.shrisatyasai25.chatgpt.site/about",
  mainEntity: {
    "@type": "Organization",
    name: "Annapurna Group of Hotels",
    foundingDate: "2018",
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 1 },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bhopal",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema).replace(/</g, "\\u003c"),
        }}
      />
      <main id="main-content" aria-label="About Annapurna Group of Hotels">
        <AboutHero />
        <OurStory />
        <JourneyTimeline />
        <MissionVision />
        <CoreValues />
        <WhyChooseUs />
        <HospitalityExperience />
        <StatsSection />
        <AboutCTA final />
      </main>
      <Footer />
    </>
  );
}
