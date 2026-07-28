import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SafeImage } from "@/components/ui/SafeImage";

export function AboutCTA({ final = false }: { final?: boolean }) {
  if (final) {
    return (
      <section aria-labelledby="about-cta-title" className="relative flex min-h-[560px] items-center overflow-hidden bg-[#173c2b] px-6 py-24 text-center text-white sm:px-10">
        <SafeImage
          src="/images/about/about-cta.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          fallbackClassName="bg-[#173c2b]"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto max-w-[850px]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-white/75">Stay With Us</p>
          <h2 id="about-cta-title" className="mt-6 font-[family-name:var(--font-cormorant)] text-[clamp(2.8rem,6vw,5rem)] font-medium leading-none">
            Experience Annapurna Hospitality
          </h2>
          <p className="mx-auto mt-6 max-w-[640px] text-[14px] leading-7 text-white/78 sm:text-[16px]">
            Discover a hotel that suits your journey, or speak with our team
            for thoughtful assistance in planning your next stay in Bhopal.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/#hotels" className="group flex h-14 items-center justify-center gap-3 rounded-full bg-[var(--emerald)] px-8 text-[10px] font-semibold uppercase tracking-[0.13em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--emerald-deep)]">
              Explore Hotels
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="#contact" className="flex h-14 items-center justify-center rounded-full border border-white/35 bg-white/8 px-8 text-[10px] font-semibold uppercase tracking-[0.13em] text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/15">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <Link
      href="/about"
      aria-label="Know the story of Annapurna Group of Hotels"
      className="group mt-9 flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[var(--emerald)] px-[34px] text-[10px] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_12px_30px_rgba(15,104,71,0.18)] transition-[transform,background-color,box-shadow] duration-[350ms] hover:-translate-y-0.5 hover:bg-[var(--emerald-deep)] hover:shadow-[0_17px_36px_rgba(15,104,71,0.25)] sm:w-fit"
    >
      Know Our Story
      <ArrowRight
        aria-hidden="true"
        size={16}
        strokeWidth={1.6}
        className="transition-transform duration-[350ms] group-hover:translate-x-1.5"
      />
    </Link>
  );
}
