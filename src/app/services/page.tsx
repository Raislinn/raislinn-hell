import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SiteShell from "@/components/SiteShell";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Prosthetics, creature appliances, blood and gore systems, aging and illness, on-set support.",
};

export default function ServicesPage() {
  return (
    <SiteShell file="SVC.DIR">
      <div className="page-inner">
        <PageHeader
          path="C:\\ENTITY\\ARCHIVE\\FX\\SVC.DIR"
          title="Services"
          note="Practical only. We do not composite the wound after wrap."
        />
        <div className="grid gap-3">
          {SERVICES.map((svc) => (
            <article key={svc.code} className="panel bracket grid gap-3 md:grid-cols-[88px_1fr]">
              <div className="phosphor font-[family-name:var(--font-display)] text-3xl font-black tracking-widest">
                {svc.code}
              </div>
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-[0.1em] uppercase">
                  {svc.title}
                </h2>
                <p className="mt-1 text-sm tracking-[0.06em] text-[var(--phosphor)]">{svc.line}</p>
                <ul className="mt-4 space-y-1 text-sm leading-relaxed text-[var(--bone-dim)]">
                  {svc.body.map((line) => (
                    <li key={line}>› {line}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/contact" className="btn">
            [ BOOK THE UNIT ]
          </Link>
          <Link href="/work" className="btn btn-ghost">
            [ SAMPLE ARCHIVE ]
          </Link>
        </div>
      </div>
    </SiteShell>
  );
}
