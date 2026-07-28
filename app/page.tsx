import { AboutPreview } from "@/components/about/AboutPreview";
import { Hero } from "@/components/hero/Hero";
import { HotelsSection } from "@/components/hotels/HotelsSection";
import { Navbar } from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main aria-label="Page content">
        <Hero />
        <HotelsSection />
        <AboutPreview />
      </main>
    </>
  );
}
