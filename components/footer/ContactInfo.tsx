import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export function ContactInfo() {
  return (
    <div>
      <h2 className="font-[family-name:var(--font-cormorant)] text-[21px] font-semibold text-white">
        Get In Touch
      </h2>
      <address className="mt-6 space-y-4 not-italic">
        <a
          href="tel:+919179191110"
          className="group/contact flex items-start gap-3 text-[11px] leading-5 text-white/65 transition-colors hover:text-[#4faf7b] max-md:justify-center"
        >
          <Phone
            aria-hidden="true"
            size={15}
            strokeWidth={1.45}
            className="mt-0.5 shrink-0"
          />
          +91 91791 91110
        </a>
        <a
          href="mailto:info@annapurnagroupofhotels.com"
          className="flex items-start gap-3 break-all text-[11px] leading-5 text-white/65 transition-colors hover:text-[#4faf7b] max-md:justify-center"
        >
          <Mail
            aria-hidden="true"
            size={15}
            strokeWidth={1.45}
            className="mt-0.5 shrink-0"
          />
          info@annapurnagroupofhotels.com
        </a>
        <p className="flex items-start gap-3 text-[11px] leading-5 text-white/65 max-md:justify-center">
          <MapPin
            aria-hidden="true"
            size={15}
            strokeWidth={1.45}
            className="mt-0.5 shrink-0"
          />
          <span>
            Bhopal
            <br />
            Madhya Pradesh, India
          </span>
        </p>
      </address>
      <Link
        href="/#booking"
        aria-label="Book your stay with Annapurna Group of Hotels"
        className="group/book mt-7 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[var(--emerald)] px-6 text-[10px] font-semibold uppercase tracking-[0.1em] text-white shadow-[0_10px_26px_rgba(0,0,0,0.18)] transition-[transform,background-color,box-shadow] duration-[350ms] hover:-translate-y-0.5 hover:bg-[#0b583c] hover:shadow-[0_15px_32px_rgba(0,0,0,0.28)] sm:w-fit max-md:mx-auto"
      >
        Book Your Stay
        <ArrowRight
          aria-hidden="true"
          size={15}
          strokeWidth={1.55}
          className="transition-transform duration-[350ms] group-hover/book:translate-x-1.5"
        />
      </Link>
    </div>
  );
}
