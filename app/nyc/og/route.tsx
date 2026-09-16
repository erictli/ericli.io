import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import { NEIGHBORHOODS } from "@/lib/nyc/generated/neighborhoods";
import { OG_HEIGHT, OG_PATHS, OG_WIDTH } from "@/lib/nyc/generated/og-paths";
import { paletteById } from "@/components/nyc/palettes";
import {
  MAP_PARAM,
  NAME_PARAM,
  decodeVisitedState,
  readStyleParams,
  sanitizeName,
} from "@/lib/nyc/url-state";

const LIGHT = {
  background: "#E3EEF7",
  unvisited: "#F7F6F3",
  outline: "#C9C6C0",
  card: "rgba(255,255,255,0.94)",
  text: "#111111",
  muted: "#6B6E73",
};
const DARK = {
  background: "#0D1117",
  unvisited: "#262A31",
  outline: "#3B4049",
  card: "rgba(31,34,38,0.94)",
  text: "#F5F5F4",
  muted: "#A8A29E",
};

/**
 * Social preview for a share link. The visited set is decoded from the same
 * `map` param the page uses, so the image needs no storage either.
 */
export function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const encoded = searchParams.get(MAP_PARAM);
  const visited = encoded ? decodeVisitedState(encoded) : null;
  const name = sanitizeName(searchParams.get(NAME_PARAM));
  const style = readStyleParams(searchParams);
  const palette = paletteById(style?.paletteId);
  const COLORS = { ...(style?.night ? DARK : LIGHT), visited: palette.visited };

  const count = visited?.size ?? 0;
  const total = NEIGHBORHOODS.length;
  const percent = Math.round((count / total) * 100);
  const title = visited
    ? `${name ? `${name}’s` : "A"} NYC neighborhood map`
    : "NYC neighborhood map";

  return new ImageResponse(
    (
      <div
        style={{
          width: OG_WIDTH,
          height: OG_HEIGHT,
          display: "flex",
          background: COLORS.background,
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <svg
          width={OG_WIDTH}
          height={OG_HEIGHT}
          viewBox={`0 0 ${OG_WIDTH} ${OG_HEIGHT}`}
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          {NEIGHBORHOODS.map(({ id }) => (
            <path
              key={id}
              d={OG_PATHS[id]}
              fill={visited?.has(id) ? COLORS.visited : COLORS.unvisited}
              stroke={visited?.has(id) ? (style?.night ? "#0D1117" : "#FFFFFF") : COLORS.outline}
              strokeWidth={visited?.has(id) ? 1.5 : 1}
              strokeLinejoin="round"
            />
          ))}
        </svg>
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            display: "flex",
            flexDirection: "column",
            padding: "26px 30px",
            borderRadius: 24,
            background: COLORS.card,
            boxShadow: "0 12px 40px rgba(0,0,0,0.18)",
            maxWidth: 520,
          }}
        >
          <div
            style={{
              fontSize: 26,
              color: COLORS.muted,
              letterSpacing: 0.5,
              display: "flex",
            }}
          >
            {title}
          </div>
          {visited ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <div
                style={{
                  fontSize: 92,
                  fontWeight: 700,
                  color: COLORS.text,
                  lineHeight: 1,
                  display: "flex",
                }}
              >
                {count}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 18,
                  color: COLORS.muted,
                }}
              >
                <div style={{ fontSize: 30, display: "flex", whiteSpace: "nowrap" }}>
                  of {total} neighborhoods
                </div>
                <div style={{ fontSize: 24, display: "flex", marginTop: 2 }}>
                  {percent}% of the city
                </div>
              </div>
            </div>
          ) : (
            <div
              style={{
                fontSize: 44,
                fontWeight: 700,
                color: COLORS.text,
                marginTop: 6,
                lineHeight: 1.15,
                display: "flex",
              }}
            >
              Which NYC neighborhoods have you been to?
            </div>
          )}
          <div
            style={{
              marginTop: 18,
              fontSize: 22,
              color: COLORS.muted,
              display: "flex",
            }}
          >
            ericli.io/nyc
          </div>
        </div>
      </div>
    ),
    {
      width: OG_WIDTH,
      height: OG_HEIGHT,
      headers: {
        "Cache-Control": "public, max-age=86400, s-maxage=86400",
      },
    },
  );
}
