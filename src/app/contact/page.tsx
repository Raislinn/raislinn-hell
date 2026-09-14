import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import SiteShell from "@/components/SiteShell";
import { BRAND } from "@/data/nav";

export const metadata: Metadata = {
  title: "Contact",
  description: "Uplink to Raislinn Hell for practical horror FX.",
};

export default function ContactPage() {
  return (
    <SiteShell file="UPLINK.CMD">
      <div className="page-inner">
        <PageHeader
          path="C:\\ENTITY\\ARCHIVE\\FX\\UPLINK.CMD"
          title="Contact"
          note="Tell us the wound. We will tell you if it can be built."
        />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />
          <aside className="panel bracket h-fit">
            <p className="kicker phosphor mb-4">CHANNEL</p>
            <p className="text-sm leading-relaxed tracking-[0.06em]">
              Direct:{" "}
              <a className="phosphor" href={`mailto:${BRAND.email}`}>
                {BRAND.email}
              </a>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--bone-dim)]">
              Closed-set available. Creature builds need lead time. Blood
              systems can move faster. Do not send reference that you do not
              have rights to.
            </p>
            <p className="mt-6 text-[11px] tracking-[0.16em] uppercase text-[var(--amber)]">
              Form is mailto-live. Swap the action for Formspree when the
              domain is wired.
            </p>
          </aside>
        </div>
      </div>
    </SiteShell>
  );
}
