import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Academy",
  description: "Academy module is offline. Raislinn Hell is the studio site.",
  robots: { index: false, follow: true },
};

export default function AcademyPage() {
  return (
    <SiteShell file="ACADEMY.OFF">
      <div className="page-inner">
        <PageHeader
          path="C:\\ENTITY\\ARCHIVE\\FX\\ACADEMY.OFF"
          title="Academy"
          note="Stub. Not the product."
        />
        <div className="panel bracket max-w-xl">
          <p className="kicker blood mb-3">MODULE OFFLINE</p>
          <p className="prose-cold">
            Learning records may surface later. This terminal is the brand
            studio — not a curriculum dump.
          </p>
          <p className="muted mt-4 text-sm">
            If you came here looking for lessons, they are not mounted. Come
            back for the work.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/work" className="btn">
              [ WORK ]
            </Link>
            <Link href="/" className="btn btn-ghost">
              [ ROOT ]
            </Link>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
