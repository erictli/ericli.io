import type {
  DataDrivenPropertyValueSpecification,
  ExpressionSpecification,
  LayerSpecification,
  StyleSpecification,
} from "maplibre-gl";
import type * as maplibregl from "maplibre-gl";
import type { BasemapTheme, Palette } from "./palettes";

export const NEIGHBORHOOD_SOURCE = "nyc-neighborhoods";
export const NEIGHBORHOOD_FILL = "nyc-neighborhood-fill";
export const NEIGHBORHOOD_OUTLINE = "nyc-neighborhood-outline";
export const NEIGHBORHOOD_OUTLINE_SOLID = "nyc-neighborhood-outline-solid";
export const NEIGHBORHOOD_SELECTED = "nyc-neighborhood-selected";
export const NEIGHBORHOOD_LABEL_SOURCE = "nyc-neighborhood-label-points";
export const NEIGHBORHOOD_LABELS = "nyc-neighborhood-labels";
export const NEIGHBORHOOD_PULSE = "nyc-neighborhood-pulse";
export const NEIGHBORHOOD_HOVER_LABEL = "nyc-neighborhood-hover-label";
export const SUBWAY_SOURCE = "nyc-subway";
export const SUBWAY_LINES = "nyc-subway-lines";

/** The layer our overlays are inserted beneath, so basemap labels stay on top. */
export const FIRST_BASEMAP_LABEL = "water-labels";

const TEXT_FONT = ["Noto Sans Regular"];
const TEXT_FONT_ITALIC = ["Noto Sans Italic"];
const TEXT_FONT_BOLD = ["Noto Sans Bold"];

/** Matches nothing until setFilter targets an id. */
export const NO_FEATURE: ExpressionSpecification = ["==", ["get", "id"], ""];

const latinName: DataDrivenPropertyValueSpecification<string> = [
  "coalesce",
  ["get", "name:latin"],
  ["get", "name_en"],
  ["get", "name"],
];

/**
 * A fresh basemap style for a theme. Fresh on every call because MapLibre
 * takes ownership of the object it's given.
 */
