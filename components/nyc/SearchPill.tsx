"use client";

import { memo, useEffect, useId, useMemo, useRef, useState } from "react";
import { Check, CornerDownLeft, Search, X } from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { ComponentType } from "react";
import { NEIGHBORHOODS } from "@/lib/nyc/generated/neighborhoods";
import type { Borough, Neighborhood } from "@/lib/nyc/types";
import { ICON, SURFACE, SURFACE_BUTTON } from "./ui";

// ---- Search index ----------------------------------------------------------

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const SEARCH_INDEX = NEIGHBORHOODS.map((neighborhood) => ({
  neighborhood,
  primary: normalize(neighborhood.name),
  secondary: normalize(
    [...neighborhood.includes, neighborhood.borough].join(
      " ",
    ),
  ),
}));

export function searchNeighborhoods(query: string, limit = 8): Neighborhood[] {
  const needle = normalize(query);
  if (!needle) return [];
  const scored: Array<{ neighborhood: Neighborhood; score: number }> = [];
  for (const { neighborhood, primary, secondary } of SEARCH_INDEX) {
    let score = 0;
    if (primary.startsWith(needle)) score = 3;
    else if (primary.includes(needle)) score = 2;
    else if (secondary.includes(needle)) score = 1;
    if (score) scored.push({ neighborhood, score });
  }
  return scored
    .sort(
      (a, b) =>
        b.score - a.score ||
        a.neighborhood.name.localeCompare(b.neighborhood.name),
    )
    .slice(0, limit)
    .map(({ neighborhood }) => neighborhood);
}

// ---- Commands --------------------------------------------------------------

export interface Command {
  id: string;
  label: string;
  /** Extra words the command should match on. */
  keywords?: string;
  icon: ComponentType<LucideProps>;
  /** Shown to the right, e.g. "On" for a toggle. */
  detail?: string;
  /** Ask once before running; the label becomes the confirmation prompt. */
  confirm?: string;
  run: () => void;
}

function matchCommands(commands: Command[], query: string): Command[] {
  const needle = normalize(query);
  if (!needle) return commands;
  return commands.filter((command) =>
    normalize(`${command.label} ${command.keywords ?? ""}`).includes(needle),
  );
}

type Item =
  | { kind: "neighborhood"; key: string; neighborhood: Neighborhood }
  | { kind: "command"; key: string; command: Command };

const BOROUGH_ORDER: Borough[] = [
  "Manhattan",
  "Brooklyn",
  "Queens",
  "Bronx",
  "Staten Island",
];

function isTypingTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  return (
    target.isContentEditable ||
    ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)
  );
}

interface SearchPillProps {
  visitedIds: ReadonlySet<string>;
  onPick: (neighborhood: Neighborhood) => void;
  commands: Command[];
  /** Full-width pill without the keyboard hint (mobile bottom bar). */
  compact: boolean;
  /** Start as an icon button and expand into the pill on click or shortcut. */
  collapsible?: boolean;
  /** Where the list opens relative to the pill. */
  openDirection?: "down" | "up";
}

/**
 * Search and commands in one pill. Empty query lists actions; typing shows
 * neighborhoods grouped by borough plus any matching actions. Cmd/Ctrl+K, "/"
 * or just starting to type anywhere on the map moves focus here.
 */
