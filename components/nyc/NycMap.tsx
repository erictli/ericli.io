"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import * as maplibregl from "maplibre-gl";
import type {
  MapLayerMouseEvent,
  MapMouseEvent,
  MapTouchEvent,
  PaddingOptions,
} from "maplibre-gl";
import { NEIGHBORHOODS } from "@/lib/nyc/generated/neighborhoods";
import type {
  Bounds,
  NeighborhoodsGeoJson,
  SubwayGeoJson,
} from "@/lib/nyc/types";
import {
  FIRST_BASEMAP_LABEL,
  applyBasemapTheme,
  buildBasemapStyle,
  NEIGHBORHOOD_FILL,
  NEIGHBORHOOD_HOVER_LABEL,
  NEIGHBORHOOD_LABELS,
  NEIGHBORHOOD_LABEL_SOURCE,
  NEIGHBORHOOD_PULSE,
  NEIGHBORHOOD_SOURCE,
  NO_FEATURE,
  SUBWAY_LAYER,
  SUBWAY_LINES,
  SUBWAY_SOURCE,
  neighborhoodLabelLayers,
  neighborhoodLayers,
  repaintLayers,
} from "./map-style";
import type { BasemapTheme, Palette } from "./palettes";

export interface MapPoint {
  x: number;
  y: number;
}

export interface NycMapHandle {
  fitBounds: (bounds: Bounds, options?: { maxZoom?: number }) => void;
  /** Flash a neighborhood's outline, used when it's marked. */
  pulse: (id: string) => void;
}

interface NycMapProps {
  neighborhoods: NeighborhoodsGeoJson | null;
  subwayLines: SubwayGeoJson | null;
  showSubway: boolean;
  visitedIds: ReadonlySet<string>;
  compareIds: ReadonlySet<string> | null;
  selectedId: string | null;
  canEdit: boolean;
  hoverEnabled: boolean;
  padding: PaddingOptions;
  /** What to frame on load and until the user moves the map. */
  initialBounds: Bounds;
  palette: Palette;
  theme: BasemapTheme;
  /** Primary tap or click on a neighborhood. */
  onTap: (id: string, point: MapPoint) => void;
  /** Press-and-hold on touch, or a tap while viewing a shared map. */
  onOpenDetails: (id: string, point: MapPoint) => void;
  onBackgroundTap: () => void;
  onMoveStart: () => void;
}

const LONG_PRESS_MS = 450;
const LONG_PRESS_TOLERANCE_PX = 8;
const ALL_IDS = NEIGHBORHOODS.map(({ id }) => id);
const MARK_SOURCES = [NEIGHBORHOOD_SOURCE, NEIGHBORHOOD_LABEL_SOURCE];

// The pulse animates these itself; a repaint must not reset them mid-flash.
const PULSE_ANIMATED = new Set([
  `${NEIGHBORHOOD_PULSE}:line-width`,
  `${NEIGHBORHOOD_PULSE}:line-opacity`,
]);

interface Marks {
  visited: ReadonlySet<string>;
  theirs: ReadonlySet<string> | null;
}

/** Writes visited/theirs feature state for these ids on every loaded source. */
function writeMarks(map: maplibregl.Map, ids: readonly string[], marks: Marks) {
  for (const source of MARK_SOURCES) {
    if (!map.getSource(source)) continue;
    for (const id of ids) {
      map.setFeatureState(
        { source, id },
        { visited: marks.visited.has(id), theirs: marks.theirs?.has(id) ?? false },
      );
    }
  }
}

// Label anchors are static, so labels show before the polygons arrive.
const LABEL_POINTS: GeoJSON.FeatureCollection<GeoJSON.Point> = {
  type: "FeatureCollection",
  features: NEIGHBORHOODS.map(({ id, name, label }) => ({
    type: "Feature",
    properties: { id, name },
    geometry: { type: "Point", coordinates: label },
  })),
};

function toLngLatBounds(bounds: Bounds): maplibregl.LngLatBoundsLike {
  return [
    [bounds[0], bounds[1]],
    [bounds[2], bounds[3]],
  ];
}

