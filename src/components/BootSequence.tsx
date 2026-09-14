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

const CAMS = [
  { id: "CAM 01", label: "HALL A" },
  { id: "CAM 02", label: "PROP BAY" },
  { id: "CAM 03", label: "STAGE L" },
  { id: "CAM 04", label: "BLOOD LAB" },
];

function CamFeed({ label, camId }: { label: string; camId: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let raf = 0;
    let alive = true;
    let last = 0;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const NW = 96;
    const NH = 72;
    const noise = document.createElement("canvas");
    noise.width = NW;
    noise.height = NH;
    const nctx = noise.getContext("2d", { alpha: false })!;
    const img = nctx.createImageData(NW, NH);
    const data = img.data;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
      const w = canvas.clientWidth || 160;
      const h = canvas.clientHeight || 100;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const paintNoise = (burst: boolean) => {
      for (let i = 0; i < data.length; i += 4) {
        const n = (Math.random() * 255) | 0;
        const v = burst ? n : 18 + n * 0.2;
        data[i] = v * 0.62;
        data[i + 1] = v * 0.62;
        data[i + 2] = v * 0.58;
        data[i + 3] = 255;
      }
      nctx.putImageData(img, 0, 0);
    };

    const draw = (t: number) => {
      if (!alive) return;
      if (t - last < 50 && !reduce) {
        raf = requestAnimationFrame(draw);
        return;
      }
      last = t;
      const w = canvas.clientWidth || 160;
      const h = canvas.clientHeight || 100;
      const burst = Math.sin(t * 0.007) > 0.93;

      paintNoise(burst);
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(noise, 0, 0, w, h);

      for (let i = 0; i < 3; i++) {
        const x = (Math.sin(t * 0.0003 + i * 1.7) * 0.35 + 0.5) * w;
        const y = (Math.cos(t * 0.00025 + i * 2.1) * 0.3 + 0.5) * h;
        const r = 14 + i * 10;
        const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
        grad.addColorStop(0, "rgba(120,120,120,0.2)");
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.fillStyle = "rgba(0,0,0,0.35)";
      for (let y = 0; y < h; y += 3) ctx.fillRect(0, y, w, 1);

      if (!reduce) {
        const barY = ((t * 0.04) % (h + 20)) - 10;
        const bar = ctx.createLinearGradient(0, barY, 0, barY + 14);
        bar.addColorStop(0, "transparent");
        bar.addColorStop(0.5, "rgba(220,220,220,0.1)");
        bar.addColorStop(1, "transparent");
        ctx.fillStyle = bar;
        ctx.fillRect(0, barY, w, 14);
        raf = requestAnimationFrame(draw);
      }
    };

    paintNoise(false);
    raf = requestAnimationFrame(draw);
    const onResize = () => resize();
    window.addEventListener("resize", onResize);
    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="cam-feed">
      <canvas ref={canvasRef} className="cam-feed__canvas" aria-hidden />
      <div className="cam-feed__hud">
        <span className="cam-feed__rec">
          <i /> REC
        </span>
        <span>{camId}</span>
      </div>
      <div className="cam-feed__label">{label}</div>
      <div className="cam-feed__static" aria-hidden />
    </div>
  );
}

function DeskProps() {
  return (
    <div className="desk-props" aria-hidden>
      {/* Scream-style hunting/kitchen knife — original, no Ghostface */}
      <svg
        className="prop prop-knife"
        viewBox="0 0 220 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="blade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#c8cdd4" />
            <stop offset="55%" stopColor="#eef1f5" />
            <stop offset="100%" stopColor="#8a9099" />
          </linearGradient>
          <linearGradient id="handle" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2a1810" />
            <stop offset="100%" stopColor="#120a06" />
          </linearGradient>
        </defs>
        <path
          d="M48 22 L200 8 L208 18 L200 28 L48 26 Z"
          fill="url(#blade)"
          stroke="#5a6068"
          strokeWidth="0.6"
        />
        <path
          d="M48 22 L200 12"
          stroke="#fff"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
        <rect x="8" y="16" width="44" height="16" rx="2" fill="url(#handle)" />
        <circle cx="18" cy="24" r="1.6" fill="#6a5040" />
        <circle cx="28" cy="24" r="1.6" fill="#6a5040" />
        <circle cx="38" cy="24" r="1.6" fill="#6a5040" />
        <ellipse cx="165" cy="20" rx="10" ry="3" fill="#5a1010" opacity="0.55" />
      </svg>

      <svg className="prop prop-vhs" viewBox="0 0 90 56" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="18" width="78" height="14" rx="1" fill="#1a1a1a" stroke="#333" />
        <rect x="8" y="21" width="30" height="8" fill="#8b1e1e" />
        <rect x="10" y="8" width="78" height="14" rx="1" fill="#222" stroke="#444" />
        <rect x="14" y="11" width="28" height="8" fill="#c9a227" />
        <rect x="2" y="28" width="78" height="14" rx="1" fill="#111" stroke="#333" />
        <rect x="6" y="31" width="26" height="8" fill="#2a5a36" />
        <text x="48" y="38" fill="#666" fontSize="5" fontFamily="monospace">
          MASTER
        </text>
      </svg>

      <svg className="prop prop-blood" viewBox="0 0 40 70" xmlns="http://www.w3.org/2000/svg">
        <rect x="14" y="2" width="12" height="8" rx="1" fill="#3a3a3a" />
        <path
          d="M10 12 H30 L28 58 Q20 66 12 58 Z"
          fill="#1a0505"
          stroke="#5a1010"
          strokeWidth="1"
        />
        <path d="M12 28 H28 L27 54 Q20 60 13 54 Z" fill="#8b1e1e" opacity="0.9" />
        <rect x="12" y="16" width="16" height="8" fill="#e8e0d5" opacity="0.85" />
        <text x="14" y="22" fill="#8b1e1e" fontSize="4" fontFamily="monospace">
          FX
        </text>
      </svg>

      <svg className="prop prop-gauze" viewBox="0 0 70 36" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 18 Q18 4 36 14 Q52 24 66 10"
          fill="none"
          stroke="#e8e0d5"
          strokeWidth="10"
          strokeLinecap="round"
          opacity="0.9"
        />
        <path
          d="M4 18 Q18 4 36 14 Q52 24 66 10"
          fill="none"
          stroke="#8b1e1e"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.55"
        />
        <ellipse cx="28" cy="16" rx="8" ry="5" fill="#5a1010" opacity="0.5" />
      </svg>

      <svg className="prop prop-finger" viewBox="0 0 28 60" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 4 Q18 2 20 12 L22 48 Q14 56 8 48 L10 12 Q8 4 10 4"
          fill="#c4a882"
          stroke="#8a6a4a"
        />
        <path d="M10 20 H20" stroke="#8a6a4a" strokeWidth="0.8" />
        <path d="M10 32 H21" stroke="#8a6a4a" strokeWidth="0.8" />
        <ellipse cx="15" cy="8" rx="5" ry="4" fill="#d4b892" />
        <path
          d="M8 46 Q14 52 22 46"
          fill="none"
          stroke="#8b1e1e"
          strokeWidth="2"
          opacity="0.5"
        />
      </svg>

      <svg className="prop prop-polaroids" viewBox="0 0 80 70" xmlns="http://www.w3.org/2000/svg">
        <g transform="rotate(-12 30 35)">
          <rect x="8" y="10" width="36" height="42" fill="#eee8df" stroke="#bbb" />
          <rect x="12" y="14" width="28" height="28" fill="#2a2218" />
        </g>
        <g transform="rotate(8 50 40)">
          <rect x="28" y="18" width="36" height="42" fill="#e8e0d5" stroke="#aaa" />
          <rect x="32" y="22" width="28" height="28" fill="#1a1510" />
        </g>
      </svg>

      {/* Late-night LED clock */}
      <div className="prop prop-clock">
        <span className="prop-clock__face">4:00</span>
      </div>
    </div>
  );
}

function RoomLeft() {
  return (
    <aside className="room-left" aria-hidden>
      <div className="room-couch">
        <div className="room-couch__back" />
        <div className="room-couch__seat">
          <i />
          <i />
          <i />
        </div>
        <div className="room-couch__legs" />
      </div>
      <div className="room-cabinet">
        <div className="room-fan">
          <div className="room-fan__cage">
            <span className="room-fan__blade" />
            <span className="room-fan__blade" />
            <span className="room-fan__hub" />
          </div>
          <div className="room-fan__base" />
        </div>
        <div className="room-cabinet__body">
          <div className="room-cabinet__drawer" />
          <div className="room-cabinet__drawer" />
          <div className="room-cabinet__drawer" />
        </div>
      </div>
    </aside>
  );
}

function Fluorescent() {
  return (
    <div className="room-fluorescent" aria-hidden>
      <div className="room-fluorescent__fixture">
        <span />
        <span />
      </div>
      <div className="room-fluorescent__glow" />
      <div className="room-cables">
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}

export default function BootSequence({ onEnter }: { onEnter: () => void }) {
  const reduce = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );
  const [phase, setPhase] = useState<"idle" | "zooming" | "done">("idle");
  const [zoomStyle, setZoomStyle] = useState<CSSProperties>({});
  const sceneRef = useRef<HTMLDivElement>(null);
  const mainMonRef = useRef<HTMLDivElement>(null);
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
      finish();
      return;
    }
    const scene = sceneRef.current;
    const mon = mainMonRef.current;
    if (!scene || !mon) {
      finish();
      return;
    }
    const sr = scene.getBoundingClientRect();
    const mr = mon.getBoundingClientRect();
    const ox = ((mr.left + mr.width / 2 - sr.left) / sr.width) * 100;
    const oy = ((mr.top + mr.height / 2 - sr.top) / sr.height) * 100;
    const scale = Math.max(sr.width / mr.width, sr.height / mr.height) * 1.15;
    setZoomStyle({
      transformOrigin: `${ox}% ${oy}%`,
      ["--desk-scale" as string]: String(scale),
    });
    setPhase("zooming");
  }, [phase, reduce, finish]);

  useEffect(() => {
    if (phase !== "zooming") return;
    const t = window.setTimeout(() => finish(), 1450);
    return () => window.clearTimeout(t);
  }, [phase, finish]);

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

  if (phase === "done") return null;

  return (
    <div
      className={`security-desk ${phase === "zooming" ? "is-zooming" : ""} ${
        reduce ? "is-reduced" : ""
      }`}
      role="dialog"
      aria-label="Night shift security desk"
    >
      <div className="desk-ambient" aria-hidden>
        <div className="desk-flicker" />
        <div className="desk-red-wash" />
      </div>

      <div className="desk-scene" ref={sceneRef} style={zoomStyle}>
        <div className="room">
          <Fluorescent />

          <div className="room-body">
            <RoomLeft />

            <div className="room-center">
              <div className="room-window">
                <div className="room-window__frame">
                  <div className="room-window__pane room-window__pane--foliage" />
                  <div className="room-window__muntins" aria-hidden>
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
              </div>

              <div className="room-hazard" aria-hidden />

              <div className="crt-monitor crt-monitor--main" ref={mainMonRef}>
                <div className="crt-monitor__shell">
                  <div className="crt-monitor__bezel crt-monitor__bezel--main">
                    <div className="main-screen">
                      <div className="main-screen__scan" aria-hidden />
                      <div className="main-screen__content">
                        <p className="main-screen__kicker">SEC-OS · NIGHT SHIFT</p>
                        <p className="main-screen__brand">RH</p>
                        <p className="main-screen__title">RAISLINN HELL</p>
                        <p className="main-screen__sub">FX ARCHIVE · MONITOR 00</p>
                        <div className="main-screen__status">
                          <span className="online-dot" />
                          FEEDS ARMED · AWAITING INPUT
                        </div>
                        <button
                          type="button"
                          className="desk-enter-btn"
                          onClick={enter}
                          disabled={phase !== "idle"}
                        >
                          <span className="desk-enter-btn__key">ENTER</span>
                          <span className="desk-enter-btn__hint">
                            click or press ↵
                          </span>
                        </button>
                      </div>
                      <div className="main-screen__corners" aria-hidden>
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                    </div>
                  </div>
                  <div className="crt-orange-panel" aria-hidden>
                    <div className="crt-orange-panel__row">
                      <span className="crt-btn crt-btn--yellow" />
                      <span className="crt-btn crt-btn--yellow" />
                      <span className="crt-btn crt-btn--yellow" />
                    </div>
                    <div className="crt-orange-panel__row">
                      <span className="crt-btn crt-btn--red" />
                      <span className="crt-btn crt-btn--red" />
                    </div>
                  </div>
                  <div className="crt-monitor__chin crt-monitor__chin--main">
                    <span className="crt-monitor__led crt-monitor__led--lit" />
                    <span>CAM 00 · PRIMARY</span>
                    <span className="crt-monitor__brand">RAISLINN</span>
                  </div>
                </div>
              </div>

              <div className="metal-desk">
                <div className="metal-desk__top">
                  <DeskProps />
                  <button
                    type="button"
                    className="desk-keycap"
                    onClick={enter}
                    disabled={phase !== "idle"}
                    aria-label="Enter archive"
                  >
                    <span>ENTER</span>
                  </button>
                </div>
                <div className="metal-desk__front">
                  <div className="metal-desk__drawer metal-desk__drawer--left" />
                  <div className="metal-desk__drawer-stack">
                    <div className="metal-desk__drawer" />
                    <div className="metal-desk__drawer" />
                  </div>
                </div>
              </div>
            </div>

            <aside className="room-right" aria-hidden={false}>
              <div className="monitor-bank">
                {CAMS.map((cam) => (
                  <div key={cam.id} className="crt-monitor crt-monitor--wall">
                    <div className="crt-monitor__bezel">
                      <CamFeed label={cam.label} camId={cam.id} />
                    </div>
                    <div className="crt-monitor__chin">
                      <span className="crt-monitor__led crt-monitor__led--lit" />
                      <span>{cam.id}</span>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>

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
