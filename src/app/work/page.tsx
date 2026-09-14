import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SiteShell from "@/components/SiteShell";
import { WORK } from "@/data/work";

export const metadata: Metadata = {
  title: "Work",
  description: "Sample archive of Raislinn Hell horror FX case studies.",
};

export default function WorkPage() {
  return (
    <SiteShell file="WORK.DIR">
      <div className="page-inner">
        <PageHeader
          path="C:\\ENTITY\\ARCHIVE\\FX\\WORK.DIR"
          title="Work"
          note="Sample set. Invented records for this terminal. Not produced credits. Do not cite as client work."
        />
        <p className="mb-6 text-[11px] tracking-[0.2em] text-[var(--amber)] uppercase">
          FILE CLASS: SAMPLE / ARCHIVE PLACEHOLDER · {WORK.length} RECORDS
        </p>
        <div className="grid-cards">
          {WORK.map((item) => (
            <article key={item.id} className="panel bracket">
              <div className="mb-3 flex items-center justify-between gap-3 text-[10px] tracking-[0.18em] uppercase text-[var(--phosphor-dim)]">
                <span>{item.file}</span>
                <span className="blood">{item.status}</span>
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-[0.08em] uppercase">
                {item.title}
              </h2>
              <p className="mt-2 text-[11px] tracking-[0.16em] uppercase text-[var(--phosphor)]">
                {item.dept} · {item.year}
              </p>
              <p className="mt-4 text-sm leading-relaxed tracking-[0.03em] text-[var(--bone)]">
                {item.logline}
              </p>
              <ul className="mt-4 space-y-1 text-xs leading-relaxed text-[var(--bone-dim)]">
                {item.notes.map((n) => (
                  <li key={n}>› {n}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