export function buildBasemapStyle(theme: BasemapTheme): StyleSpecification {
  const BASEMAP = theme.colors;
  return {
    version: 8,
    glyphs: "https://tiles.openfreemap.org/fonts/{fontstack}/{range}.pbf",
    sources: {
      openmaptiles: {
        type: "vector",
        url: "https://tiles.openfreemap.org/planet",
        attribution:
          '<a href="https://openfreemap.org" target="_blank" rel="noopener noreferrer">OpenFreeMap</a> © <a href="https://openmaptiles.org" target="_blank" rel="noopener noreferrer">OpenMapTiles</a> © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>',
      },
    },
    layers: [
      {
        id: "background",
        type: "background",
        paint: { "background-color": BASEMAP.background },
      },
      {
        id: "landuse",
        type: "fill",
        source: "openmaptiles",
        "source-layer": "landuse",
        paint: { "fill-color": BASEMAP.landuse, "fill-opacity": 0.5 },
      },
      {
        id: "landcover",
        type: "fill",
        source: "openmaptiles",
        "source-layer": "landcover",
        filter: ["match", ["get", "class"], ["wood", "grass"], true, false],
        paint: { "fill-color": BASEMAP.vegetation, "fill-opacity": 0.6 },
      },
      {
        id: "parks",
        type: "fill",
        source: "openmaptiles",
        "source-layer": "park",
        paint: { "fill-color": BASEMAP.parks, "fill-opacity": 0.7 },
      },
      {
        id: "water",
        type: "fill",
        source: "openmaptiles",
        "source-layer": "water",
        paint: { "fill-color": BASEMAP.water },
      },
      {
        id: "buildings",
        type: "fill",
        source: "openmaptiles",
        "source-layer": "building",
        minzoom: 13,
        paint: { "fill-color": BASEMAP.buildings, "fill-opacity": 0.7 },
      },
      {
        id: "roads",
        type: "line",
        source: "openmaptiles",
        "source-layer": "transportation",
        filter: [
          "match",
          ["get", "class"],
          ["minor", "service", "track", "path"],
          true,
          false,
        ],
        minzoom: 11,
        paint: {
          "line-color": BASEMAP.roads,
          "line-width": [
            "interpolate",
            ["linear"],
            ["zoom"],
            11,
            0.3,
            14,
            1,
            18,
            3,
          ],
        },
      },
      {
        id: "major-roads",
        type: "line",
        source: "openmaptiles",
        "source-layer": "transportation",
        filter: [
          "match",
          ["get", "class"],
          ["motorway", "trunk", "primary", "secondary", "tertiary"],
          true,
          false,
        ],
        paint: {
          "line-color": BASEMAP.majorRoads,
          "line-width": [
            "interpolate",
            ["linear"],
            ["zoom"],
            7,
            0.4,
            13,
            1.8,
            18,
            5,
          ],
        },
      },
      {
        id: "boundaries",
        type: "line",
        source: "openmaptiles",
        "source-layer": "boundary",
        filter: ["match", ["get", "admin_level"], [2, 3, 4], true, false],
        paint: {
          "line-color": BASEMAP.boundaries,
          "line-dasharray": [3, 2],
          "line-opacity": 0.5,
        },
      },
      // Labels. Our neighborhood layers are inserted before this one.
      {
        id: FIRST_BASEMAP_LABEL,
        type: "symbol",
        source: "openmaptiles",
        "source-layer": "water_name",
        // Only once you're in close; at city scale the neighborhoods are the labels.
        minzoom: 11,
        filter: [
          "match",
          ["geometry-type"],
          ["Point", "MultiPoint"],
          true,
          false,
        ],
        layout: {
          "text-field": latinName,
          "text-font": TEXT_FONT_ITALIC,
          "text-size": ["interpolate", ["linear"], ["zoom"], 9, 10, 13, 13],
          "text-letter-spacing": 0.08,
          "text-max-width": 6,
        },
        paint: {
          "text-color": BASEMAP.waterText,
          "text-halo-color": BASEMAP.labelHalo,
          "text-halo-width": 1,
        },
      },
      {
        id: "road-labels",
        type: "symbol",
        source: "openmaptiles",
        "source-layer": "transportation_name",
        minzoom: 13,
        filter: [
          "match",
          ["get", "class"],
          ["motorway", "trunk", "primary", "secondary", "tertiary"],
          true,
          false,
        ],
        layout: {
          "symbol-placement": "line",
          "symbol-spacing": 400,
          "text-field": latinName,
          "text-font": TEXT_FONT,
          "text-size": ["interpolate", ["linear"], ["zoom"], 13, 10, 16, 12],
          "text-rotation-alignment": "map",
        },
        paint: {
          "text-color": BASEMAP.roadText,
          "text-halo-color": BASEMAP.labelHalo,
          "text-halo-width": 1,
        },
      },
      {
        id: "minor-road-labels",
        type: "symbol",
        source: "openmaptiles",
        "source-layer": "transportation_name",
        minzoom: 15,
        filter: ["match", ["get", "class"], ["minor", "service"], true, false],
        layout: {
          "symbol-placement": "line",
          "symbol-spacing": 300,
          "text-field": latinName,
          "text-font": TEXT_FONT,
          "text-size": 10,
          "text-rotation-alignment": "map",
        },
        paint: {
          "text-color": BASEMAP.roadText,
          "text-halo-color": BASEMAP.labelHalo,
          "text-halo-width": 1,
        },
      },
    ],
  };
}

type PaintProperty = Parameters<maplibregl.Map["setPaintProperty"]>[1];

/**
 * Sets every paint property from these layer definitions on a loaded map, so
 * the definitions stay the single source of truth when colors change. Layers
 * that aren't on the map yet are skipped, as are any properties in `skip`.
 */
export function repaintLayers(
  map: maplibregl.Map,
  layers: readonly LayerSpecification[],
  skip: ReadonlySet<string> = new Set(),
): void {
  for (const layer of layers) {
    if (!map.getLayer(layer.id) || !("paint" in layer) || !layer.paint) continue;
    for (const [property, value] of Object.entries(layer.paint)) {
      if (skip.has(`${layer.id}:${property}`)) continue;
      map.setPaintProperty(layer.id, property as PaintProperty, value);
    }
  }
}

