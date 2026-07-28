"use client";

import {
  CalendarDays,
  MessageCircle,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import { SafeImage } from "@/components/ui/SafeImage";
import { BookingCard, type BookingOption } from "./BookingCard";
import { TrustMessage } from "./TrustMessage";

const bookingOptions: readonly BookingOption[] = [
  {
    title: "Call Us",
    detail: "75665 00040",
    icon: Phone,
    href: "tel:+917566500040",
    buttonLabel: "Call Now",
    ariaLabel: "Call Annapurna Group of Hotels at 75665 00040",
  },
  {
    title: "WhatsApp",
    detail: "Instant Assistance",
    icon: MessageCircle,
    href: "https://wa.me/917566500040",
    buttonLabel: "Chat on WhatsApp",
    ariaLabel: "Chat with Annapurna Group of Hotels on WhatsApp",
    external: true,
  },
  {
    title: "Online Booking",
    detail: "Reserve Your Stay",
    icon: CalendarDays,
    href: "/#booking",
    buttonLabel: "Book Now",
    ariaLabel: "Book your stay online with Annapurna Group of Hotels",
  },
] as const;

export function BookingCTA() {
  return (
    <section
      id="booking"
      aria-labelledby="booking-cta-heading"
      className="relative isolate flex items-center overflow-hidden px-6 py-[110px] sm:px-10 lg:min-h-[650px]"
    >
      <SafeImage
        src="/images/home/booking-background.webp"
        alt=""
        fallbackClassName="-z-30 bg-[#173d2d]"
        fill
        sizes="100vw"
        className="-z-30 object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-black/35" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(5,24,16,0.16),rgba(5,24,16,0.3))]"
      />

      <span
        aria-hidden="true"
        className="absolute left-[11%] top-[18%] size-2 rounded-full bg-white opacity-[0.045] shadow-[0_0_24px_8px_white]"
      />
      <span
        aria-hidden="true"
        className="absolute right-[14%] top-[29%] size-1.5 rounded-full bg-white opacity-[0.04] shadow-[0_0_20px_7px_white]"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-[19%] left-[23%] size-1 rounded-full bg-white opacity-[0.04] shadow-[0_0_18px_6px_white]"
      />

      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.16 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="mx-auto w-full max-w-[1100px] text-center"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/80 sm:tracking-[0.4em]">
          Welcome to Annapurna
        </p>
        <motion.h2
          id="booking-cta-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
          className="mx-auto mt-5 max-w-[900px] font-[family-name:var(--font-cormorant)] text-[38px] font-medium leading-[1.15] tracking-[-0.035em] text-white sm:text-[54px] lg:text-[68px]"
        >
          Your Perfect Stay Starts Here.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-[700px] text-[15px] leading-[1.9] text-white/90 sm:text-[17px]"
        >
          Whether you are travelling for business, planning a family vacation
          or taking a quiet weekend away, we are here to offer genuine comfort,
          premium hospitality and a stay shaped around you.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          transition={{ delayChildren: 0.24, staggerChildren: 0.12 }}
          className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {bookingOptions.map((option, index) => (
            <BookingCard
              key={option.title}
              option={option}
              centered={index === 2}
            />
          ))}
        </motion.div>

        <TrustMessage />
      </motion.div>
    </section>
  );
}
