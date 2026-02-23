"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";
import BottomNav from "@/components/BottomNav";
import {
  IconStar,
  IconGitFork,
  IconUsers,
  IconTag,
  IconCalendar,
} from "@tabler/icons-react";

interface StarEntry {
  date: string; // "YYYY-MM"
  count: number;
}

interface Contributor {
  login: string;
  contributions: number;
  avatar: string;
  url: string;
}

interface StatsData {
  stars: number;
  forks: number;
  openIssues: number;
  createdAt: string;
  releaseCount: number;
  starHistory: StarEntry[];
  contributors: Contributor[];
  fetchedAt: string;
}

function formatNum(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  return n.toLocaleString();
}

function smoothLine(pts: [number, number][]): string {
  if (pts.length < 2) return "";
  return pts.reduce((d, [x, y], i) => {
    if (i === 0) return `M${x},${y}`;
    const [px, py] = pts[i - 1];
    const cx = (px + x) / 2;
    return `${d} C${cx},${py} ${cx},${y} ${x},${y}`;
  }, "");
}

type HoverPoint = {
  x: number;
  y: number;
  date: string;
  count: number;
} | null;

function StarChart({
  data,
  isDarkText,
}: {
  data: StarEntry[];
  isDarkText: boolean;
}) {
  const [hovered, setHovered] = useState<HoverPoint>(null);

  // PL = left padding reserved for Y-axis labels
  const W = 880,
    H = 480,
    PL = 52,
    PY = 16,
    PB = 32;
  const CW = W - PL; // chart drawing width

  if (data.length < 2) return null;

  // Support both YYYY-MM-DD (daily) and YYYY-MM (monthly) date formats
  const parseDate = (d: string) =>
    new Date(d.length === 7 ? d + "-01" : d).getTime();

  const times = data.map((d) => parseDate(d.date));
  const tMin = times[0];
  const tMax = times[times.length - 1];
  const cMax = data[data.length - 1].count;

  if (tMin === tMax) return null;

  const toX = (t: number) => PL + ((t - tMin) / (tMax - tMin)) * CW;
  const toY = (c: number) => PY + (1 - c / cMax) * (H - PY - PB);

  const pts: [number, number][] = data.map((d, i) => [
    toX(times[i]),
    toY(d.count),
  ]);

  const line = smoothLine(pts);
  const lastPt = pts[pts.length - 1];
  const area = `${line} L${lastPt[0]},${H - PB} L${PL},${H - PB} Z`;

  // Y-axis: pick ~5 nice round tick values
  const niceYTicks = (max: number): number[] => {
    if (max === 0) return [0];
    const rough = max / 5;
    const mag = Math.pow(10, Math.floor(Math.log10(rough)));
    const norm = rough / mag;
    const nice = norm <= 1.5 ? 1 : norm <= 3 ? 2 : norm <= 7 ? 5 : 10;
    const step = Math.max(1, nice * mag);
    const ticks: number[] = [];
    for (let v = 0; v <= max; v += step) ticks.push(v);
    return ticks;
  };
  const yTicks = niceYTicks(cMax);

  // Adaptive X-axis labels with full date context
  const rangeDays = (tMax - tMin) / 86400000;
  const MONTH_NAMES = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const xLabels: { label: string; x: number }[] = [];
  if (rangeDays <= 30) {
    // Short range: every few days — "Feb 9", "Feb 12", ...
    const intervalDays = rangeDays <= 7 ? 1 : rangeDays <= 14 ? 3 : 5;
    const startDate = new Date(tMin);
    startDate.setHours(0, 0, 0, 0);
    for (let t = startDate.getTime(); t <= tMax; t += intervalDays * 86400000) {
      const d = new Date(t);
      xLabels.push({
        label: `${MONTH_NAMES[d.getMonth()]} ${d.getDate()}`,
        x: toX(t),
      });
    }
  } else if (rangeDays < 365) {
    // Medium range: monthly with year — "Feb '26"
    const start = new Date(tMin);
    for (let yr = start.getFullYear(), mo = start.getMonth(); ; mo++) {
      if (mo > 11) {
        mo = 0;
        yr++;
      }
      const t = new Date(yr, mo, 1).getTime();
      if (t > tMax) break;
      if (t >= tMin)
        xLabels.push({
          label: `${MONTH_NAMES[mo]} '${String(yr).slice(2)}`,
          x: toX(t),
        });
    }
  } else {
    // Long range: year labels — "2024", "2025"
    const seenYears = new Set<number>();
    for (let i = 0; i < data.length; i++) {
      const yr = new Date(times[i]).getFullYear();
      if (!seenYears.has(yr)) {
        seenYears.add(yr);
        xLabels.push({ label: String(yr), x: toX(times[i]) });
      }
    }
  }

  const textFill = isDarkText ? "rgba(12,10,9,0.5)" : "rgba(250,250,249,0.5)";
  const gridStroke = isDarkText
    ? "rgba(12,10,9,0.07)"
    : "rgba(250,250,249,0.07)";
  const TOOLTIP_W = 160;

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = ((e.clientX - rect.left) / rect.width) * W;

    let nearestIdx = 0;
    let nearestDist = Infinity;
    pts.forEach(([px], i) => {
      const dist = Math.abs(px - mouseX);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearestIdx = i;
      }
    });

    setHovered({
      x: pts[nearestIdx][0],
      y: pts[nearestIdx][1],
      date: data[nearestIdx].date,
      count: data[nearestIdx].count,
    });
  };

  const formatDate = (d: string) => {
    const [y, m, day] = d.split("-");
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return day
      ? `${months[parseInt(m) - 1]} ${parseInt(day)}, ${y}`
      : `${months[parseInt(m) - 1]} ${y}`;
  };

  const tooltipX = hovered
    ? Math.max(TOOLTIP_W / 2 + PL, Math.min(W - TOOLTIP_W / 2 - 4, hovered.x))
    : 0;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full cursor-crosshair"
      style={{ overflow: "visible" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHovered(null)}
    >
      <defs>
        <linearGradient id="starAreaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Y-axis: horizontal grid lines + labels */}
      {yTicks.map((v) => {
        const y = toY(v);
        return (
          <g key={v}>
            <line
              x1={PL}
              y1={y}
              x2={W}
              y2={y}
              stroke={gridStroke}
              strokeWidth="1"
              strokeDasharray="3 3"
            />
            <text
              x={PL - 8}
              y={y + 4}
              textAnchor="end"
              fontSize="13"
              fill={textFill}
              fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
            >
              {formatNum(v)}
            </text>
          </g>
        );
      })}

      {/* X-axis: vertical tick lines (only within chart area) */}
      {xLabels
        .filter(({ x }) => x >= PL)
        .map(({ label, x }) => (
          <line
            key={label}
            x1={x}
            y1={PY}
            x2={x}
            y2={H - PB}
            stroke={gridStroke}
            strokeWidth="1"
            strokeDasharray="3 3"
          />
        ))}

      {/* Area fill */}
      <path d={area} fill="url(#starAreaGrad)" />

      {/* Line */}
      <path
        d={line}
        fill="none"
        stroke="currentColor"
        strokeOpacity="1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* End dot */}
      <circle
        cx={lastPt[0]}
        cy={lastPt[1]}
        r="4"
        fill="currentColor"
        opacity="1"
      />

      {/* Hover crosshair + tooltip */}
      {hovered && (
        <>
          <line
            x1={hovered.x}
            y1={PY}
            x2={hovered.x}
            y2={H - PB}
            stroke="currentColor"
            strokeOpacity="0.18"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          <circle
            cx={hovered.x}
            cy={hovered.y}
            r="4"
            fill="currentColor"
            opacity="0.75"
          />
          <g
            transform={`translate(${tooltipX}, ${Math.max(PY + 2, hovered.y - 38)})`}
          >
            <rect
              x={-TOOLTIP_W / 2}
              y={0}
              width={TOOLTIP_W}
              height={24}
              rx="5"
              fill="currentColor"
              opacity="0.07"
            />
            <text
              x={0}
              y={16}
              textAnchor="middle"
              fontSize="13"
              fill="currentColor"
              opacity="0.75"
              fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
            >
              {formatDate(hovered.date)} · {hovered.count.toLocaleString()} ★
            </text>
          </g>
        </>
      )}

      {/* X-axis labels (only within chart area) */}
      {xLabels
        .filter(({ x }) => x >= PL)
        .map(({ label, x }) => (
          <text
            key={label}
            x={Math.max(PL + 12, Math.min(W - 12, x))}
            y={H - 8}
            textAnchor="middle"
            fontSize="13"
            fill={textFill}
            fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
          >
            {label}
          </text>
        ))}
    </svg>
  );
}

