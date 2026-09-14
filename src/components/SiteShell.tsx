import type { ReactNode } from "react";
import { BRAND } from "@/data/nav";
import CrtOverlay from "./CrtOverlay";
import StatusBar from "./StatusBar";
import TerminalNav from "./TerminalNav";

export default function SiteShell({
  children,
  file,
}: {
  children: ReactNode;
  file?: string;
}) {
  return (
    <div className="crt-root">
      <CrtOverlay />
      <div className="bezel">
        <div className="bezel-corners" aria-hidden>
          <span className="bl" />
          <span className="br" />
        </div>
        <header className="titlebar">
          <div>
            <span className="online-dot" />
            {BRAND.name.toUpperCase()}{" // SEC-OS"}
          </div>
          <div className="mid">{file ?? "CAM00.SYS"}</div>
          <div className="right phosphor">MONITOR ONLINE</div>
        </header>
        <TerminalNav />
        <div className="bezel-body">{children}</div>
        <StatusBar />
      </div>
    </div>
  );
}
