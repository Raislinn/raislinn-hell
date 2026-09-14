import Link from "next/link";
import SiteShell from "@/components/SiteShell";

export default function NotFound() {
  return (
    <SiteShell file="ERR_404.SYS">
      <div className="page-inner">
        <p className="kicker blood mb-3">FILE NOT FOUND</p>
        <h1 className="page-title">404</h1>
        <p className="mt-4 max-w-md text-sm tracking-[0.08em] text-[var(--bone-dim)]">
          No record at this path. The archive does not leak.
        </p>
        <Link href="/" className="btn mt-8 inline-flex">
          [ RETURN ]
        </Link>
      </div>
    </SiteShell>
  );
}
