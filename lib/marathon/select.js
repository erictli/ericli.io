// A small listbox select in the style of shadcn/ui's Select, without a framework: an inline
// trigger (value + chevron) and one popover, fixed-position at the story root's top level so a
// panel's or the caption's overflow can't clip it. Every trigger in the story ([data-sel])
// shows the same value and opens the same list. Listeners and the popover go away with the
// story's cleanup.
import { reducedMotion } from "@/lib/stories/client";

const CHEVRON = `<svg class="m-sel-chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="m6 9 6 6 6-6" stroke-width="1.5" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const CHECK = `<svg class="m-sel-check" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M20 6 9 17l-5-5" stroke-width="1.5" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

/**
 * @param {{ root: HTMLElement, cleanup: ReturnType<typeof import("@/lib/stories/client").createCleanup>,
 *           options: {value: string, label: string}[], value: string, label: string,
 *           onChange: (value: string) => void }} cfg
 * @returns {{ set(value: string): void, paint(): void }}
 */
export function makeSelect({ root, cleanup, options, value, label, onChange }) {
  let current = value;
  let active = -1; // highlighted option while open
  let opener = null; // the trigger that opened the list
  const pop = document.createElement("div");
  pop.className = "m-sel-pop";
  pop.id = "m-sel-pop";
  pop.setAttribute("role", "listbox");
  pop.setAttribute("tabindex", "-1");
  pop.setAttribute("aria-label", label);
  pop.hidden = true;
  pop.innerHTML = options.map((o, i) => `<div class="m-sel-opt" role="option" id="m-sel-opt-${i}" data-value="${o.value}" aria-selected="false">${CHECK}<span>${o.label}</span></div>`).join("");
  root.appendChild(pop);
  cleanup.add(() => pop.remove());
  const opts = [...pop.querySelectorAll(".m-sel-opt")];

  const triggers = () => [...root.querySelectorAll("[data-sel]")];
  function paint() {
    const o = options.find((x) => x.value === current);
    for (const t of triggers()) {
      if (!t.querySelector(".m-sel-v")) t.innerHTML = `<span class="m-sel-v"></span>`;
      if (!t.querySelector(".m-sel-chev")) t.insertAdjacentHTML("beforeend", CHEVRON);
      t.querySelector(".m-sel-v").textContent = o?.label ?? "";
      t.setAttribute("aria-label", `${label}: ${o?.label ?? ""}`);
      t.setAttribute("aria-haspopup", "listbox");
      t.setAttribute("aria-controls", "m-sel-pop");
      if (!t.hasAttribute("aria-expanded")) t.setAttribute("aria-expanded", "false");
    }
    opts.forEach((el) => el.setAttribute("aria-selected", String(el.dataset.value === current)));
  }
  function highlight(i) {
    active = Math.max(0, Math.min(opts.length - 1, i));
    opts.forEach((el, k) => el.classList.toggle("active", k === active));
    pop.setAttribute("aria-activedescendant", opts[active].id);
    opts[active].scrollIntoView?.({ block: "nearest" });
  }
  function place() {
    const r = opener.getBoundingClientRect();
    pop.style.minWidth = `${Math.max(120, r.width)}px`;
    const h = pop.offsetHeight, w = pop.offsetWidth;
    const below = r.bottom + 4 + h <= innerHeight - 8 || r.top - 4 - h < 8; // flip above if there's no room
    pop.dataset.side = below ? "bottom" : "top";
    pop.style.top = `${below ? r.bottom + 4 : r.top - 4 - h}px`;
    pop.style.left = `${Math.max(8, Math.min(r.left, innerWidth - w - 8))}px`;
  }
  function open(trigger, { focusList = true } = {}) {
    if (!pop.hidden) close({ restore: false });
    opener = trigger;
    pop.hidden = false;
    pop.classList.toggle("no-motion", reducedMotion());
    place();
    cleanup.frame(() => pop.classList.add("open"));
    trigger.setAttribute("aria-expanded", "true");
    highlight(Math.max(0, options.findIndex((o) => o.value === current)));
    if (focusList) pop.focus({ preventScroll: true });
  }
  function close({ restore = true } = {}) {
    if (pop.hidden) return;
    pop.classList.remove("open");
    pop.hidden = true;
    opener?.setAttribute("aria-expanded", "false");
    if (restore) opener?.focus({ preventScroll: true });
    opener = null;
  }
  function choose(i) {
    const v = options[i].value;
    close();
    if (v !== current) { current = v; paint(); onChange(v); }
  }

  // triggers (delegated, so the copies of a card's trigger in the caption work too)
  cleanup.on(root, "click", (ev) => {
    const t = ev.target.closest?.("[data-sel]");
    if (t) { ev.preventDefault(); if (opener === t && !pop.hidden) close(); else open(t); }
  });
  cleanup.on(root, "keydown", (ev) => {
    const t = ev.target.closest?.("[data-sel]");
    if (!t) return;
    if (["Enter", " ", "ArrowDown", "ArrowUp"].includes(ev.key)) {
      ev.preventDefault();
      open(t);
      if (ev.key === "ArrowUp") highlight(active - 1);
    }
  });
  // the list
  cleanup.on(pop, "keydown", (ev) => {
    const k = ev.key;
    if (k === "ArrowDown") highlight(active + 1);
    else if (k === "ArrowUp") highlight(active - 1);
    else if (k === "Home") highlight(0);
    else if (k === "End") highlight(opts.length - 1);
    else if (k === "Enter" || k === " ") choose(active);
    else if (k === "Escape") close();
    else if (k === "Tab") { close(); return; }
    else return;
    ev.preventDefault();
  });
  cleanup.on(pop, "pointermove", (ev) => {
    const o = ev.target.closest(".m-sel-opt");
    if (o) highlight(opts.indexOf(o));
  });
  cleanup.on(pop, "click", (ev) => {
    const o = ev.target.closest(".m-sel-opt");
    if (o) choose(opts.indexOf(o));
  });
  // an outside click closes the list and returns focus to the trigger
  cleanup.on(document, "pointerdown", (ev) => {
    if (pop.hidden || pop.contains(ev.target) || ev.target.closest?.("[data-sel]") === opener) return;
    const t = opener;
    close();
    // the press itself moves focus to the page; put it back on the trigger once it lands
    if (!ev.target.closest?.("[data-sel], a, button, input, select, textarea")) cleanup.timeout(() => t?.focus({ preventScroll: true }), 0);
  }, true);
  cleanup.on(window, "resize", () => close({ restore: false }));
  cleanup.on(window, "scroll", () => { if (!pop.hidden && opener) place(); }, { passive: true });

  paint();
  return {
    set(v) { current = v; paint(); },
    paint,
  };
}
