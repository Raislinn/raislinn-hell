import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "About",
  description: "Studio mythos for Raislinn Hell, practical horror FX.",
};

export default function AboutPage() {
  return (
    <SiteShell file="MYTHOS.TXT">
      <div className="page-inner">
        <PageHeader
          path="C:\\ENTITY\\ARCHIVE\\FX\\MYTHOS.TXT"
          title="About"
          note="A short record. The rest is in the kit."
        />
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="prose-cold">
            <p>Raislinn Hell is a practical horror effects studio.</p>
            <p>We build what the camera cannot unsee.</p>
            <p>
              Flesh. Fluid. Creature. Ruin. Under lights. In the cut. On the
              day someone says print.
            </p>
            <p>
              The name is a warning. If it looks too clean, it is not ours. If
              it looks like software, send it back.
            </p>
            <p>
              We treat the lens as an altar and the call sheet as liturgy.
              Short days are a rumor. Blood is a system. Continuity is a
              weapon.
            </p>
            <p className="phosphor">Practical nightmares for camera.</p>
          </div>
          <aside className="panel bracket h-fit">
            <p className="kicker phosphor mb-4">UNIT FILE</p>
            <dl className="space-y-3 text-sm tracking-[0.08em]">
              <div>
                <dt className="text-[10px] uppercase text-[var(--phosphor-dim)]">Designation</dt>
                <dd>Raislinn Hell</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase text-[var(--phosphor-dim)]">Discipline</dt>
                <dd>Horror FX · Prosthetics · Creature · Bloodwork</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase text-[var(--phosphor-dim)]">Method</dt>
                <dd>Practical first. Digital last, if ever.</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase text-[var(--phosphor-dim)]">Academy</dt>
                <dd>
                  Curriculum may surface later.{" "}
                  <Link href="/academy" className="phosphor underline">
                    /academy
                  </Link>{" "}
                  is offline on purpose.
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </SiteShell>
  );
}
