import type { LucideIcon } from "lucide-react";

type CapacityCardProps = {
  icon: LucideIcon;
  label: string;
  value: string;
};

export function CapacityCard({
  icon: Icon,
  label,
  value,
}: CapacityCardProps) {
  return (
    <div className="rounded-[16px] border border-[#233f32]/8 bg-white px-4 py-4 shadow-[0_7px_22px_rgba(27,55,42,0.045)] transition-[transform,border-color] duration-[350ms] hover:-translate-y-1 hover:border-[var(--emerald)]/20">
      <Icon
        aria-hidden="true"
        size={16}
        strokeWidth={1.45}
        className="text-[var(--emerald)]"
      />
      <span className="mt-3 block text-[8px] font-semibold uppercase tracking-[0.12em] text-[#79817d]">
        {label}
      </span>
      <strong className="mt-1 block text-[10px] font-semibold leading-4 text-[#304b3e]">
        {value}
      </strong>
    </div>
  );
}
