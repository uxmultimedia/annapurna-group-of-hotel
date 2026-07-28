import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import { Footer } from "@/components/footer/Footer";
import { Navbar } from "@/components/navbar/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="grid min-h-[82vh] place-items-center bg-[#f8f3e9] px-6 py-32 text-center">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[.4em] text-[var(--emerald)]">404 · Page Not Found</p>
          <h1 className="mt-6 font-[family-name:var(--font-cormorant)] text-[clamp(3.5rem,9vw,7rem)] font-medium leading-none text-[#173c2b]">This journey took a turn.</h1>
          <p className="mx-auto mt-6 max-w-[570px] text-[14px] leading-7 text-[#657169]">The page may have moved, but a warm Annapurna welcome is still close by.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className="flex h-13 items-center justify-center gap-2 rounded-full bg-[var(--emerald)] px-7 text-[10px] font-semibold uppercase tracking-[.12em] text-white"><ArrowLeft size={14}/>Return Home</Link>
            <a href="tel:+917566500040" className="flex h-13 items-center justify-center gap-2 rounded-full border border-[#173c2b]/15 px-7 text-[10px] font-semibold uppercase tracking-[.12em] text-[#173c2b]"><Phone size={14}/>Call Us</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
