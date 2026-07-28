import { HotelGrid } from "./HotelGrid";
import { SectionHeading } from "./SectionHeading";
import type { Hotel } from "./HotelCard";

const hotels: readonly Hotel[] = [
  {
    name: "Hotel Arch Manor",
    slug: "hotel-arch-manor",
    image: "/images/hotels/arch-manor/hero.webp",
    description:
      "An assured business address with composed interiors, attentive service and effortless access to Bhopal.",
    features: ["Business Hotel", "Conference", "Prime Location"],
  },
  {
    name: "Hotel Mohit Regency",
    slug: "hotel-mohit-regency",
    image: "/images/hotels/mohit-regency/hero.webp",
    description:
      "Contemporary rooms and thoughtful comforts for productive visits, relaxed weekends and family occasions.",
    features: ["Family Stay", "Restaurant", "Parking"],
    offset: true,
  },
  {
    name: "Hotel Kamla Regency",
    slug: "hotel-kamla-regency",
    image: "/images/hotels/kamla-regency/hero.webp",
    description:
      "Warm, dependable hospitality paired with convenient city access and spaces designed for easy stays.",
    features: ["Luxury Rooms", "WiFi", "AC Rooms"],
  },
  {
    name: "Hotel Divine Casa",
    slug: "hotel-divine-casa",
    image: "/images/hotels/divine-casa/hero.webp",
    description:
      "A calm and intimate city stay where considered details create a quietly elevated sense of comfort.",
    features: ["Premium Stay", "Family Stay", "Restaurant"],
  },
  {
    name: "Hotel CT Palace",
    slug: "hotel-ct-palace",
    image: "/images/hotels/ct-palace/hero.webp",
    description:
      "Well-appointed accommodation for business travellers seeking reliable service, comfort and convenience.",
    features: ["Business Hotel", "Banquet", "Parking"],
    offset: true,
  },
  {
    name: "Hotel Smriti Star",
    slug: "hotel-smriti-star",
    image: "/images/hotels/smriti-star/hero.webp",
    description:
      "An inviting Bhopal address offering practical modern comforts and a sincere, welcoming style of service.",
    features: ["Prime Location", "WiFi", "Family Stay"],
  },
] as const;

export function HotelsSection() {
  return (
    <section
      id="hotels"
      aria-labelledby="hotels-heading"
      className="relative overflow-hidden bg-[#faf8f4] px-6 py-[110px] sm:px-10 lg:py-[140px]"
    >
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading />
        <HotelGrid hotels={hotels} />
      </div>
    </section>
  );
}
