import type {
  FeatureCollection,
  MultiLineString,
  MultiPolygon,
  Polygon,
} from "geojson";

export type Borough =
  | "Bronx"
  | "Brooklyn"
  | "Manhattan"
  | "Queens"
  | "Staten Island";

/** [west, south, east, north] in degrees. */
export type Bounds = [number, number, number, number];

export interface Neighborhood {
  /** Slug from the boundary source, e.g. "cobble-hill-brooklyn". Used in share links. */
  id: string;
  /** Curated display name. */
  name: string;
  /** Other places the area covers, for details and search. */
  includes: string[];
  borough: Borough;
  bbox: Bounds;
  /** An interior point for the name label, [lng, lat]. */
  label: [number, number];
}

export interface NeighborhoodProperties {
  id: string;
  name: string;
  borough: Borough;
}

export type NeighborhoodsGeoJson = FeatureCollection<
  Polygon | MultiPolygon,
  NeighborhoodProperties
>;

export interface SubwayRouteProperties {
  id: string;
  service: string;
  name: string;
  color: string;
}

export type SubwayGeoJson = FeatureCollection<
  MultiLineString,
  SubwayRouteProperties
>;

export interface ProgressState {
  version: 2;
  visitedIds: string[];
}

/** How the map is styled; travels with share links. */
export interface MapStyleChoice {
  paletteId: string;
  night: boolean;
}

/** A map decoded from a share link. */
export interface SharedMap {
  visitedIds: ReadonlySet<string>;
  style: MapStyleChoice | null;
}
