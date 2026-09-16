"use client";

import { useId } from "react";

// Custom icons, drawn in currentColor so they follow the text color like the
// Lucide icons around them. Accepts Lucide's size prop, so it can stand in for
// a Lucide icon (the search palette's subway action).

interface IconProps {
  /** Height in pixels; the logo is slightly narrower than it is tall. */
  size?: number | string;
  className?: string;
}

/**
 * The MTA logo as one color: the disc in currentColor with the letters cut
 * out. Shapes from Wikimedia Commons (public domain; trademark of the MTA).
 */
export function MtaLogo({ size = 17, className }: IconProps) {
  const mask = useId();
  const height = Number(size);
  return (
    <svg
      width={(height * 455) / 500}
      height={height}
      viewBox="0 0 455 500"
      className={className}
      aria-hidden="true"
    >
      <mask id={mask}>
        <rect width="455" height="500" fill="white" />
        <path
          fill="black"
          d="m34 396s0-87.4-0.8-97.3c0-9.5-4.7-64.2-3.7-73.4l2.6 0.1 32.8 165 45.9-8.1 26.7-153h3c1.4 9.4-2.4 53.8-2.4 63.3-0.8 9.9-0.8 85-0.8 85l46.5-8.1v-230l-72.6-12.6-20.4 141c-0.7 0-20.6-148-20.6-148l-70.2-12.2 5.7 294"
        />
        <polygon fill="black" points="329 321 352 318 355 340 381 335 356 169 325 164 293 350 326 345" />
        <polygon fill="black" points="196 200 231 204 231 361 274 354 274 207 302 210 302 160 196 141" />
        <polygon fill="white" points="339 226 334 281 347 280 342 226" />
      </mask>
      <path
        fill="currentColor"
        mask={`url(#${mask})`}
        d="m0.4 107c45.2-64.6 120-107 205-107 138 0 250 112 250 250s-112 250-250 250c-81.4 0-154-39-199-99.2"
      />
    </svg>
  );
}

/**
 * Lucide's info icon, filled: a solid disc with the "i" cut out. The cutout
 * uses the same 1.5px stroke as the other icons (ICON in ./ui).
 */
export function InfoFilled({ size = 18, className }: IconProps) {
  const mask = useId();
  const px = Number(size);
  return (
    <svg width={px} height={px} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <mask id={mask}>
        <rect width="24" height="24" fill="white" />
        <path
          d="M12 16v-4M12 8h.01"
          stroke="black"
          strokeWidth={(1.5 * 24) / px}
          strokeLinecap="round"
        />
      </mask>
      <circle cx="12" cy="12" r="10" fill="currentColor" mask={`url(#${mask})`} />
    </svg>
  );
}
