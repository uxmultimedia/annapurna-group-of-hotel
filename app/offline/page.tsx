import Link from "next/link";
import { WifiOff } from "lucide-react";

export default function OfflinePage() {
  return <main className="grid min-h-screen place-items-center bg-[#f8f3e9] px-6 text-center"><div><WifiOff size={32} className="mx-auto text-[var(--emerald)]"/><h1 className="mt-7 font-[family-name:var(--font-cormorant)] text-[clamp(3rem,8vw,6rem)] font-medium text-[#173c2b]">You&apos;re currently offline.</h1><p className="mx-auto mt-5 max-w-[530px] text-[14px] leading-7 text-[#657169]">Reconnect to continue exploring Annapurna hotels, or call 75665 00040 for immediate assistance.</p><Link href="/" className="mt-8 inline-flex h-13 items-center rounded-full bg-[var(--emerald)] px-7 text-[10px] font-semibold uppercase tracking-[.12em] text-white">Try Homepage</Link></div></main>;
}
