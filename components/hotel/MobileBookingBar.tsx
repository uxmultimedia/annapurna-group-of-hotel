import Link from "next/link";
import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import type { HotelData } from "@/data/hotels";

export function MobileBookingBar({ hotel }: { hotel: HotelData }) {
  return (
    <nav aria-label={`Quick booking actions for ${hotel.name}`} className="fixed inset-x-3 bottom-3 z-[90] grid grid-cols-3 gap-1 rounded-[20px] border border-white/60 bg-[#fffdf8]/95 p-2 shadow-[0_15px_45px_rgba(0,0,0,.2)] backdrop-blur-xl lg:hidden">
      <a href="tel:+919179191110" className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-[14px] text-[8px] font-semibold uppercase tracking-[.08em] text-[#173c2b]"><Phone size={16}/>Call</a>
      <a href={`https://wa.me/919179191110?text=${encodeURIComponent(`I would like to book ${hotel.name}.`)}`} className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-[14px] text-[8px] font-semibold uppercase tracking-[.08em] text-[#173c2b]"><MessageCircle size={16}/>WhatsApp</a>
      <Link href="#booking-widget" className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-[14px] bg-[var(--emerald)] text-[8px] font-semibold uppercase tracking-[.08em] text-white"><CalendarCheck size={16}/>Book Now</Link>
    </nav>
  );
}
