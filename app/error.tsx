"use client";

import Link from "next/link";
import { RefreshCw } from "lucide-react";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <main className="grid min-h-screen place-items-center bg-[#f8f3e9] px-6 text-center"><div><p className="text-[10px] font-semibold uppercase tracking-[.4em] text-[var(--emerald)]">Something Went Wrong</p><h1 className="mt-6 font-[family-name:var(--font-cormorant)] text-[clamp(3rem,8vw,6rem)] font-medium text-[#173c2b]">We couldn&apos;t prepare this page.</h1><p className="mx-auto mt-5 max-w-[560px] text-[14px] leading-7 text-[#657169]">Please try again. If the issue continues, our team is available at 75665 00040.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><button onClick={reset} className="flex h-13 items-center justify-center gap-2 rounded-full bg-[var(--emerald)] px-7 text-[10px] font-semibold uppercase tracking-[.12em] text-white"><RefreshCw size={14}/>Try Again</button><Link href="/" className="flex h-13 items-center justify-center rounded-full border border-[#173c2b]/15 px-7 text-[10px] font-semibold uppercase tracking-[.12em] text-[#173c2b]">Return Home</Link></div></div></main>;
}
