import Link from "next/link";
import { ArrowRight } from "lucide-react";

const hotels = [
  ["Hotel Arch Manor", "hotel-arch-manor"],
  ["Hotel Mohit Regency", "hotel-mohit-regency"],
  ["Hotel Kamla Regency", "hotel-kamla-regency"],
  ["Hotel Divine Casa", "hotel-divine-casa"],
  ["Hotel CT Palace", "hotel-ct-palace"],
  ["Hotel Smriti Star", "hotel-smriti-star"],
] as const;

export function HotelLinks() {
  return (
    <nav aria-labelledby="hotel-links-heading">
      <h2
        id="hotel-links-heading"
        className="font-[family-name:var(--font-cormorant)] text-[21px] font-semibold text-white"
      >
        Our Hotels
      </h2>
      <ul className="mt-6 space-y-3.5">
        {hotels.map(([name, slug]) => (
          <li key={slug}>
            <Link
              href={`/hotels/${slug}`}
              className="group/hotel inline-flex items-center gap-1 text-[11px] font-medium tracking-[0.025em] text-white/62 transition-[color,transform] duration-300 hover:translate-x-1 hover:text-[#4faf7b]"
            >
              {name}
              <ArrowRight
                aria-hidden="true"
                size={12}
                strokeWidth={1.5}
                className="opacity-0 transition-opacity duration-300 group-hover/hotel:opacity-100"
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
