export type BanquetVenue = {
  slug: string;
  name: string;
  image: string;
  description: string;
  capacity: string;
  idealEvents: string;
  highlights: string[];
  facilities: Record<"parking" | "airConditioning" | "dining" | "stage" | "decoration", boolean>;
};

export const banquetVenues: BanquetVenue[] = [
  {
    slug: "arch-manor",
    name: "Arch Manor Banquet",
    image: "/images/banquet/arch-manor.webp",
    capacity: "Up to 500 guests",
    idealEvents: "Weddings, receptions, conferences",
    description:
      "A graceful, large-format venue for weddings, milestone celebrations and refined corporate occasions, shaped by elegant interiors and attentive coordination.",
    highlights: ["Grand celebration hall", "Premium catering", "Flexible stage layouts", "Dedicated event support"],
    facilities: { parking: true, airConditioning: true, dining: true, stage: true, decoration: true },
  },
  {
    slug: "kamla-regency",
    name: "Kamla Regency Banquet",
    image: "/images/banquet/kamla-regency.webp",
    capacity: "Up to 300 guests",
    idealEvents: "Birthdays, engagements, social events",
    description:
      "An inviting venue for intimate weddings, birthdays and family gatherings, where warm hospitality makes every guest feel part of the occasion.",
    highlights: ["Intimate atmosphere", "Custom décor support", "Curated menus", "Convenient city location"],
    facilities: { parking: true, airConditioning: true, dining: true, stage: true, decoration: true },
  },
];

export const banquetFaqs = [
  { question: "How many guests can the banquet accommodate?", answer: "Arch Manor can welcome up to 500 guests, while Kamla Regency is ideal for celebrations of up to 300 guests. Final capacities depend on the chosen layout." },
  { question: "Do you provide catering?", answer: "Yes. Our teams offer thoughtfully planned vegetarian and non-vegetarian menus, buffet service, live counters and dessert selections." },
  { question: "Can we customise the decoration?", answer: "Yes. Décor can be tailored around your occasion, colour palette and preferred theme in consultation with our events team." },
  { question: "Is parking available?", answer: "Both venues offer guest parking. Valet support can be discussed for larger events." },
  { question: "Do you organise corporate events?", answer: "Yes. We host conferences, meetings, product gatherings and corporate celebrations with presentation and sound support." },
  { question: "How can I book a venue?", answer: "Send an enquiry, call our events team or arrange a venue visit. We will confirm availability and prepare a tailored proposal." },
] as const;
