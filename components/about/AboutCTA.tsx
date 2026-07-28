import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutCTA() {
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
