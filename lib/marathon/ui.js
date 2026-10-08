// Tailwind classes for the HTML and SVG the client module draws itself (tooltips, the d3
// charts, the profile strip, the race-clock histogram). Written out in full so Tailwind finds
// them when it scans this folder; the colors are the story's tokens (marathon.css).

/** Tooltips: a white card (dark in dark mode), muted text with the numbers in ink. */
export const TOOLTIP = "pointer-events-none absolute z-10 max-w-[260px] rounded-xl border border-marathon-surface-border bg-marathon-surface px-3 py-2 text-[13px] leading-[1.45] font-normal text-marathon-ink-3 shadow-marathon-surface opacity-0 transition-opacity duration-120";
export const TOOLTIP_SHOWN = "opacity-100";
export const TIP_STRONG = "font-normal text-marathon-ink";
export const TIP_ROW = "whitespace-nowrap";
export const TIP_SWATCH = "mr-1.5 inline-block size-2 rounded-full align-[0.05em]";

/** An SVG that fills its container's width. */
export const SVG_FLUID = "block h-auto w-full overflow-visible";

/** d3 axes and grids (use with .call): tick labels at 12px in muted ink, hairline ticks and
 *  grid lines, no domain line. (The class beats the font attributes d3 puts on the group.) */
export function styleAxis(g) {
  g.attr("class", "font-sans");
  g.select(".domain").remove();
  g.selectAll(".tick line").attr("class", "stroke-marathon-rule [shape-rendering:crispEdges]");
  g.selectAll(".tick text").attr("class", "fill-marathon-ink-3 text-[12px] font-normal tabular-nums");
}
