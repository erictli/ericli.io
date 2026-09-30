// Text, link and border colors for both schemes, as CSS. Tailwind's `dark:`
// follows the visitor's system setting, so a page renders the right colors
// straight from the server: no waiting for JavaScript to learn the scheme,
// and no flash of the wrong one. These match what ThemeContext's getters
// return for light and dark.

export const TEXT = "text-neutral-950 dark:text-white";

export const MUTED = "text-neutral-950/50 dark:text-white/60";

export const MUTED_HOVER = "transition-colors hover:text-neutral-950 dark:hover:text-white";

/** Dotted underlines and focus rings for inline links. */
export const LINK =
  "border-neutral-950/20 hover:border-neutral-950/30 focus-visible:outline-none focus-visible:bg-neutral-950/10 dark:border-white/20 dark:hover:border-white/30 dark:focus-visible:bg-white/20";

export const BORDER = "border-neutral-950/[7%] dark:border-white/[7%]";

/** Small tooltips: dark on light pages, light on dark ones. */
export const TOOLTIP = "bg-neutral-800 text-white dark:bg-white dark:text-neutral-950";
