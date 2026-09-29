"use client";

import { useId } from "react";
import {
  METERS_PER_MILE,
  MS_TO_MPH,
  atPierMinutes,
  compassPoint,
  describeWind,
  formatPierTime,
  pierMinutes,
  sunTimes,
  type WaterConditions,
} from "@/lib/water/conditions";

export type ConditionField = "time" | "wind" | "direction" | "gusts" | "cloud" | "precipitation" | "visibility";
const ALL_FIELDS: ConditionField[] = ["time", "wind", "direction", "gusts", "cloud", "precipitation", "visibility"];

interface Props {
  className?: string;
  conditions: WaterConditions;
  onChange: (patch: Partial<WaterConditions>) => void;
  /** Which controls to show; everything by default. */
  fields?: ConditionField[];
}

const RANGE =
  "h-5 w-full cursor-pointer appearance-none bg-transparent focus-visible:outline-none " +
  "[&::-webkit-slider-runnable-track]:h-[3px] [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-white/20 " +
  "[&::-webkit-slider-thumb]:-mt-[6.5px] [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_1px_4px_rgb(0_0_0/0.4)] " +
  "[&::-moz-range-track]:h-[3px] [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-white/20 " +
  "[&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-white " +
  "focus-visible:[&::-webkit-slider-thumb]:ring-2 focus-visible:[&::-webkit-slider-thumb]:ring-white/60";

function Row({
  label,
  value,
  children,
  htmlFor,
}: {
  label: string;
  value: React.ReactNode;
  children: React.ReactNode;
  htmlFor: string;
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex items-baseline justify-between gap-3 text-[12px]">
        <label htmlFor={htmlFor} className="text-white/55">
          {label}
        </label>
        <span className="text-white/90 tabular-nums">{value}</span>
      </div>
      {children}
    </div>
  );
}

