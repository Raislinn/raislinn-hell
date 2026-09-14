"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function StatusBar() {
  const [clock, setClock] = useState("--:--:--");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setClock(
        d.toLocaleTimeString("en-GB", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <footer className="statusbar">
      <span>
        CAM <b>00</b> · REC · SIGNAL <b>STABLE</b>
      </span>
      <span className="flex flex-wrap items-center gap-x-4 gap-y-1">
        <Link href="/academy" className="hover:text-[var(--phosphor)]">
          ACADEMY.OFF
        </Link>
        <span>
          SEC-OS v1.1 · {clock} · <b>DESK LOCKED</b>
        </span>
      </span>
    </footer>
  );
}
