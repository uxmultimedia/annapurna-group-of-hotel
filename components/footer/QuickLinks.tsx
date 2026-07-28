import Link from "next/link";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Hotels", "/#hotels"],
  ["Banquets", "/banquet"],
  ["Contact", "/contact"],
] as const;

export function QuickLinks() {
  return (
    <nav aria-labelledby="quick-links-heading">
      <h2
        id="quick-links-heading"
        className="font-[family-name:var(--font-cormorant)] text-[21px] font-semibold text-white"
      >
        Quick Links
      </h2>
      <ul className="mt-6 space-y-3.5">
        {links.map(([label, href]) => (
          <li key={href}>
            <Link
              href={href}
              className="group/link relative inline-block py-0.5 text-[11px] font-medium tracking-[0.035em] text-white/62 transition-colors duration-300 hover:text-[#4faf7b]"
            >
              {label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#4faf7b] transition-all duration-300 group-hover/link:w-full" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
