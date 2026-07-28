type FeatureChipProps = {
  children: React.ReactNode;
};

export function FeatureChip({ children }: FeatureChipProps) {
  return (
    <span className="rounded-full border border-[#1d563d]/8 bg-[#f3f6f2] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.075em] text-[#526158] transition-colors duration-[450ms] group-hover:bg-[#e5eee7]">
      {children}
    </span>
  );
}
