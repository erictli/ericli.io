// Color and basemap options. Both are user-facing (bottom toolbar) and travel
// with share links so a friend sees the map the way you styled it.

export interface Palette {
  id: string;
  name: string;
  /** Solid fill for visited neighborhoods, also the UI accent. */
  visited: string;
  /** A lighter lift for hover; never darker than the fill. */
  visitedHover: string;
  /** Light tint for unvisited neighborhoods. */
  unvisited: string;
  unvisitedHover: string;
  outline: string;
  /** Compare mode: the other person's map, and the overlap. */
  theirs: string;
  theirsHover: string;
  both: string;
  bothHover: string;
}

export const PALETTES: readonly Palette[] = [
  {
    id: "orange",
    name: "Orange",
    visited: "#F04400",
    visitedHover: "#FF6A2E",
    unvisited: "#FFC9A6",
    unvisitedHover: "#FFB48C",
    outline: "#E08B60",
    theirs: "#2F6BFF",
    theirsHover: "#1F4FD6",
    both: "#8B3DFF",
    bothHover: "#6A2AD6",
  },
  {
    id: "blue",
    name: "Blue",
    visited: "#2563EB",
    visitedHover: "#4F86FF",
    unvisited: "#BFD3FF",
    unvisitedHover: "#A9C4FF",
    outline: "#7C9BE8",
    theirs: "#F04400",
    theirsHover: "#C63600",
    both: "#8B3DFF",
    bothHover: "#6A2AD6",
  },
];

export const DEFAULT_PALETTE_ID = PALETTES[0].id;

/** The palette with this id, or the default for anything unknown. */
export function paletteById(id: string | null | undefined): Palette {
  return PALETTES.find((palette) => palette.id === id) ?? PALETTES[0];
}

/** Basemap color scheme. Neighborhood fills sit on top of it. */
export interface BasemapTheme {
  id: "bright" | "night";
  night: boolean;
  colors: {
    /** Land. Matches --nyc-page in nyc.css so the page never flashes. */
    background: string;
    landuse: string;
    vegetation: string;
    parks: string;
    water: string;
    buildings: string;
    roads: string;
    majorRoads: string;
    boundaries: string;
    labelHalo: string;
    waterText: string;
    roadText: string;
    /** Our own neighborhood name labels: marked, and not yet. */
    neighborhoodText: string;
    neighborhoodMuted: string;
    neighborhoodHalo: string;
    /** Outline of the neighborhood whose details are open. */
    selected: string;
  };
}

const BRIGHT: BasemapTheme = {
  // Neutral and bright: white roads on light grey land, clear blue water,
  // green parks. Closest to Apple Maps in daylight.
  id: "bright",
  night: false,
  colors: {
    background: "#F0EFEB",
    landuse: "#E8E7E2",
    vegetation: "#D2E5C8",
    parks: "#C6DFBA",
    water: "#B1D5EE",
    buildings: "#E3E2DD",
    roads: "#FFFFFF",
    majorRoads: "#F8F6F0",
    boundaries: "#C9C7C1",
    labelHalo: "rgba(240, 239, 235, 0.9)",
    waterText: "#4F86AA",
    roadText: "#6F7276",
    neighborhoodText: "#2E3238",
    neighborhoodMuted: "#8A8F96",
    neighborhoodHalo: "rgba(255, 255, 255, 0.85)",
    selected: "#2B2620",
  },
};

const NIGHT: BasemapTheme = {
  id: "night",
  night: true,
  colors: {
    background: "#17191D",
    landuse: "#1C1F24",
    vegetation: "#1D2823",
    parks: "#1A2B22",
    water: "#0D1117",
    buildings: "#22252B",
    roads: "#2B2F36",
    majorRoads: "#3B4049",
    boundaries: "#3C4048",
    labelHalo: "rgba(23, 25, 29, 0.9)",
    waterText: "#6F8DA3",
    roadText: "#8A9099",
    neighborhoodText: "#E8EAEE",
    neighborhoodMuted: "#7C828B",
    neighborhoodHalo: "rgba(23, 25, 29, 0.8)",
    selected: "#F5F5F4",
  },
};

export function themeFor(night: boolean): BasemapTheme {
  return night ? NIGHT : BRIGHT;
}
