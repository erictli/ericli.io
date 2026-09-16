"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { PaddingOptions } from "maplibre-gl";
import { Eraser, Map as MapIcon, RefreshCw, Share, ZoomIn } from "lucide-react";
import { copyText } from "@/lib/nyc/clipboard";
import {
  isAbortError,
  loadNeighborhoodsGeoJson,
  loadSubwayGeoJson,
} from "@/lib/nyc/data";
import {
  BOROUGH_BOUNDS,
  NEIGHBORHOODS,
  NYC_BOUNDS,
} from "@/lib/nyc/generated/neighborhoods";
import type {
  Borough,
  Bounds,
  MapStyleChoice,
  Neighborhood,
  NeighborhoodsGeoJson,
  SubwayGeoJson,
} from "@/lib/nyc/types";
import {
  HOVER_QUERY,
  MOBILE_QUERY,
  useMediaQuery,
} from "@/lib/nyc/use-media-query";
import { useTracker } from "@/lib/nyc/use-tracker";
import { MtaLogo } from "./icons";
import { NeighborhoodDetail } from "./NeighborhoodDetail";
import { NycMap, type MapPoint, type NycMapHandle } from "./NycMap";
import { DEFAULT_PALETTE_ID, paletteById, themeFor } from "./palettes";
import { BOROUGHS, ProgressCard } from "./ProgressCard";
import { SearchPill, type Command } from "./SearchPill";
import { Toast, type ToastHandle } from "./Toast";
import { Toolbar } from "./Toolbar";
import { CARD_WIDTH, ICON, SURFACE, SURFACE_BUTTON } from "./ui";
import { ViewingBanner } from "./ViewingBanner";

const NEIGHBORHOOD_BY_ID = new Map(
  NEIGHBORHOODS.map((item) => [item.id, item]),
);

const DESKTOP_PADDING: PaddingOptions = {
  top: 56,
  right: 40,
  bottom: 40,
  left: 40,
};
const MOBILE_PADDING: PaddingOptions = {
  top: 96,
  right: 16,
  bottom: 96,
  left: 16,
};
// Kingsbridge down to Bay Ridge and Flatlands, centered east of Manhattan so
// the island sits left of center with Brooklyn and Queens filling the rest.
const DESKTOP_INITIAL_BOUNDS: Bounds = [-74.05, 40.6, -73.75, 40.88];
const STYLE_STORAGE_KEY = "nyc-neighborhood-tracker:style";

function readStyle(): MapStyleChoice {
  const fallback: MapStyleChoice = {
    paletteId: DEFAULT_PALETTE_ID,
    night: false,
  };
  try {
    const saved = JSON.parse(localStorage.getItem(STYLE_STORAGE_KEY) ?? "null");
    if (!saved) return fallback;
    return {
      paletteId: paletteById(saved.paletteId).id,
      night: saved.night === true,
    };
  } catch {
    return fallback;
  }
}

interface Selection {
  id: string;
  point: MapPoint;
  /** Set when the selection came from search, so Enter marks it. */
  focusAction?: boolean;
}

