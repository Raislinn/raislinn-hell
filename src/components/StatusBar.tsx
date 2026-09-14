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
        MEM <b>64%</b> · FX.SYS · PHOSPHOR <b>CAL</b>
      </span>
      <span className="flex flex-wrap items-center gap-x-4 gap-y-1">
        <Link href="/academy" className="hover:text-[var(--phosphor)]">
          ACADEMY.OFF
        </Link>
        <span>
          v1.0.0 · {clock} · <b>NO SIGNAL LEAK</b>
        </span>
      </span>
    </footer>
  );
}
