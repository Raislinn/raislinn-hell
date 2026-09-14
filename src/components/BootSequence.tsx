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

/** Center CRT screen hotspot in image space (security-desk.jpg is 16:9). */
const CRT = {
  left: 31.6,
  top: 48.6,
  width: 22.8,
  height: 23.3,
} as const;

const CRT_CENTER = {
  x: CRT.left + CRT.width / 2,
  y: CRT.top + CRT.height / 2,
} as const;

export default function BootSequence({ onEnter }: { onEnter: () => void }) {
  const reduce = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );
  const [phase, setPhase] = useState<"idle" | "zooming" | "done">("idle");
  const [zoomStyle, setZoomStyle] = useState<CSSProperties>({});
  const finished = useRef(false);

  const finish = useCallback(() => {
    if (finished.current) return;
    finished.current = true;
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setPhase("done");
    onEnter();
  }, [onEnter]);

  const enter = useCallback(() => {
    if (phase !== "idle") return;
    if (reduce) {
      setPhase("zooming");
      return;
    }
    const scale = Math.max(100 / CRT.width, 100 / CRT.height) * 1.12;
    setZoomStyle({
      transformOrigin: `${CRT_CENTER.x}% ${CRT_CENTER.y}%`,
      ["--desk-scale" as string]: String(scale),
    });
    setPhase("zooming");
  }, [phase, reduce]);

  useEffect(() => {
    if (phase !== "zooming") return;
    const ms = reduce ? 280 : 1450;
    const t = window.setTimeout(() => finish(), ms);
    return () => window.clearTimeout(t);
  }, [phase, finish, reduce]);

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
            src="/security-desk.jpg"
            alt="Photoreal security office desk with CRT monitors"
            draggable={false}
          />

          <div
            className="crt-screen-glow"
            style={{
              left: `${CRT.left}%`,
              top: `${CRT.top}%`,
              width: `${CRT.width}%`,
              height: `${CRT.height}%`,
            }}
            aria-hidden
          />

          <button
            type="button"
            className="crt-hotspot"
            style={{
              left: `${CRT.left}%`,
              top: `${CRT.top}%`,
              width: `${CRT.width}%`,
              height: `${CRT.height}%`,
            }}
            onClick={enter}
            disabled={phase !== "idle"}
            aria-label="Enter archive"
          >
            <span className="crt-hotspot__label">
              <span className="crt-hotspot__key">ENTER</span>
              <span className="crt-hotspot__hint">click · ↵ · space</span>
            </span>
          </button>
        </div>
      </div>

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
