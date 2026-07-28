"use client";

import Image, { type ImageProps } from "next/image";
import { ImageIcon } from "lucide-react";
import { useState } from "react";

type SafeImageProps = ImageProps & {
  fallbackLabel?: string;
  fallbackClassName?: string;
};

export function SafeImage({
  fallbackLabel = "Image unavailable",
  fallbackClassName = "",
  alt,
  ...props
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        role={alt ? "img" : undefined}
        aria-label={alt || undefined}
        className={`absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#e5ebe5] px-6 text-center text-[#4f6259] ${fallbackClassName}`}
      >
        {alt && (
          <>
            <ImageIcon aria-hidden="true" size={22} strokeWidth={1.35} />
            <span className="text-[9px] font-semibold uppercase tracking-[0.12em]">
              {fallbackLabel}
            </span>
          </>
        )}
      </span>
    );
  }

  return <Image {...props} alt={alt} onError={() => setFailed(true)} />;
}
