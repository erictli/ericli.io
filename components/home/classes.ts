import { BORDER, LINK, MUTED, MUTED_HOVER, TEXT, TOOLTIP } from "@/lib/theme-classes";

const HOME_CLASSES = {
  text: TEXT,
  link: LINK,
  muted: MUTED,
  mutedHover: MUTED_HOVER,
  border: BORDER,
  tooltip: TOOLTIP,
};

/** The homepage's text, link and border classes, for both schemes (see lib/theme-classes). */
export function useHomeClasses() {
  return HOME_CLASSES;
}