export const SearchPill = memo(function SearchPill({
  visitedIds,
  onPick,
  commands,
  compact,
  collapsible = false,
  openDirection = "down",
}: SearchPillProps) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [focused, setFocused] = useState(false);
  const [expanded, setExpanded] = useState(!collapsible);
  const [confirming, setConfirming] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listId = useId();

  const neighborhoods = useMemo(() => searchNeighborhoods(query), [query]);
  const matchedCommands = useMemo(
    () => matchCommands(commands, query),
    [commands, query],
  );

  // Flat list for keyboard navigation, grouped for display.
  const groups = useMemo(() => {
    const result: Array<{ heading: string; items: Item[] }> = [];
    for (const borough of BOROUGH_ORDER) {
      const items = neighborhoods
        .filter((neighborhood) => neighborhood.borough === borough)
        .map<Item>((neighborhood) => ({
          kind: "neighborhood",
          key: neighborhood.id,
          neighborhood,
        }));
      if (items.length) result.push({ heading: borough, items });
    }
    if (matchedCommands.length) {
      result.push({
        heading: "Actions",
        items: matchedCommands.map<Item>((command) => ({
          kind: "command",
          key: `command:${command.id}`,
          command,
        })),
      });
    }
    return result;
  }, [matchedCommands, neighborhoods]);
  const items = useMemo(() => groups.flatMap((group) => group.items), [groups]);

  useEffect(() => {
    setActive(0);
    setConfirming(null);
  }, [query]);

  // Focus once the input exists after expanding.
  useEffect(() => {
    if (expanded && collapsible) inputRef.current?.focus();
  }, [collapsible, expanded]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.defaultPrevented) return;
      const meta = event.metaKey || event.ctrlKey;
      const focusInput = () => {
        setExpanded(true);
        const input = inputRef.current;
        if (input) {
          input.focus();
          input.select();
        }
      };
      if (meta && event.key.toLowerCase() === "k") {
        event.preventDefault();
        focusInput();
        return;
      }
      if (isTypingTarget(event.target) || meta || event.altKey) return;
      if (document.querySelector('[role="dialog"], [role="menu"]')) return;
      if (event.key === "/") {
        event.preventDefault();
        focusInput();
      } else if (event.key.length === 1 && /[a-z0-9]/i.test(event.key)) {
        // Focus before the keypress lands so the letter is typed here. If the
        // pill is still collapsed, seed the query since the input isn't mounted.
        if (inputRef.current) inputRef.current.focus();
        else {
          event.preventDefault();
          setQuery(event.key);
        }
        setExpanded(true);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const close = () => {
    setQuery("");
    setConfirming(null);
    inputRef.current?.blur();
    if (collapsible) setExpanded(false);
  };

  const choose = (item: Item) => {
    if (item.kind === "neighborhood") {
      onPick(item.neighborhood);
      close();
      return;
    }
    const { command } = item;
    if (command.confirm && confirming !== command.id) {
      setConfirming(command.id);
      return;
    }
    command.run();
    close();
  };

  const open = focused && (query.length > 0 || items.length > 0);

  if (collapsible && !expanded) {
    return (
      <button
        type="button"
        className={`${SURFACE_BUTTON} grid size-9 place-items-center rounded-full text-nyc-ink-2 hover:text-nyc-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nyc-ink-2`}
        aria-label="Search and actions"
        title="Search and actions (⌘K)"
        onClick={() => setExpanded(true)}
      >
        <Search size={16} {...ICON} aria-hidden="true" />
      </button>
    );
  }

  const activeItem = items[active];

  return (
    <form
      // On phones the form isn't positioned, so the results anchor to the
      // whole bottom bar instead of the narrow search field.
      className={`font-sans ${compact ? "w-full" : "relative w-[360px]"} ${
        collapsible ? "origin-right motion-safe:animate-nyc-expand" : ""
      }`}
      role="search"
      onSubmit={(event) => {
        event.preventDefault();
        if (activeItem) choose(activeItem);
      }}
    >
      <label
        className={`${SURFACE} relative flex ${compact ? "h-10" : "h-9"} items-center rounded-full pr-2 pl-3.5 text-nyc-ink`}
      >
        <Search
          size={16}
          {...ICON}
          aria-hidden="true"
          className="shrink-0 text-nyc-muted"
        />
        <input
          ref={inputRef}
          type="text"
          role="combobox"
          aria-expanded={open}
          aria-controls={listId}
          aria-activedescendant={
            open && activeItem ? `${listId}-${activeItem.key}` : undefined
          }
          aria-label="Search neighborhoods and actions"
          autoComplete="off"
          enterKeyHint="go"
          placeholder={
            compact
              ? "Search or run an action"
              : "Find a neighborhood or action"
          }
          className="h-full min-w-0 flex-1 bg-transparent px-2.5 text-base text-nyc-ink outline-none placeholder:text-sm placeholder:text-nyc-muted sm:text-sm"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() =>
            window.setTimeout(() => {
              setFocused(false);
              setConfirming(null);
              if (collapsible && !query) setExpanded(false);
            }, 120)
          }
          onKeyDown={(event) => {
            if (event.key === "ArrowDown") {
              event.preventDefault();
              setActive((index) => Math.min(index + 1, items.length - 1));
            } else if (event.key === "ArrowUp") {
              event.preventDefault();
              setActive((index) => Math.max(index - 1, 0));
            } else if (event.key === "Escape") {
              event.preventDefault();
              if (query) setQuery("");
              else close();
            }
          }}
        />
        {query ? (
          <button
            type="button"
            aria-label="Clear search"
            className="grid size-7 shrink-0 cursor-pointer place-items-center rounded-full text-nyc-muted hover:bg-nyc-hover hover:text-nyc-ink"
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
          >
            <X size={14} {...ICON} aria-hidden="true" />
          </button>
        ) : (
          !compact && (
            <kbd
              aria-hidden="true"
              className="shrink-0 rounded-md border border-nyc-line px-1.5 py-0.5 font-sans text-[11px] text-nyc-muted"
            >
              ⌘K
            </kbd>
          )
        )}
      </label>

      {open && (
        <div
          className={`${SURFACE} absolute inset-x-0 z-40 max-h-[60dvh] overflow-y-auto rounded-2xl p-1.5 font-[450] text-nyc-ink ${
            openDirection === "up" ? "bottom-12" : "top-11"
          }`}
        >
          {items.length === 0 && (
            <p className="px-3 py-2.5 text-sm text-nyc-muted">
              Nothing matches “{query}”.
            </p>
          )}
          <div id={listId} role="listbox" aria-label="Results">
            {groups.map((group) => (
              <div key={group.heading} role="group" aria-label={group.heading}>
                <p className="px-2.5 pt-2 pb-1 text-xs text-nyc-muted">
                  {group.heading}
                </p>
                {group.items.map((item) => {
                  const index = items.indexOf(item);
                  const isActive = index === active;
                  const rowClass = `flex w-full cursor-pointer items-center gap-2.5 rounded-xl px-2.5 py-2 text-left ${
                    isActive ? "bg-nyc-hover" : "hover:bg-nyc-hover"
                  }`;
                  if (item.kind === "neighborhood") {
                    const { neighborhood } = item;
                    const visited = visitedIds.has(neighborhood.id);
                    return (
                      <div
                        key={item.key}
                        id={`${listId}-${item.key}`}
                        role="option"
                        aria-selected={isActive}
                      >
                        <button
                          type="button"
                          className={rowClass}
                          onMouseEnter={() => setActive(index)}
                          onMouseDown={(event) => event.preventDefault()}
                          onClick={() => choose(item)}
                        >
                          <span
                            className="grid size-5 shrink-0 place-items-center rounded-full"
                            style={{
                              background: visited
                                ? "var(--nyc-primary)"
                                : "var(--nyc-fill)",
                              color: visited ? "white" : "transparent",
                            }}
                            aria-hidden="true"
                          >
                            <Check size={12} {...ICON} />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-sm text-nyc-ink">
                              {neighborhood.name}
                            </span>
                            {neighborhood.includes.length > 0 && (
                              <span className="block truncate text-xs text-nyc-muted">
                                {neighborhood.includes.join(", ")}
                              </span>
                            )}
                          </span>
                          {isActive && (
                            <CornerDownLeft
                              size={14}
                              {...ICON}
                              aria-hidden="true"
                              className="shrink-0 text-nyc-faint"
                            />
                          )}
                        </button>
                      </div>
                    );
                  }
                  const { command } = item;
                  const Icon = command.icon;
                  const isConfirming = confirming === command.id;
                  return (
                    <div
                      key={item.key}
                      id={`${listId}-${item.key}`}
                      role="option"
                      aria-selected={isActive}
                    >
                      <button
                        type="button"
                        className={rowClass}
                        onMouseEnter={() => setActive(index)}
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={() => choose(item)}
                      >
                        <span className="grid size-5 shrink-0 place-items-center text-nyc-muted">
                          <Icon size={16} {...ICON} aria-hidden="true" />
                        </span>
                        <span
                          className={`min-w-0 flex-1 truncate text-sm ${
                            isConfirming
                              ? "font-medium text-red-700"
                              : "text-nyc-ink"
                          }`}
                        >
                          {isConfirming ? command.confirm : command.label}
                        </span>
                        {command.detail && !isConfirming && (
                          <span className="shrink-0 text-xs text-nyc-muted">
                            {command.detail}
                          </span>
                        )}
                        {isActive && (
                          <CornerDownLeft
                            size={14}
                            {...ICON}
                            aria-hidden="true"
                            className="shrink-0 text-nyc-faint"
                          />
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      )}
    </form>
  );
});