export default function ScratchStatsPage() {
  const {
    getTextColorClass,
    isHydrated,
    shouldUseDarkText,
    getLinkColorClass,
  } = useTheme();

  const [stats, setStats] = useState<StatsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/github-stats")
      .then((res) => res.json())
      .then((data: StatsData) => {
        setStats(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (!isHydrated) {
    return <main className="min-h-screen" />;
  }

  const mutedClass = shouldUseDarkText()
    ? "text-stone-950/50"
    : "text-white/50";
  const skeletonClass = shouldUseDarkText() ? "bg-stone-950/5" : "bg-white/5";

  const timeAgo = (iso: string) => {
    const diffMs = Date.now() - new Date(iso).getTime();
    const diffH = Math.floor(diffMs / (60 * 60 * 1000));
    const diffM = Math.floor(diffMs / (60 * 1000));
    if (diffH > 0) return `${diffH}h ago`;
    if (diffM > 0) return `${diffM}m ago`;
    return "just now";
  };

  return (
    <main
      className={`min-h-screen overflow-x-hidden font-system-sans transition-colors duration-200 ${getTextColorClass()}`}
    >
      <Link
        href="/scratch"
        className={`fixed top-3 sm:top-4 left-2 sm:left-3 text-sm animate-fadeInBack opacity-0 z-10 px-3 py-2 bg-white/0 backdrop-blur-md rounded-full ${
          shouldUseDarkText()
            ? "text-stone-950/60 hover:bg-stone-950/5 focus-visible:outline-none focus-visible:ring-stone-950/20 focus-visible:ring-2"
            : "text-white/60 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-white/40 focus-visible:ring-2"
        } transition-colors`}
      >
        ← Scratch
      </Link>

      <div className="min-h-screen flex flex-col items-center justify-start pt-24 sm:pt-28 pb-24">
        {/* Title */}
        <div className="max-w-3xl w-full flex flex-col items-center text-center px-8 animate-fadeInHome1 opacity-0 mb-12 sm:mb-16">
          <h1 className="font-besley text-4xl xs:text-5xl font-regular tracking-[-0.01em] mb-3">
            GitHub Stats
          </h1>
          <a
            href="https://github.com/erictli/scratch"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm border-b border-dashed pb-0.5 transition-opacity hover:opacity-60 ${getLinkColorClass()} ${mutedClass}`}
          >
            erictli/scratch ↗
          </a>
        </div>
        <div className="max-w-4xl w-full px-6 flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/scratch/scratch-icon.png"
              alt="Scratch app icon"
              width={64}
              height={64}
              className="h-12 w-12"
            />
            <h1 className="text-[28px] font-besley tracking-[-0.01em] text-left mb-1">
              erictli/scratch
            </h1>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <IconStar className="w-[21px] h-[21px]" fill="currentColor" />
              <span className="text-4xl font-besley tracking-[-0.01em]">
                {formatNum(stats?.stars || 0)}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <IconGitFork className="w-6 h-6" />
              <span className="text-4xl font-besley tracking-[-0.01em]">
                {formatNum(stats?.forks || 0)}
              </span>
            </div>
            {/* <div className="flex items-center gap-1">
              <IconTag className="w-6 h-6" />
              <span className="text-4xl font-besley tracking-[-0.01em]">
                {stats?.releaseCount || 0}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <IconUsers className="w-6 h-6" />
              <span className="text-4xl font-besley tracking-[-0.01em]">
                {stats?.contributors.length || 0}
              </span>
            </div> */}
          </div>
        </div>
        <div className="w-full max-w-4xl flex mb-6">
          {/* Stats row
          <div className="px-6 animate-fadeInHome1 opacity-0">
            {loading ? (
              <div className="flex flex-wrap gap-8 sm:gap-12 justify-center">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div
                      className={`h-10 w-16 rounded-lg animate-pulse ${skeletonClass}`}
                    />
                    <div
                      className={`h-3 w-10 rounded animate-pulse ${skeletonClass}`}
                    />
                  </div>
                ))}
              </div>
            ) : stats ? (
              <div className="flex flex-col gap-8 justify-center">
                <div className="flex flex-col gap-0.5">
                  <div className={`text-[15px] font-medium opacity-60`}>
                    Stars
                  </div>
                  <div
                    className={`flex items-center gap-1.5 text-3xl sm:text-[40px] font-besley tracking-[-0.01em]`}
                  >
                    {formatNum(stats.stars)}
                  </div>
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className={`text-[15px] font-medium opacity-60`}>
                    Forks
                  </div>
                  <div
                    className={`flex items-center gap-1.5 text-3xl sm:text-[40px] font-besley tracking-[-0.01em]`}
                  >
                    {formatNum(stats.forks)}
                  </div>
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className={`text-[15px] font-medium opacity-60`}>
                    Releases
                  </div>
                  <div
                    className={`flex items-center gap-1.5 text-3xl sm:text-[40px] font-besley tracking-[-0.01em]`}
                  >
                    {stats.releaseCount}
                  </div>
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className={`text-[15px] font-medium opacity-60`}>
                    Days old
                  </div>
                  <div
                    className={`flex items-center gap-1.5 text-3xl sm:text-[40px] font-besley tracking-[-0.01em]`}
                  >
                    {Math.floor(
                      (Date.now() - new Date(stats.createdAt).getTime()) /
                        86400000,
                    )}
                  </div>
                </div>
              </div>
            ) : null}
          </div> */}
          {/* Chart */}
          <div className="w-full flex-1 px-6 animate-fadeInHome2 opacity-0 -ml-5">
            {loading ? (
              <div
                className={`w-full rounded-xl animate-pulse ${skeletonClass}`}
                style={{ aspectRatio: "800/480" }}
              />
            ) : stats && stats.starHistory.length >= 2 ? (
              <StarChart
                data={stats.starHistory}
                isDarkText={shouldUseDarkText()}
              />
            ) : (
              <div className={`text-sm py-10 text-center ${mutedClass}`}>
                No data available
              </div>
            )}
            {/* Contributors */}
            {!loading && stats && stats.contributors.length > 0 && (
              <div className="absolute bottom-12 right-10">
                <div className="flex flex-wrap gap-1.5">
                  {stats.contributors.map((c) => (
                    <a
                      key={c.login}
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`@${c.login}`}
                      className="hover:opacity-60 transition-opacity"
                    >
                      <Image
                        src={c.avatar}
                        alt={c.login}
                        width={32}
                        height={32}
                        className="rounded-lg"
                        unoptimized
                      />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contributors */}
        {/* {!loading && stats && stats.contributors.length > 0 && (
          <div className="max-w-4xl w-full px-6 mb-16 sm:mb-20 animate-fadeInHome2 opacity-0">
            <div className="flex flex-wrap gap-2">
              {stats.contributors.map((c) => (
                <a
                  key={c.login}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`@${c.login}`}
                  className="hover:opacity-60 transition-opacity"
                >
                  <Image
                    src={c.avatar}
                    alt={c.login}
                    width={32}
                    height={32}
                    className="rounded-full"
                    unoptimized
                  />
                </a>
              ))}
            </div>
          </div>
        )} */}
      </div>

      <BottomNav />
    </main>
  );
}
