import { useSyncExternalStore } from "react";

let solvedChalls: number[] = [];
let lsKey = 'abodla-solved-challenges'

function initialize() {
  try {
    window.addEventListener('storage', handleStorageChange);
  } catch (error) {

  }
  updateSolvedChalls();
}
initialize();


function updateSolvedChalls() {
  let lsItem: string | null;
  try {
    lsItem = localStorage.getItem(lsKey) ?? '[]'
    solvedChalls = JSON.parse(lsItem);
  } catch (error) {
  }
}

function handleStorageChange(this: Window, ev: StorageEvent) {
  if ((ev.key === null) || lsKey === ev.key) {
    updateSolvedChalls();
    callbacks.forEach((i) => i());
  }
}

const callbacks = new Set<() => void>();

export function useSolved(): number[] {
  const newSolvedChalls = useSyncExternalStore(
    (callback) => {
      //how to subscribe
      callbacks.add(callback)
      return () => {
        //how to unsub
        callbacks.delete(callback);
      }
    },
    () => {
      //return the current value, but have it cached.
      return solvedChalls;
    }
  )
  return newSolvedChalls;
}

export function markSolved(id: number): void {
  if (solvedChalls.includes(id)) {
    return;
  }
  const newSolvedChalls = [...solvedChalls, id];
  solvedChalls = newSolvedChalls;
  try {
    localStorage.setItem(lsKey, JSON.stringify(solvedChalls));
  }
  catch (error) { }
  callbacks.forEach((i) => i());
}
