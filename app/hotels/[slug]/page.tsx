import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AmenitiesGrid } from "@/components/hotel/AmenitiesGrid";
import { BanquetSection } from "@/components/hotel/BanquetSection";
import { BookingWidget } from "@/components/hotel/BookingWidget";
import { Gallery } from "@/components/hotel/Gallery";
import { GuestReviews } from "@/components/hotel/GuestReviews";
import { HotelCTA } from "@/components/hotel/HotelCTA";
import { HotelFAQ } from "@/components/hotel/HotelFAQ";
import { HotelHero } from "@/components/hotel/HotelHero";
import { HotelOverview } from "@/components/hotel/HotelOverview";
import { LocationMap } from "@/components/hotel/LocationMap";
import { MobileBookingBar } from "@/components/hotel/MobileBookingBar";
import { NearbyPlaces } from "@/components/hotel/NearbyPlaces";
import { RelatedHotels } from "@/components/hotel/RelatedHotels";
import { RestaurantSection } from "@/components/hotel/RestaurantSection";
import { RoomCards } from "@/components/hotel/RoomCards";
import { Footer } from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";
import { getHotel, hotelData } from "@/data/hotels";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return hotelData.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const hotel = getHotel(slug);
  if (!hotel) return {};
  return {
    title: `${hotel.name} | Premium Hotel in Bhopal`,
    description: hotel.seoDescription,
    alternates: { canonical: `/hotels/${hotel.slug}` },
    openGraph: {
      title: `${hotel.name} | Annapurna Group of Hotels`,
      description: hotel.seoDescription,
      url: `/hotels/${hotel.slug}`,
      type: "website",
      images: [{ url: "/images/logo/logo.png", width: 1254, height: 1254, alt: "Annapurna Group of Hotels logo" }],
    },
    twitter: {
      card: "summary",
      title: hotel.name,
      description: hotel.seoDescription,
      images: ["/images/logo/logo.png"],
    },
  };
}

export default async function HotelPage({ params }: PageProps) {
  const { slug } = await params;
  const hotel = getHotel(slug);
  if (!hotel) notFound();
  const related = hotelData.filter((item) => item.slug !== hotel.slug).slice(0, 3);
  const url = `https://annapurna-hotels-navbar.shrisatyasai25.chatgpt.site/hotels/${hotel.slug}`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Hotel",
      name: hotel.name,
      url,
      description: hotel.seoDescription,
      telephone: "+91 91791 91110",
      priceRange: "₹₹",
      starRating: { "@type": "Rating", ratingValue: hotel.rating },
      aggregateRating: { "@type": "AggregateRating", ratingValue: hotel.rating, reviewCount: 1000 },
      address: {
        "@type": "PostalAddress",
        streetAddress: hotel.address,
        addressLocality: "Bhopal",
        addressRegion: "Madhya Pradesh",
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: hotel.coordinates.lat, longitude: hotel.coordinates.lng },
      amenityFeature: hotel.amenities.map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://annapurna-hotels-navbar.shrisatyasai25.chatgpt.site/" },
        { "@type": "ListItem", position: 2, name: "Hotels", item: "https://annapurna-hotels-navbar.shrisatyasai25.chatgpt.site/#hotels" },
        { "@type": "ListItem", position: 3, name: hotel.name, item: url },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <main id="main-content" aria-label={`${hotel.name} hotel details`}>
        <HotelHero hotel={hotel} />
        <BookingWidget hotelName={hotel.name} />
        <HotelOverview hotel={hotel} />
        <Gallery hotel={hotel} />
        <RoomCards hotel={hotel} />
        <AmenitiesGrid hotel={hotel} />
        <RestaurantSection hotel={hotel} />
        <BanquetSection hotel={hotel} />
        <NearbyPlaces hotel={hotel} />
        <GuestReviews hotel={hotel} />
        <HotelFAQ hotel={hotel} />
        <LocationMap hotel={hotel} />
        <RelatedHotels hotels={related} />
        <HotelCTA hotel={hotel} />
      </main>
      <MobileBookingBar hotel={hotel} />
      <Footer />
    </>
  );
}
