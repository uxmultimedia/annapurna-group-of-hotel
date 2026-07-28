import type { Metadata } from "next";
import { Footer } from "@/components/footer/Footer";
import { HotelSearch } from "@/components/hotels/HotelSearch";
import { Navbar } from "@/components/navbar/Navbar";
import { hotelData } from "@/data/hotels";

export const metadata: Metadata = {
  title: "Hotels in Bhopal | Explore Our Collection",
  description: "Search and compare six Annapurna hotels in Bhopal for business stays, family visits and special occasions.",
  alternates: { canonical: "/hotels" },
};

export default function HotelsPage() {
  return <><Navbar/><main id="main-content" aria-label="Explore Annapurna hotels"><HotelSearch hotels={hotelData}/></main><Footer/></>;
}
