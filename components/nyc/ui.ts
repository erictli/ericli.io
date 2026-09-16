// Shared Tailwind recipes. Colors come from the tokens in app/nyc/nyc.css.

/**
 * Props for every Lucide icon: one stroke width in pixels at any icon size,
 * so a 10px badge check and an 18px toolbar icon read at the same weight.
 */
export const ICON = { strokeWidth: 1.5, absoluteStrokeWidth: true } as const;

/**
 * Solid chrome: white by day, charcoal at night, hairline border, small
 * shadow. No text color, so each use sets its own without a conflict.
 */
export const SURFACE = "bg-nyc-surface shadow-nyc border border-nyc-line";

/** A surface that is itself a button: lifts on hover, gives on press. */
export const SURFACE_BUTTON = `${SURFACE} cursor-pointer transition-[background-color,transform] duration-[120ms] hover:bg-nyc-surface-hover active:scale-[0.97]`;

/** The opposite of the page, for the toast: dark by day, light at night. */
export const SURFACE_INVERSE =
  "border border-nyc-line bg-nyc-inverse text-nyc-on-inverse shadow-nyc";

/**
 * A bare icon button: no background, dimmed until hovered or focused. Active
 * buttons stay at full opacity, in `activeColor` if given (a text-* class).
 * `quiet` dims further, for secondary controls like the info button.
 * A function rather than a string so the dimmed and active classes never sit
 * on the element together.
 */
export function iconButton(
  active = false,
  { activeColor = "text-nyc-ink", quiet = false } = {},
): string {
  const state = active
    ? `${activeColor} opacity-100`
    : `text-nyc-ink ${quiet ? "opacity-30" : "opacity-60"} hover:opacity-100 focus-visible:opacity-100`;
  return `grid size-9 cursor-pointer place-items-center rounded-full transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nyc-ink-2 ${state}`;
}

/** Width of the cards stacked in the top-left corner on desktop. */
export const CARD_WIDTH = "w-72";

/** A row in a card's list: the borough rows and the viewing banner's actions. */
export const CARD_ROW =
  "flex h-7 w-full cursor-pointer items-center gap-2.5 rounded-lg px-1.5 text-left text-sm font-[450] text-nyc-ink-2 transition-colors hover:bg-nyc-hover hover:text-nyc-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nyc-ink-2";
