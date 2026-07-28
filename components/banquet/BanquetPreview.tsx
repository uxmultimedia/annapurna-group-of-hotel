import { BanquetCard, type BanquetVenue } from "./BanquetCard";
import { SectionHeading } from "./SectionHeading";

const venues: readonly BanquetVenue[] = [
  {
    name: "Arch Manor Banquet",
    slug: "arch-manor",
    image: "/images/banquet/arch-manor.webp",
    description:
      "A graceful setting for weddings, milestone celebrations and refined corporate occasions, shaped by elegant interiors and attentive service.",
    features: [
      "Wedding Venue",
      "Corporate Events",
      "Premium Catering",
      "Large Capacity",
    ],
    capacity: "Up to 500 Guests",
  },
  {
    name: "Kamla Regency Banquet",
    slug: "kamla-regency",
    image: "/images/banquet/kamla-regency.webp",
    description:
      "An inviting venue for birthdays, family gatherings and intimate events, where warm hospitality makes every guest feel part of the occasion.",
    features: [
      "Birthday Parties",
      "Family Gatherings",
      "Air Conditioned",
      "Parking",
    ],
    capacity: "Up to 300 Guests",
    reverse: true,
  },
] as const;

export function BanquetPreview() {
  return (
    <section
      id="banquets"
      aria-labelledby="banquet-heading"
      className="relative overflow-hidden bg-[#faf8f4] px-6 py-[115px] sm:px-10 lg:py-[150px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[30%] top-[22%] size-[760px] rounded-full border border-[var(--emerald)] opacity-[0.025]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[24%] bottom-[4%] size-[620px] rounded-full border border-[#997a3c] opacity-[0.025]"
      />

      <div className="relative mx-auto max-w-[1280px]">
        <SectionHeading />
        <div className="mt-20 space-y-24 lg:mt-24 lg:space-y-32">
          {venues.map((venue) => (
            <BanquetCard key={venue.slug} venue={venue} />
          ))}
        </div>
      </div>
    </section>
  );
}
