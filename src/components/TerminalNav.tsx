"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND, NAV } from "@/data/nav";

export default function TerminalNav() {
  const pathname = usePathname();

  return (
    <div className="nav-row">
      <nav className="nav-links" aria-label="Archive">
        {NAV.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${active ? "active" : ""}`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="nav-path">
        <span className="prompt">{BRAND.path}</span>
        {" > "}
        <span className="cursor" />
      </div>
    </div>
  );
}
