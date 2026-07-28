import Link from "next/link";
import { Footer } from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return <><Navbar/><main id="main-content" className="min-h-[75vh] bg-[#f8f3e9] px-6 pb-24 pt-36 sm:px-10 lg:pt-44"><article className="mx-auto max-w-[850px] rounded-[28px] bg-white p-8 shadow-[0_18px_55px_rgba(23,60,43,.07)] sm:p-12"><p className="text-[10px] font-semibold uppercase tracking-[.4em] text-[var(--emerald)]">Annapurna Group of Hotels</p><h1 className="mt-5 font-[family-name:var(--font-cormorant)] text-[clamp(3rem,7vw,5rem)] font-medium text-[#173c2b]">{title}</h1><div className="mt-8 space-y-5 text-[13px] leading-7 text-[#657169]">{children}</div><Link href="/contact" className="mt-9 inline-flex h-12 items-center rounded-full bg-[var(--emerald)] px-7 text-[9px] font-semibold uppercase tracking-[.12em] text-white">Contact Us</Link></article></main><Footer/></>;
}