// Read-only copies of each theme's basemap layers, for repainting.
const basemapLayerCache = new Map<BasemapTheme["id"], LayerSpecification[]>();

/** Repaints the basemap to a theme without reloading the style. */
export function applyBasemapTheme(map: maplibregl.Map, theme: BasemapTheme): void {
  let layers = basemapLayerCache.get(theme.id);
  if (!layers) {
    layers = buildBasemapStyle(theme).layers;
    basemapLayerCache.set(theme.id, layers);
  }
  repaintLayers(map, layers);
}

type BoolState = ["boolean", ["feature-state", string], false];
const state = (key: string): BoolState => [
  "boolean",
  ["feature-state", key],
  false,
];

function markedState(compare: boolean): ExpressionSpecification {
  return compare
    ? ["any", state("visited"), state("theirs")]
    : state("visited");
}

/** Mine, theirs or both: the solid color of a marked neighborhood. */
function markedColor(
  compare: boolean,
  palette: Palette,
): DataDrivenPropertyValueSpecification<string> {
  if (!compare) return palette.visited;
  return [
    "case",
    ["all", state("visited"), state("theirs")],
    palette.both,
    state("visited"),
    palette.visited,
    palette.theirs,
  ];
}

/**
 * Fill color as a function of feature state. In compare mode a neighborhood
 * can be mine, theirs, or both. Hover lifts (lighter), never darkens.
 */
function neighborhoodFillColor(
  compare: boolean,
  palette: Palette,
): DataDrivenPropertyValueSpecification<string> {
  const hover = state("hover");
  if (!compare) {
    return [
      "case",
      ["all", state("visited"), hover],
      palette.visitedHover,
      state("visited"),
      palette.visited,
      hover,
      palette.unvisitedHover,
      palette.unvisited,
    ];
  }
  return [
    "case",
    ["all", state("visited"), state("theirs"), hover],
    palette.bothHover,
    ["all", state("visited"), state("theirs")],
    palette.both,
    ["all", state("visited"), hover],
    palette.visitedHover,
    state("visited"),
    palette.visited,
    ["all", state("theirs"), hover],
    palette.theirsHover,
    state("theirs"),
    palette.theirs,
    hover,
    palette.unvisitedHover,
    palette.unvisited,
  ];
}

// Unvisited tint (and its hover) at zoom 10 and zoom 14. The tint fades as you
// zoom in so streets stay legible. Night is lower: the light pastel tints read
// much brighter against the dark basemap.
const UNVISITED_OPACITY = {
  day: { rest: [0.36, 0.2], hover: [0.5, 0.34] },
  night: { rest: [0.22, 0.12], hover: [0.34, 0.22] },
} as const;

function neighborhoodFillOpacity(
  compare: boolean,
  night: boolean,
): DataDrivenPropertyValueSpecification<number> {
  const marked = markedState(compare);
  const hover = state("hover");
  const { rest, hover: lifted } = UNVISITED_OPACITY[night ? "night" : "day"];
  return [
    "interpolate",
    ["linear"],
    ["zoom"],
    10,
    ["case", marked, 0.86, hover, lifted[0], rest[0]],
    14,
    ["case", marked, 0.78, hover, lifted[1], rest[1]],
  ];
}

