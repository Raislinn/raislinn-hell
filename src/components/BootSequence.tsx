"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";

const STORAGE_KEY = "rh-entered";

/**
 * Center CRT glass rect in image % space for public/security-desk.png (v12, 16:9).
 * Remeasured against the beige monitor phosphor area (inside black inner bezel).
 */
export const CRT = {
  left: 28.4,
  top: 55.3,
  width: 14.3,
  height: 19.1,
} as const;

export const CRT_CENTER = {
  x: CRT.left + CRT.width / 2,
  y: CRT.top + CRT.height / 2,
} as const;

export const ZOOM_MS = 1600;
export const SETTLE_MS = 180;
export const REDUCED_MS = 280;
export const REDUCED_SETTLE_MS = 100;

export type BootPhase = "idle" | "zooming" | "done";

export type CrtMetrics = {
  left: number;
  top: number;
  width: number;
  height: number;
  fit: number;
  zoom: number;
};

/** Map CRT % on the 16:9 cover plate into viewport pixels + zoom scales. */
export function measureCrt(vw: number, vh: number): CrtMetrics {
  const deskW = Math.max(vw, (vh * 16) / 9);
  const deskH = Math.max(vh, (vw * 9) / 16);
  const deskLeft = (vw - deskW) / 2;
  const deskTop = (vh - deskH) / 2;

  const left = deskLeft + (CRT.left / 100) * deskW;
  const top = deskTop + (CRT.top / 100) * deskH;
  const width = (CRT.width / 100) * deskW;
  const height = (CRT.height / 100) * deskH;

  const fit = Math.max(width / Math.max(vw, 1), height / Math.max(vh, 1));
  // Exact fill — no overshoot. Desk photo uses this; portal morphs box to viewport.
  const zoom = Math.max(vw / Math.max(width, 1), vh / Math.max(height, 1));

  return { left, top, width, height, fit, zoom };
}

function applyCrtVars(m: CrtMetrics) {
  const root = document.documentElement;
  root.style.setProperty("--crt-left", `${m.left}px`);
  root.style.setProperty("--crt-top", `${m.top}px`);
  root.style.setProperty("--crt-w", `${m.width}px`);
  root.style.setProperty("--crt-h", `${m.height}px`);
  root.style.setProperty("--crt-fit", String(m.fit));
  root.style.setProperty("--crt-zoom", String(m.zoom));
  root.style.setProperty("--crt-ox", `${CRT_CENTER.x}%`);
  root.style.setProperty("--crt-oy", `${CRT_CENTER.y}%`);
  root.classList.add("rh-crt-ready");
}

function clearCrtVars() {
  const root = document.documentElement;
  [
    "--crt-left",
    "--crt-top",
    "--crt-w",
    "--crt-h",
    "--crt-fit",
    "--crt-zoom",
    "--crt-ox",
    "--crt-oy",
  ].forEach((k) => root.style.removeProperty(k));
  root.classList.remove("rh-crt-ready", "rh-reduced-zoom", "rh-settling");
}

export default function BootSequence({
  phase,
  onStartZoom,
  onDone,
}: {
  phase: BootPhase;
  onStartZoom: () => void;
  onDone: () => void;
}) {
  const reduce = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );
  const [zoomStyle, setZoomStyle] = useState<CSSProperties>({});
  const finished = useRef(false);

  const remeasure = useCallback(() => {
    const m = measureCrt(window.innerWidth, window.innerHeight);
    applyCrtVars(m);
    return m;
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("rh-booting");
    remeasure();
    const onResize = () => {
      if (phase === "idle") remeasure();
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      document.documentElement.classList.remove("rh-booting", "rh-settling");
      clearCrtVars();
    };
  }, [remeasure, phase]);

  const finish = useCallback(() => {
    if (finished.current) return;
    finished.current = true;
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    document.documentElement.classList.remove("rh-booting", "rh-settling");
    clearCrtVars();
    onDone();
  }, [onDone]);

  const beginSettle = useCallback(() => {
    const root = document.documentElement;
    // Portal is already fullscreen; fade shell chrome in, then hand off.
    root.classList.add("rh-settling");
    root.classList.remove("rh-booting");
  }, []);

  const enter = useCallback(() => {
    if (phase !== "idle") return;
    const m = remeasure();
    if (reduce) {
      document.documentElement.classList.add("rh-reduced-zoom");
      onStartZoom();
      return;
    }
    setZoomStyle({
      transformOrigin: `${CRT_CENTER.x}% ${CRT_CENTER.y}%`,
      ["--desk-scale" as string]: String(m.zoom),
    });
    onStartZoom();
  }, [phase, reduce, remeasure, onStartZoom]);

  useEffect(() => {
    if (phase !== "zooming") return;
    const zoomMs = reduce ? REDUCED_MS : ZOOM_MS;
    const settleMs = reduce ? REDUCED_SETTLE_MS : SETTLE_MS;
    const tSettle = window.setTimeout(() => beginSettle(), zoomMs);
    const tDone = window.setTimeout(() => finish(), zoomMs + settleMs);
    return () => {
      window.clearTimeout(tSettle);
      window.clearTimeout(tDone);
    };
  }, [phase, finish, beginSettle, reduce]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        enter();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [enter]);

  if (phase === "done") return null;

  return (
    <div
      className={`security-desk ${phase === "zooming" ? "is-zooming" : ""} ${
        reduce ? "is-reduced" : ""
      }`}
      role="dialog"
      aria-label="Night shift security desk"
    >
      <div className="desk-scene">
        <div className="desk-cover" style={zoomStyle}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="desk-photo"
            src="/security-desk.png"
            alt="Photoreal security office desk with CRT monitors"
            draggable={false}
          />

          <div
            className="crt-glass-rim"
            style={{
              left: `${CRT.left}%`,
              top: `${CRT.top}%`,
              width: `${CRT.width}%`,
              height: `${CRT.height}%`,
            }}
            aria-hidden
          />
        </div>
      </div>

      {/* Fixed hotspot above the hero CRT portal so Enter stays clickable */}
      <button
        type="button"
        className="crt-hotspot crt-hotspot--vp"
        onClick={enter}
        disabled={phase !== "idle"}
        aria-label="Enter archive"
      >
        <span className="crt-hotspot__label">
          <span className="crt-hotspot__key">ENTER</span>
          <span className="crt-hotspot__hint">click · ↵ · space</span>
        </span>
      </button>

      <div className="desk-grain" aria-hidden />

      <div className="desk-hud">
        <span>SHIFT 03 · 04:00</span>
        <span className="desk-hud__pulse">● LIVE</span>
        <span>NO EXTERNAL UPLINK</span>
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