export default function NycApp() {
  const tracker = useTracker();
  const isMobile = useMediaQuery(MOBILE_QUERY);
  const hoverEnabled = useMediaQuery(HOVER_QUERY);
  const mapRef = useRef<NycMapHandle>(null);
  const rootRef = useRef<HTMLElement>(null);

  // Geometry loads in the background; the basemap and stats show immediately.
  const [geojson, setGeojson] = useState<NeighborhoodsGeoJson | null>(null);
  const [geojsonError, setGeojsonError] = useState(false);
  const [geojsonAttempt, setGeojsonAttempt] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    setGeojsonError(false);
    loadNeighborhoodsGeoJson(controller.signal)
      .then(setGeojson)
      .catch((error: unknown) => {
        if (!isAbortError(error)) setGeojsonError(true);
      });
    return () => controller.abort();
  }, [geojsonAttempt]);

  // Subway lines are fetched the first time they're switched on.
  const [showSubway, setShowSubway] = useState(false);
  const [subway, setSubway] = useState<SubwayGeoJson | null>(null);
  const [subwayLoading, setSubwayLoading] = useState(false);
  const toggleSubway = useCallback(
    (show: boolean) => {
      setShowSubway(show);
      if (!show || subway || subwayLoading) return;
      setSubwayLoading(true);
      loadSubwayGeoJson()
        .then(setSubway)
        .catch(() => setShowSubway(false))
        .finally(() => setSubwayLoading(false));
    },
    [subway, subwayLoading],
  );

  // Color and night mode. Your own choice is remembered; a shared link
  // brings the sender's choice along while you're viewing it.
  const [ownStyle, setOwnStyle] = useState(readStyle);
  useEffect(() => {
    try {
      localStorage.setItem(STYLE_STORAGE_KEY, JSON.stringify(ownStyle));
    } catch {
      // Fine.
    }
  }, [ownStyle]);
  const style: MapStyleChoice =
    tracker.shared && !tracker.compare
      ? (tracker.shared.style ?? ownStyle)
      : ownStyle;
  const palette = paletteById(style.paletteId);
  const theme = themeFor(style.night);

  // Tokens in nyc.css and the browser chrome follow night mode. A layout
  // effect so the first paint already has the right colors.
  useLayoutEffect(() => {
    const root = document.documentElement;
    root.toggleAttribute("data-nyc-night", style.night);
    let meta = document.querySelector<HTMLMetaElement>(
      'meta[name="theme-color"]',
    );
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "theme-color";
      document.head.append(meta);
    }
    meta.content = getComputedStyle(root).getPropertyValue("--nyc-page").trim();
  }, [style.night]);
  useEffect(
    () => () => document.documentElement.removeAttribute("data-nyc-night"),
    [],
  );

  const [selection, setSelection] = useState<Selection | null>(null);
  const [chipsOpen, setChipsOpen] = useState(false);
  const toastRef = useRef<ToastHandle>(null);

  const clearSelection = useCallback(() => setSelection(null), []);

  const { shareUrl } = tracker;
  const copyShareLink = useCallback(async () => {
    const copied = await copyText(shareUrl(ownStyle));
    toastRef.current?.show({
      title: copied ? "Link copied" : "Couldn’t copy the link",
      visited: copied,
    });
  }, [ownStyle, shareUrl]);

  const announce = useCallback(
    (neighborhood: Neighborhood, visited: boolean) => {
      toastRef.current?.show({ title: neighborhood.name, visited });
    },
    [],
  );

  // A borough that just hit 100% deserves a moment.
  const completedBorough = useCallback(
    (neighborhood: Neighborhood, visitedIds: ReadonlySet<string>): boolean =>
      NEIGHBORHOODS.filter(
        (item) => item.borough === neighborhood.borough,
      ).every((item) => item.id === neighborhood.id || visitedIds.has(item.id)),
    [],
  );

  const handleTap = useCallback(
    (id: string) => {
      const neighborhood = NEIGHBORHOOD_BY_ID.get(id);
      if (!neighborhood) return;
      const visited = tracker.toggle(id);
      if (visited) {
        mapRef.current?.pulse(id);
        if (completedBorough(neighborhood, tracker.own)) {
          toastRef.current?.show({
            title: `${neighborhood.borough} complete`,
            visited: true,
          });
        } else {
          announce(neighborhood, visited);
        }
      } else {
        announce(neighborhood, visited);
      }
      setSelection(null);
    },
    [announce, completedBorough, tracker],
  );

  const openDetails = useCallback((id: string, point: MapPoint) => {
    setSelection({ id, point });
  }, []);

  const pickNeighborhood = useCallback((neighborhood: Neighborhood) => {
    mapRef.current?.fitBounds(neighborhood.bbox);
    const container = rootRef.current;
    setSelection({
      id: neighborhood.id,
      point: container
        ? { x: container.clientWidth / 2, y: container.clientHeight / 2 }
        : { x: 0, y: 0 },
      focusAction: true,
    });
  }, []);

  const pickBorough = useCallback(
    (borough: Borough) => {
      mapRef.current?.fitBounds(BOROUGH_BOUNDS[borough], { maxZoom: 12 });
      setSelection(null);
      if (isMobile) setChipsOpen(false);
    },
    [isMobile],
  );

  const handleMoveStart = useCallback(() => {
    // The floating menu is anchored to a screen point; the mobile card isn't.
    if (!isMobile) setSelection(null);
  }, [isMobile]);

  const selected = selection
    ? (NEIGHBORHOOD_BY_ID.get(selection.id) ?? null)
    : null;

  const detailStatus = useCallback(
    (id: string) => ({
      mine: tracker.own.has(id),
      theirs: tracker.shared ? tracker.shared.visitedIds.has(id) : null,
      theirName: tracker.shared?.name ?? null,
      compare: tracker.compare,
    }),
    [tracker.compare, tracker.own, tracker.shared],
  );

  const padding = useMemo(
    () => (isMobile ? MOBILE_PADDING : DESKTOP_PADDING),
    [isMobile],
  );

  // Actions for the search palette.
  const commands = useMemo<Command[]>(() => {
    const list: Command[] = [
      {
        id: "subway",
        label: showSubway ? "Hide subway lines" : "Show subway lines",
        keywords: "train mta transit",
        icon: MtaLogo,
        detail: showSubway ? "On" : undefined,
        run: () => toggleSubway(!showSubway),
      },
      ...BOROUGHS.map<Command>((borough) => ({
        id: `zoom-${borough}`,
        label: `Zoom to ${borough}`,
        keywords: "go fly borough",
        icon: ZoomIn,
        run: () => pickBorough(borough),
      })),
      {
        id: "city",
        label: "Show the whole city",
        keywords: "zoom out reset all boroughs",
        icon: MapIcon,
        run: () => mapRef.current?.fitBounds(NYC_BOUNDS, { maxZoom: 11 }),
      },
      {
        id: "share",
        label: tracker.canEdit ? "Copy a link to my map" : "Copy a link to my own map",
        keywords: "link copy send",
        icon: Share,
        run: () => void copyShareLink(),
      },
    ];
    if (tracker.canEdit && tracker.own.size > 0) {
      list.push({
        id: "clear",
        label: "Clear my map",
        keywords: "reset delete start over",
        icon: Eraser,
        confirm: `Clear all ${tracker.own.size}? Press Enter again`,
        run: tracker.clearOwn,
      });
    }
    return list;
  }, [
    copyShareLink,
    pickBorough,
    showSubway,
    toggleSubway,
    tracker.canEdit,
    tracker.clearOwn,
    tracker.own.size,
  ]);

  const detail = selected && (
    <NeighborhoodDetail
      key={selected.id}
      neighborhood={selected}
      status={detailStatus(selected.id)}
      canEdit={tracker.canEdit}
      onSetVisited={(visited) => {
        tracker.setVisited(selected.id, visited);
        if (visited) mapRef.current?.pulse(selected.id);
        announce(selected, visited);
        // Close so focus returns to wherever it came from, usually search.
        setSelection(null);
      }}
      onClose={clearSelection}
      variant={isMobile ? "sheet" : "floating"}
      point={selection?.point}
      focusAction={selection?.focusAction}
      container={
        rootRef.current
          ? {
              width: rootRef.current.clientWidth,
              height: rootRef.current.clientHeight,
            }
          : undefined
      }
    />
  );

  // Sharing is just a link: copy it and confirm with a toast. Phones keep
  // the larger touch target.
  const shareLabel = tracker.canEdit ? "Copy a link to your map" : "Copy a link to your own map";
  const shareButton = (
    <button
      type="button"
      className={`${SURFACE_BUTTON} grid ${isMobile ? "size-10" : "size-9"} place-items-center rounded-full text-nyc-ink-2 hover:text-nyc-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nyc-ink-2`}
      aria-label={shareLabel}
      title={shareLabel}
      onClick={() => void copyShareLink()}
    >
      <Share size={16} {...ICON} aria-hidden="true" />
    </button>
  );

  const toolbar = (
    <Toolbar
      showSubway={showSubway}
      subwayLoading={subwayLoading}
      onShowSubwayChange={toggleSubway}
      paletteId={style.paletteId}
      onPaletteChange={(paletteId) =>
        setOwnStyle((current) => ({ ...current, paletteId }))
      }
      night={style.night}
      onNightChange={(night) =>
        setOwnStyle((current) => ({ ...current, night }))
      }
      styleLocked={tracker.shared !== null && !tracker.compare}
      popoverAlign={isMobile ? "end" : "start"}
    />
  );

  const viewingBanner = tracker.shared && (
    <ViewingBanner
      name={tracker.shared.name}
      ownCount={tracker.own.size}
      compare={tracker.compare}
      onCompareChange={tracker.setCompare}
      onSave={(strategy) => {
        tracker.saveShared(strategy);
        setSelection(null);
      }}
      onExit={() => {
        tracker.exitViewing();
        setSelection(null);
      }}
    />
  );

  return (
    <main
      ref={rootRef}
      className="fixed inset-0 z-0 overflow-hidden bg-nyc-page font-sans"
      style={
        {
          height: "100dvh",
          "--nyc-primary": palette.visited,
          "--nyc-theirs": palette.theirs,
          "--nyc-both": palette.both,
        } as React.CSSProperties
      }
    >
      <NycMap
        ref={mapRef}
        neighborhoods={geojson}
        subwayLines={subway}
        showSubway={showSubway}
        visitedIds={tracker.visitedIds}
        compareIds={tracker.compareIds}
        selectedId={selection?.id ?? null}
        canEdit={tracker.canEdit}
        hoverEnabled={hoverEnabled}
        padding={padding}
        initialBounds={isMobile ? NYC_BOUNDS : DESKTOP_INITIAL_BOUNDS}
        palette={palette}
        theme={theme}
        onTap={handleTap}
        onOpenDetails={openDetails}
        onBackgroundTap={clearSelection}
        onMoveStart={handleMoveStart}
      />

      {/* Top-left: progress lockup, then the hint and viewing banner. */}
      <div className="pointer-events-none absolute top-[calc(1rem+env(safe-area-inset-top))] left-[calc(1rem+env(safe-area-inset-left))] z-30 flex max-w-[calc(100%-9rem)] flex-col items-start gap-2">
        <div className="pointer-events-auto">
          <ProgressCard
            visitedIds={tracker.visitedIds}
            compareIds={tracker.compareIds}
            onPickBorough={pickBorough}
            compact={isMobile}
            expanded={chipsOpen}
            onExpandedChange={setChipsOpen}
          />
        </div>
        {!isMobile && viewingBanner && (
          <div className={`pointer-events-auto ${CARD_WIDTH}`}>{viewingBanner}</div>
        )}
      </div>

      {/* Top-right: search (expands from an icon) and share. */}
      <div className="absolute top-[calc(1rem+env(safe-area-inset-top))] right-[calc(1rem+env(safe-area-inset-right))] z-30 flex items-center gap-2">
        {!isMobile && (
          <SearchPill
            visitedIds={tracker.visitedIds}
            onPick={pickNeighborhood}
            commands={commands}
            compact={false}
            collapsible
          />
        )}
        {shareButton}
      </div>

      {/* Bottom-left: toolbar on desktop. The zoom control is bottom-right. */}
      {!isMobile && (
        <div className="absolute bottom-[calc(1rem+env(safe-area-inset-bottom))] left-[calc(1rem+env(safe-area-inset-left))] z-30">
          {toolbar}
        </div>
      )}

      {/* Mobile: bottom bar with search and toolbar, in thumb reach. */}
      {isMobile && (
        <div className="absolute inset-x-3 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-30 flex flex-col gap-3">
          {viewingBanner}
          {detail}
          <div className="flex items-center gap-2">
            <div className="min-w-0 flex-1">
              <SearchPill
                visitedIds={tracker.visitedIds}
                onPick={pickNeighborhood}
                commands={commands}
                compact
                openDirection="up"
              />
            </div>
            {toolbar}
          </div>
        </div>
      )}

      {geojsonError && (
        <div
          className="absolute inset-x-0 top-[calc(4.5rem+env(safe-area-inset-top))] z-30 flex justify-center px-3"
          role="alert"
        >
          <div
            className={`${SURFACE} flex items-center gap-3 rounded-full py-1.5 pr-1.5 pl-3.5 text-sm text-red-800`}
          >
            The neighborhood shapes didn’t load.
            <button
              type="button"
              className="inline-flex h-7 cursor-pointer items-center gap-1 rounded-full bg-red-700 px-2.5 text-xs font-medium text-white hover:bg-red-800"
              onClick={() => setGeojsonAttempt((attempt) => attempt + 1)}
            >
              <RefreshCw size={12} {...ICON} aria-hidden="true" />
              Retry
            </button>
          </div>
        </div>
      )}

      {!isMobile && detail}

      <Toast ref={toastRef} bottomOffset={isMobile ? 76 : 24} />

    </main>
  );
}
