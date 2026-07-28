import Link from "next/link";

const legalLinks = [
  ["Privacy Policy", "/privacy"],
  ["Terms & Conditions", "/terms"],
  ["Sitemap", "/sitemap"],
] as const;

export function FooterBottom() {
  return (
    <div className="mt-14 grid gap-5 border-t border-white/10 pt-8 text-center text-[9px] leading-5 tracking-[0.04em] text-white/45 lg:grid-cols-3 lg:text-left">
      <p>
        © 2026 Annapurna Group of Hotels.
        <br className="sm:hidden" /> All Rights Reserved.
      </p>
      <nav
        aria-label="Legal links"
        className="flex flex-wrap justify-center gap-x-5 gap-y-2"
      >
        {legalLinks.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            className="transition-colors hover:text-[#4faf7b]"
          >
            {label}
          </Link>
        ))}
      </nav>
      <p className="lg:text-right">
        Designed &amp; Developed by{" "}
        <span className="font-medium text-white/68">UX Multimedia</span>
      </p>
    </div>
  );
}
