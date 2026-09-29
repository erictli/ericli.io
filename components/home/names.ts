// The homepage arrangements, by name; shared by the server page and the
// client layouts (which is why this file has no "use client").
export const HOME_LAYOUT_NAMES = ["window", "over", "horizon", "flank", "inline", "clock", "corners", "knockout"] as const;

export type HomeLayout = (typeof HOME_LAYOUT_NAMES)[number];

export function isHomeLayout(value: unknown): value is HomeLayout {
  return typeof value === "string" && (HOME_LAYOUT_NAMES as readonly string[]).includes(value);
}

/** Faces for the knockout name, while one is being chosen: /?layout=knockout&font=<name>. */
export const KNOCKOUT_FONTS = ["wide", "condensed", "inter"] as const;

export type KnockoutFont = (typeof KNOCKOUT_FONTS)[number];

export function isKnockoutFont(value: unknown): value is KnockoutFont {
  return typeof value === "string" && (KNOCKOUT_FONTS as readonly string[]).includes(value);
}