export function neighborhoodLayers(
  compare: boolean,
  palette: Palette,
  theme: BasemapTheme,
): LayerSpecification[] {
  return [
    {
      id: NEIGHBORHOOD_FILL,
      type: "fill",
      source: NEIGHBORHOOD_SOURCE,
      paint: {
        "fill-color": neighborhoodFillColor(compare, palette),
        "fill-opacity": neighborhoodFillOpacity(compare, theme.night),
      },
    },
    {
      // Unvisited boundaries are dashed: outlines waiting to be filled in.
      id: NEIGHBORHOOD_OUTLINE,
      type: "line",
      source: NEIGHBORHOOD_SOURCE,
      paint: {
        "line-color": palette.outline,
        "line-opacity": ["case", markedState(compare), 0, ["case", state("hover"), 1, 0.7]],
        "line-width": ["interpolate", ["linear"], ["zoom"], 9, 0.6, 13, 1.1],
        "line-dasharray": [2.5, 2],
      },
    },
    {
      // Visited boundaries are solid ink.
      id: NEIGHBORHOOD_OUTLINE_SOLID,
      type: "line",
      source: NEIGHBORHOOD_SOURCE,
      paint: {
        "line-color": markedColor(compare, palette),
        "line-opacity": ["case", markedState(compare), 0.9, 0],
        "line-width": ["interpolate", ["linear"], ["zoom"], 9, 0.6, 13, 1.2],
      },
    },
    {
      id: NEIGHBORHOOD_SELECTED,
      type: "line",
      source: NEIGHBORHOOD_SOURCE,
      paint: {
        "line-color": theme.colors.selected,
        "line-width": ["case", state("selected"), 2.2, 0],
        "line-opacity": ["case", state("selected"), 0.9, 0],
      },
    },
    {
      // A one-shot outline flash when a neighborhood is marked. The filter is
      // pointed at the feature and the paint values animate via transitions.
      id: NEIGHBORHOOD_PULSE,
      type: "line",
      source: NEIGHBORHOOD_SOURCE,
      filter: NO_FEATURE,
      paint: {
        "line-color": palette.visited,
        "line-width": 0,
        "line-opacity": 0,
        "line-blur": 1,
      },
    },
  ];
}

function labelColor(
  theme: BasemapTheme,
): DataDrivenPropertyValueSpecification<string> {
  return [
    "case",
    ["any", state("visited"), state("theirs")],
    theme.colors.neighborhoodText,
    theme.colors.neighborhoodMuted,
  ];
}

/** Name labels from the point source, so multipolygons get one label. */
export function neighborhoodLabelLayers(
  theme: BasemapTheme,
): LayerSpecification[] {
  return [
    {
      id: NEIGHBORHOOD_LABELS,
      type: "symbol",
      source: NEIGHBORHOOD_LABEL_SOURCE,
      minzoom: 10,
      layout: {
        "text-field": ["get", "name"],
        "text-font": TEXT_FONT,
        "text-size": [
          "interpolate",
          ["linear"],
          ["zoom"],
          10,
          9,
          13,
          12.5,
          15,
          15,
        ],
        "text-max-width": 7,
        "text-padding": 6,
        "text-line-height": 1.15,
      },
      paint: {
        // Names fill in as you go: marked neighborhoods in full ink, the
        // rest muted. State is mirrored onto the label point source.
        "text-color": labelColor(theme),
        "text-halo-color": theme.colors.neighborhoodHalo,
        "text-halo-width": 1.2,
        "text-opacity": ["interpolate", ["linear"], ["zoom"], 10, 0, 10.6, 1],
      },
    },
    {
      // The hovered neighborhood's own label, bold and allowed to overlap, at
      // any zoom. Replaces a tooltip: the map itself answers "what is this?".
      id: NEIGHBORHOOD_HOVER_LABEL,
      type: "symbol",
      source: NEIGHBORHOOD_LABEL_SOURCE,
      filter: NO_FEATURE,
      layout: {
        "text-field": ["get", "name"],
        "text-font": TEXT_FONT_BOLD,
        "text-size": [
          "interpolate",
          ["linear"],
          ["zoom"],
          8,
          11,
          13,
          13.5,
          15,
          16,
        ],
        "text-max-width": 7,
        "text-line-height": 1.15,
        "text-allow-overlap": true,
        "text-ignore-placement": true,
      },
      paint: {
        "text-color": theme.colors.neighborhoodText,
        "text-halo-color": theme.colors.neighborhoodHalo,
        "text-halo-width": 1.6,
      },
    },
  ];
}

export const SUBWAY_LAYER: LayerSpecification = {
  id: SUBWAY_LINES,
  type: "line",
  source: SUBWAY_SOURCE,
  layout: { "line-cap": "round", "line-join": "round" },
  paint: {
    "line-color": ["get", "color"],
    "line-opacity": 0.85,
    // Unchanged from borough zoom (about 11) in; thinner when zoomed out to
    // the whole city, where full-width lines crowd the neighborhoods.
    "line-width": ["interpolate", ["linear"], ["zoom"], 9, 0.6, 10, 1, 11, 2.5, 13, 3.5],
  },
};