export const NycMap = forwardRef<NycMapHandle, NycMapProps>(function NycMap(
  {
    neighborhoods,
    subwayLines,
    showSubway,
    visitedIds,
    compareIds,
    selectedId,
    canEdit,
    hoverEnabled,
    padding,
    initialBounds,
    palette,
    theme,
    onTap,
    onOpenDetails,
    onBackgroundTap,
    onMoveStart,
  },
  ref,
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const styleReadyRef = useRef(false);
  const hoveredIdRef = useRef<string | null>(null);
  const selectedIdRef = useRef<string | null>(null);
  const suppressClickRef = useRef(false);
  const ensureLayersRef = useRef<() => void>(() => {});
  // Until the user pans or zooms, keep the whole city framed through resizes
  // and padding changes (sheet opening, orientation change).
  const userMovedRef = useRef(false);
  const frameCityRef = useRef<() => void>(() => {});
  // The marks last written to feature state, so updates only touch changes.
  const marksRef = useRef<Marks>({ visited: new Set(), theirs: null });

  // Latest props for handlers bound once at map creation.
  const propsRef = useRef({
    neighborhoods,
    subwayLines,
    showSubway,
    visitedIds,
    compareIds,
    canEdit,
    hoverEnabled,
    padding,
    initialBounds,
    palette,
    theme,
    onTap,
    onOpenDetails,
    onBackgroundTap,
    onMoveStart,
  });
  propsRef.current = {
    neighborhoods,
    subwayLines,
    showSubway,
    visitedIds,
    compareIds,
    canEdit,
    hoverEnabled,
    padding,
    initialBounds,
    palette,
    theme,
    onTap,
    onOpenDetails,
    onBackgroundTap,
    onMoveStart,
  };

  useImperativeHandle(ref, () => ({
    pulse(id) {
      const map = mapRef.current;
      if (!map?.getLayer(NEIGHBORHOOD_PULSE)) return;
      map.setFilter(NEIGHBORHOOD_PULSE, ["==", ["get", "id"], id]);
      // Jump to the flash, then let transitions carry it back to nothing.
      map.setPaintProperty(NEIGHBORHOOD_PULSE, "line-width-transition", { duration: 0 });
      map.setPaintProperty(NEIGHBORHOOD_PULSE, "line-opacity-transition", { duration: 0 });
      map.setPaintProperty(NEIGHBORHOOD_PULSE, "line-width", 6);
      map.setPaintProperty(NEIGHBORHOOD_PULSE, "line-opacity", 0.9);
      window.setTimeout(() => {
        if (!map.getLayer(NEIGHBORHOOD_PULSE)) return;
        map.setPaintProperty(NEIGHBORHOOD_PULSE, "line-width-transition", { duration: 650 });
        map.setPaintProperty(NEIGHBORHOOD_PULSE, "line-opacity-transition", { duration: 650 });
        map.setPaintProperty(NEIGHBORHOOD_PULSE, "line-width", 1);
        map.setPaintProperty(NEIGHBORHOOD_PULSE, "line-opacity", 0);
      }, 40);
    },
    fitBounds(bounds, options) {
      userMovedRef.current = true;
      const chrome = propsRef.current.padding;
      mapRef.current?.fitBounds(toLngLatBounds(bounds), {
        padding: {
          top: (chrome.top ?? 0) + 32,
          right: (chrome.right ?? 0) + 32,
          bottom: (chrome.bottom ?? 0) + 32,
          left: (chrome.left ?? 0) + 32,
        },
        maxZoom: options?.maxZoom ?? 13.5,
        duration: 700,
      });
    },
  }));

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    maplibregl.setWorkerUrl("/nyc/maplibre/maplibre-gl-worker.mjs");

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: buildBasemapStyle(theme),
      bounds: toLngLatBounds(initialBounds),
      fitBoundsOptions: { padding },
      minZoom: 8,
      maxZoom: 17,
      maxBounds: [
        [-75.2, 39.9],
        [-72.6, 41.5],
      ],
      attributionControl: false,
    });
    mapRef.current = map;
    if (process.env.NODE_ENV !== "production") {
      // Handy in devtools: __nycMap.getStyle(), __nycMap.getZoom(), ...
      (window as unknown as { __nycMap?: maplibregl.Map }).__nycMap = map;
    }

    // Double-click zoom would toggle a neighborhood twice on the way in.
    map.doubleClickZoom.disable();
    map.addControl(
      new maplibregl.NavigationControl({ showCompass: false }),
      "bottom-right",
    );
    map.addControl(
      new maplibregl.AttributionControl({ compact: false }),
      "bottom-left",
    );

    // A newly added source starts blank, so it gets every id.
    const syncFeatureState = () => {
      const { visitedIds: visited, compareIds: theirs } = propsRef.current;
      marksRef.current = { visited, theirs };
      writeMarks(map, ALL_IDS, marksRef.current);
    };

    const ensureNeighborhoodLayers = () => {
      const data = propsRef.current.neighborhoods;
      if (!styleReadyRef.current || !data || map.getSource(NEIGHBORHOOD_SOURCE)) {
        return;
      }
      map.addSource(NEIGHBORHOOD_SOURCE, {
        type: "geojson",
        data,
        promoteId: "id",
      });
      // Polygons go under our labels, which are already in place.
      const before = map.getLayer(NEIGHBORHOOD_LABELS) ? NEIGHBORHOOD_LABELS : undefined;
      for (const layer of neighborhoodLayers(
        propsRef.current.compareIds !== null,
        propsRef.current.palette,
        propsRef.current.theme,
      )) {
        map.addLayer(layer, before);
      }
      syncFeatureState();
      if (selectedIdRef.current) {
        map.setFeatureState(
          { source: NEIGHBORHOOD_SOURCE, id: selectedIdRef.current },
          { selected: true },
        );
      }
    };

    const ensureSubwayLayer = () => {
      const data = propsRef.current.subwayLines;
      if (!styleReadyRef.current || !data || map.getSource(SUBWAY_SOURCE)) return;
      map.addSource(SUBWAY_SOURCE, { type: "geojson", data });
      // Above neighborhood fills, below their labels.
      const before = map.getLayer(NEIGHBORHOOD_LABELS)
        ? NEIGHBORHOOD_LABELS
        : map.getLayer(FIRST_BASEMAP_LABEL)
          ? FIRST_BASEMAP_LABEL
          : undefined;
      map.addLayer(
        {
          ...SUBWAY_LAYER,
          layout: {
            ...SUBWAY_LAYER.layout,
            visibility: propsRef.current.showSubway ? "visible" : "none",
          },
        },
        before,
      );
    };

    const neighborhoodAt = (point: maplibregl.Point): string | null => {
      if (!map.getLayer(NEIGHBORHOOD_FILL)) return null;
      const id = map.queryRenderedFeatures(point, { layers: [NEIGHBORHOOD_FILL] })[0]
        ?.properties?.id;
      return typeof id === "string" ? id : null;
    };

    const setHover = (id: string | null) => {
      if (hoveredIdRef.current === id) return;
      if (hoveredIdRef.current !== null) {
        map.setFeatureState(
          { source: NEIGHBORHOOD_SOURCE, id: hoveredIdRef.current },
          { hover: false },
        );
      }
      hoveredIdRef.current = id;
      if (id !== null) {
        map.setFeatureState({ source: NEIGHBORHOOD_SOURCE, id }, { hover: true });
      }
      map.getCanvas().style.cursor = id ? "pointer" : "";
      // Swap the hovered neighborhood's label for the bold one.
      if (map.getLayer(NEIGHBORHOOD_HOVER_LABEL)) {
        map.setFilter(
          NEIGHBORHOOD_HOVER_LABEL,
          id === null ? NO_FEATURE : ["==", ["get", "id"], id],
        );
        map.setFilter(
          NEIGHBORHOOD_LABELS,
          id === null ? null : ["!=", ["get", "id"], id],
        );
      }
    };

    // Press-and-hold on touch opens details without toggling.
    let pressTimer: number | null = null;
    let pressStart: maplibregl.Point | null = null;
    const cancelPress = () => {
      if (pressTimer !== null) window.clearTimeout(pressTimer);
      pressTimer = null;
      pressStart = null;
    };
    const handleTouchStart = (event: MapTouchEvent) => {
      cancelPress();
      if (event.originalEvent.touches.length !== 1) return;
      pressStart = event.point;
      pressTimer = window.setTimeout(() => {
        pressTimer = null;
        const id = pressStart ? neighborhoodAt(pressStart) : null;
        pressStart = null;
        if (!id) return;
        suppressClickRef.current = true;
        window.setTimeout(() => {
          suppressClickRef.current = false;
        }, 700);
        propsRef.current.onOpenDetails(id, { x: event.point.x, y: event.point.y });
      }, LONG_PRESS_MS);
    };
    const handleTouchMove = (event: MapTouchEvent) => {
      if (!pressStart) return;
      if (event.point.dist(pressStart) > LONG_PRESS_TOLERANCE_PX) cancelPress();
    };

    const handleClick = (event: MapMouseEvent) => {
      if (suppressClickRef.current) {
        suppressClickRef.current = false;
        return;
      }
      const id = neighborhoodAt(event.point);
      const point = { x: event.point.x, y: event.point.y };
      if (!id) {
        propsRef.current.onBackgroundTap();
      } else if (propsRef.current.canEdit) {
        propsRef.current.onTap(id, point);
      } else {
        propsRef.current.onOpenDetails(id, point);
      }
    };

    const handleMouseMove = (event: MapLayerMouseEvent) => {
      if (!propsRef.current.hoverEnabled) return;
      const id = event.features?.[0]?.properties?.id;
      if (typeof id !== "string") return;
      setHover(id);
    };
    const handleMouseLeave = () => setHover(null);

    // "style.load" fires once the style is parsed, before tiles arrive, so our
    // layers show up alongside the basemap instead of after its first full paint.
    map.once("style.load", () => {
      styleReadyRef.current = true;
      map.addSource(NEIGHBORHOOD_LABEL_SOURCE, {
        type: "geojson",
        data: LABEL_POINTS,
        promoteId: "id",
      });
      const beforeBasemapLabels = map.getLayer(FIRST_BASEMAP_LABEL)
        ? FIRST_BASEMAP_LABEL
        : undefined;
      for (const layer of neighborhoodLabelLayers(propsRef.current.theme)) {
        map.addLayer(layer, beforeBasemapLabels);
      }
      syncFeatureState();
      ensureNeighborhoodLayers();
      ensureSubwayLayer();

      map.on("click", handleClick);
      map.on("mousemove", NEIGHBORHOOD_FILL, handleMouseMove);
      map.on("mouseleave", NEIGHBORHOOD_FILL, handleMouseLeave);
      map.on("touchstart", handleTouchStart);
      map.on("touchmove", handleTouchMove);
      map.on("touchend", cancelPress);
      map.on("touchcancel", cancelPress);
      map.on("movestart", (event) => {
        if (event.originalEvent) userMovedRef.current = true;
        cancelPress();
        handleMouseLeave();
        propsRef.current.onMoveStart();
      });
    });

    const frameCity = () => {
      map.fitBounds(toLngLatBounds(propsRef.current.initialBounds), {
        padding: propsRef.current.padding,
        duration: 0,
      });
    };
    frameCityRef.current = frameCity;

    // Data may arrive before or after the style; both paths call ensure*.
    ensureLayersRef.current = () => {
      ensureNeighborhoodLayers();
      ensureSubwayLayer();
    };

    const resizeObserver = new ResizeObserver(() => {
      map.resize();
      if (!userMovedRef.current) frameCity();
    });
    resizeObserver.observe(containerRef.current);

    return () => {
      cancelPress();
      resizeObserver.disconnect();
      map.remove();
      mapRef.current = null;
      styleReadyRef.current = false;
    };
    // The map is created once; later prop changes go through the effects below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Data arrival.
  useEffect(() => {
    ensureLayersRef.current();
  }, [neighborhoods, subwayLines]);

  // Visited / compare state: only the neighborhoods that changed.
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    const previous = marksRef.current;
    const changed = ALL_IDS.filter(
      (id) =>
        previous.visited.has(id) !== visitedIds.has(id) ||
        (previous.theirs?.has(id) ?? false) !== (compareIds?.has(id) ?? false),
    );
    marksRef.current = { visited: visitedIds, theirs: compareIds };
    writeMarks(map, changed, marksRef.current);
  }, [visitedIds, compareIds]);

  // Colors: compare mode, palette and theme all repaint from the same layer
  // definitions the layers were created with.
  const compare = compareIds !== null;
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !styleReadyRef.current) return;
    applyBasemapTheme(map, theme);
    repaintLayers(map, neighborhoodLabelLayers(theme));
    repaintLayers(map, neighborhoodLayers(compare, palette, theme), PULSE_ANIMATED);
  }, [neighborhoods, compare, palette, theme]);

  // Subway visibility.
  useEffect(() => {
    const map = mapRef.current;
    if (!map?.getLayer(SUBWAY_LINES)) return;
    map.setLayoutProperty(SUBWAY_LINES, "visibility", showSubway ? "visible" : "none");
  }, [showSubway, subwayLines]);

  // Selection outline.
  useEffect(() => {
    const map = mapRef.current;
    const previous = selectedIdRef.current;
    selectedIdRef.current = selectedId;
    if (!map?.getSource(NEIGHBORHOOD_SOURCE)) return;
    if (previous && previous !== selectedId) {
      map.setFeatureState(
        { source: NEIGHBORHOOD_SOURCE, id: previous },
        { selected: false },
      );
    }
    if (selectedId) {
      map.setFeatureState(
        { source: NEIGHBORHOOD_SOURCE, id: selectedId },
        { selected: true },
      );
    }
  }, [neighborhoods, selectedId]);

  // Keep the city framed around the UI chrome.
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    if (userMovedRef.current) map.easeTo({ padding, duration: 300 });
    else frameCityRef.current();
  }, [padding, initialBounds]);

  return (
    <div
      ref={containerRef}
      // Inline because maplibre-gl.css sets `position: relative` on the map
      // element outside any cascade layer, which beats Tailwind's utilities.
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      role="region"
      aria-label="Interactive map of New York City neighborhoods"
    />
  );
});
