// A data story's live state, shared by its client module (which writes what the scene is
// doing: the step on screen, the race clock, ...) and its React UI (which renders that, and
// writes the reader's choices back). See README, "Data stories".
import { useCallback, useSyncExternalStore } from "react";

export type Listener<T> = (state: T, prev: T) => void;

export interface Store<T extends object> {
  get(): T;
  /** Merge in a partial state; listeners hear about it only if a value changed. */
  set(partial: Partial<T>): void;
  subscribe(fn: Listener<T>): () => void;
  /** Back to the initial state (on the client module's destroy). */
  reset(): void;
}

export function createStore<T extends object>(initial: T): Store<T> {
  let state = initial;
  const listeners = new Set<Listener<T>>();
  const emit = (prev: T) => listeners.forEach((fn) => fn(state, prev));
  return {
    get: () => state,
    set(partial) {
      let changed = false;
      for (const k in partial) {
        if (!Object.is(partial[k], state[k])) { changed = true; break; }
      }
      if (!changed) return;
      const prev = state;
      state = { ...state, ...partial };
      emit(prev);
    },
    subscribe(fn) {
      listeners.add(fn);
      return () => { listeners.delete(fn); };
    },
    reset() {
      const prev = state;
      state = initial;
      emit(prev);
    },
  };
}

/** One value from the store; the component re-renders only when that value changes. */
export function useStore<T extends object, V>(store: Store<T>, select: (state: T) => V): V {
  const subscribe = useCallback((cb: () => void) => store.subscribe(cb), [store]);
  const get = () => select(store.get());
  return useSyncExternalStore(subscribe, get, get);
}
