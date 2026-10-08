"use client";

import * as Select from "@radix-ui/react-select";
import { useMarathon, useMarathonStore } from "./store";

const LABEL = "Finish time of the runner to follow";

/**
 * The finish-time menu: an inline pill that sits right against the next character (the
 * sentence's own size, medium weight, a subtle fill and a chevron), opening a list of finish
 * times. Every copy of it in the story shows the same value; choosing one sets the store's
 * cohort, and the client module follows that runner.
 */
export default function FinishTimeSelect() {
  const store = useMarathonStore();
  const cohort = useMarathon((s) => s.cohort);
  const labels = useMarathon((s) => s.cohortLabels);
  const label = labels[cohort] ?? "";
  return (
    <Select.Root value={String(cohort)} onValueChange={(v) => store.set({ cohort: Number(v) })}>
      <Select.Trigger
        aria-label={`${LABEL}: ${label}`}
        className={[
          "relative m-0 inline-flex cursor-pointer items-center gap-0.5 rounded-md bg-marathon-pill px-1.5 py-px align-baseline",
          "leading-[inherit] font-medium text-marathon-ink tabular-nums [-webkit-tap-highlight-color:transparent]",
          "hover:bg-marathon-pill-hover data-[state=open]:bg-marathon-pill-hover",
          "focus-visible:bg-marathon-pill-hover focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-marathon-ink-3",
          // a bigger hit area than the pill, bigger still for fingers
          "before:absolute before:-inset-x-0.5 before:-inset-y-1.5",
          "max-[900px]:before:-inset-x-1 max-[900px]:before:-inset-y-2.5 pointer-coarse:before:-inset-x-1 pointer-coarse:before:-inset-y-2.5",
        ].join(" ")}
      >
        <Select.Value>{label}</Select.Value>
        <Select.Icon asChild>
          <svg className="mt-px -mr-0.5 flex-none text-marathon-ink-3" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            <path d="m6 9 6 6 6-6" strokeWidth="1.5" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          position="popper"
          side="bottom"
          align="start"
          sideOffset={4}
          collisionPadding={8}
          aria-label={LABEL}
          className={[
            "z-1000 max-h-[min(420px,calc(100vh-16px))] min-w-[max(120px,var(--radix-select-trigger-width))] overflow-hidden",
            "rounded-lg border border-marathon-surface-border bg-marathon-surface p-1 shadow-marathon-menu outline-none",
            "font-sans text-[13px] font-normal text-marathon-ink",
            "origin-(--radix-select-content-transform-origin) data-[state=open]:animate-marathon-menu-in motion-reduce:animate-none",
          ].join(" ")}
        >
          <Select.Viewport>
            {labels.map((l, i) => (
              <Select.Item
                key={l}
                value={String(i)}
                className="flex cursor-pointer items-center gap-1.5 rounded px-2 py-1.5 leading-[1.3] tabular-nums outline-none select-none data-highlighted:bg-marathon-option-hover max-[900px]:min-h-9 pointer-coarse:min-h-9"
              >
                <span className="size-3 flex-none">
                  <Select.ItemIndicator>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" strokeWidth="1.5" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Select.ItemIndicator>
                </span>
                <Select.ItemText>{l}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
