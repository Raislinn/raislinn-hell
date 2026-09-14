"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

const LINES = [
  "RAISLINN HELL  //  FX ARCHIVE",
  "BIOS v3.9.14  —  PRACTICAL NIGHTMARES",
  "",
  "> MOUNT  C:\\ENTITY\\ARCHIVE\\FX",
  "> CHECK  BLOODWORK.SYS  ........  OK",
  "> LOAD   PROSTHETICS.LIB  ......  OK",
  "> INIT   CREATURE.MESH  ........  OK",
  "> SENSOR / CAMERA  .............  ARMED",
  "> FOG / GRAIN  .................  ONLINE",
  "> PHOSPHOR  ....................  CALIBRATED",
  "",
  "SYSTEM ONLINE.",
];

const STORAGE_KEY = "rh-entered";

export default function BootSequence({ onEnter }: { onEnter: () => void }) {
  const reduce = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );
  const [count, setCount] = useState(reduce ? LINES.length : 0);
  const [ready, setReady] = useState(reduce);

  useEffect(() => {
    if (reduce) return;
    if (count >= LINES.length) {
      const t = window.setTimeout(() => setReady(true), 180);
      return () => window.clearTimeout(t);
    }
    const t = window.setTimeout(() => setCount((c) => c + 1), count < 3 ? 90 : 140);
    return () => window.clearTimeout(t);
  }, [count, reduce]);

  const enter = useCallback(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    onEnter();
  }, [onEnter]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " " || e.key === "Escape") {
        e.preventDefault();
        enter();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [enter]);

  return (
    <div className="boot-screen" role="dialog" aria-label="Archive boot sequence">
      <div className="boot-panel bracket">
        <div className="mb-4 flex items-center justify-between text-[10px] tracking-[0.22em] text-[var(--phosphor-dim)] uppercase">
          <span>C:\ENTITY\ARCHIVE\FX\BOOT.SYS</span>
          <span className="phosphor">CRT · 80 COL</span>
        </div>
        <pre className="boot-log">
          {LINES.slice(0, count).join("\n")}
          {count < LINES.length ? "█" : ""}
        </pre>
        <div className="boot-enter">
          <span className="muted text-[11px] tracking-[0.18em] uppercase">
            {ready ? "Awaiting input" : "Loading archive"}
            <span className="cursor" />
          </span>
          <button type="button" className="btn" onClick={enter}>
            [ ENTER ]
          </button>
        </div>
      </div>
    </div>
  );
}

export function hasEntered(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}
