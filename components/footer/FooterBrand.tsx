import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import BrandLogo from "@/components/ui/BrandLogo";

const socials = [
  { label: "Facebook", icon: Facebook },
  { label: "Instagram", icon: Instagram },
  { label: "LinkedIn", icon: Linkedin },
  { label: "YouTube", icon: Youtube },
] as const;

export function FooterBrand() {
  return (
    <div>
      <BrandLogo
        variant="light"
        className="mx-auto md:mx-0"
        imageClassName="h-[60px] w-auto object-contain"
      />
      <h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-[25px] font-medium text-white">
        Annapurna Group of Hotels
      </h2>
      <p className="mt-4 max-w-[340px] text-[12px] leading-[1.85] text-white/60 max-md:mx-auto">
        Serving guests with warmth and comfort since 2018 through six
        thoughtfully managed hotels across Bhopal, created for business and
        family-friendly stays.
      </p>
      <div
        aria-label="Annapurna Group social media"
        className="mt-6 flex items-center gap-5 max-md:justify-center"
      >
        {socials.map(({ label, icon: Icon }) => (
          <button
            key={label}
            type="button"
            disabled
            aria-label={`${label} profile coming soon`}
            title="Social profile coming soon"
            className="text-white/65 transition-[color,transform] duration-300 hover:scale-[1.08] hover:text-[#4faf7b]"
          >
            <Icon aria-hidden="true" size={18} strokeWidth={1.45} />
          </button>
        ))}
      </div>
    </div>
  );
}