function Segmented<T extends string>({
  options,
  value,
  onChange,
  label,
}: {
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
  label: string;
}) {
  return (
    <div role="radiogroup" aria-label={label} className="flex rounded-full bg-white/10 p-0.5 text-[12px]">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          role="radio"
          aria-checked={value === o.value}
          onClick={() => onChange(o.value)}
          className={`h-6 flex-1 cursor-pointer rounded-full px-2.5 transition-colors ${
            value === o.value ? "bg-white text-black" : "text-white/70 hover:text-white"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

function describeRate(mmh: number) {
  if (mmh < 0.05) return "None";
  if (mmh < 1) return "Light";
  if (mmh < 5) return "Moderate";
  if (mmh < 12) return "Heavy";
  return "Downpour";
}

export function ConditionsPanel({ className = "", conditions: c, onChange, fields = ALL_FIELDS }: Props) {
  const id = useId();
  const has = (f: ConditionField) => fields.includes(f);
  const minutes = Math.round(pierMinutes(c.time));
  const times = sunTimes(c.time);
  const sunrise = times.sunrise ? pierMinutes(times.sunrise) : NaN;
  const sunset = times.sunset ? pierMinutes(times.sunset) : NaN;
  const mph = Math.round(c.windSpeed * MS_TO_MPH);
  const gustMph = Math.round(c.windGusts * MS_TO_MPH);
  const miles = c.visibility / METERS_PER_MILE;

  return (
    <section
      aria-label="Adjust conditions"
      className={`max-h-[min(34rem,calc(100dvh-10rem))] overflow-y-auto p-4 [scrollbar-width:thin] ${className}`}
    >
      <div className="flex flex-col gap-3.5">
        {has("time") && <Row label="Time" value={formatPierTime(c.time)} htmlFor={`${id}-time`}>
          <div className="relative">
            <input
              id={`${id}-time`}
              type="range"
              min={0}
              max={1439}
              step={5}
              value={minutes}
              onChange={(e) => onChange({ time: atPierMinutes(c.time, Number(e.target.value)) })}
              className={RANGE}
            />
            {[sunrise, sunset].map((m, i) =>
              Number.isFinite(m) ? (
                <span
                  key={i}
                  aria-hidden
                  className="pointer-events-none absolute top-1/2 h-2 w-px -translate-y-1/2 bg-amber-300/70"
                  style={{ left: `calc(${(m / 1439) * 100}% + ${8 - (m / 1439) * 16}px)` }}
                />
              ) : null,
            )}
          </div>
        </Row>}

        {has("wind") && <Row label="Wind" value={`${mph} mph · ${describeWind(c.windSpeed)}`} htmlFor={`${id}-wind`}>
          <input
            id={`${id}-wind`}
            type="range"
            min={0}
            max={45}
            step={1}
            value={mph}
            onChange={(e) => {
              const speed = Number(e.target.value) / MS_TO_MPH;
              onChange({ windSpeed: speed, windGusts: Math.max(c.windGusts, speed) });
            }}
            className={RANGE}
          />
        </Row>}

        {has("direction") && <Row
          label="From"
          value={
            <span className="inline-flex items-center gap-1.5">
              <svg
                viewBox="0 0 12 12"
                className="size-3"
                style={{ transform: `rotate(${c.windDirection + 180}deg)` }}
                aria-hidden
              >
                <path d="M6 1.5 9 9 6 7.4 3 9Z" fill="currentColor" />
              </svg>
              {compassPoint(c.windDirection)} {Math.round(c.windDirection)}°
            </span>
          }
          htmlFor={`${id}-dir`}
        >
          <input
            id={`${id}-dir`}
            type="range"
            min={0}
            max={355}
            step={5}
            value={Math.round(c.windDirection / 5) * 5}
            onChange={(e) => onChange({ windDirection: Number(e.target.value) })}
            className={RANGE}
          />
        </Row>}

        {has("gusts") && <Row label="Gusts" value={`${gustMph} mph`} htmlFor={`${id}-gust`}>
          <input
            id={`${id}-gust`}
            type="range"
            min={0}
            max={60}
            step={1}
            value={gustMph}
            onChange={(e) => onChange({ windGusts: Math.max(Number(e.target.value) / MS_TO_MPH, c.windSpeed) })}
            className={RANGE}
          />
        </Row>}

        {has("cloud") && <Row label="Cloud cover" value={`${Math.round(c.cloudCover)}%`} htmlFor={`${id}-cloud`}>
          <input
            id={`${id}-cloud`}
            type="range"
            min={0}
            max={100}
            step={1}
            value={Math.round(c.cloudCover)}
            onChange={(e) => onChange({ cloudCover: Number(e.target.value) })}
            className={RANGE}
          />
        </Row>}

        {has("precipitation") && <Row
          label="Precipitation"
          value={`${describeRate(c.precipitation)}${c.precipitation >= 0.05 ? ` · ${c.precipitation.toFixed(1)} mm/h` : ""}`}
          htmlFor={`${id}-precip`}
        >
          <input
            id={`${id}-precip`}
            type="range"
            min={0}
            max={16}
            step={0.1}
            value={c.precipitation}
            onChange={(e) => onChange({ precipitation: Number(e.target.value) })}
            className={RANGE}
          />
        </Row>}

        {has("precipitation") && <div className="flex gap-2">
          <Segmented
            label="Precipitation type"
            value={c.precipitationType}
            onChange={(v) => onChange({ precipitationType: v })}
            options={[
              { value: "rain", label: "Rain" },
              { value: "snow", label: "Snow" },
            ]}
          />
          <Segmented
            label="Thunder"
            value={c.thunderstorm ? "on" : "off"}
            onChange={(v) => onChange({ thunderstorm: v === "on" })}
            options={[
              { value: "off", label: "Calm" },
              { value: "on", label: "Thunder" },
            ]}
          />
        </div>}

        {has("visibility") && <Row
          label="Visibility"
          value={miles >= 10 ? "10+ mi" : `${miles < 1 ? miles.toFixed(2) : miles.toFixed(1)} mi`}
          htmlFor={`${id}-vis`}
        >
          <input
            id={`${id}-vis`}
            type="range"
            min={0}
            max={100}
            step={1}
            // Logarithmic: fog and haze live in the bottom of the range.
            value={Math.round((Math.log(c.visibility / 200) / Math.log(30000 / 200)) * 100)}
            onChange={(e) => onChange({ visibility: 200 * Math.pow(30000 / 200, Number(e.target.value) / 100) })}
            className={RANGE}
          />
        </Row>}
      </div>
    </section>
  );
}
