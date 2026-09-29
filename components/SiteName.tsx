"use client";

import Link from "next/link";

/**
 * The name in the top corner, just after the menu button and centered on
 * it, the way the homepage opens. It scrolls away with the page (the menu
 * button stays), so it never sits over the reading. Needs a positioned
 * parent at the top of the page.
 */
export function SiteName() {
  return (
    <Link
      href="/"
      className="absolute top-[21px] left-14 text-sm leading-[21px] font-medium transition-opacity hover:opacity-60"
    >
      Eric Li
    </Link>
  );
}
