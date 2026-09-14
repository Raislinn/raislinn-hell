"use client";

import Link from "next/link";
import { useCallback, useState, useSyncExternalStore } from "react";
import BootSequence, { hasEntered } from "./BootSequence";
import GlitchWordmark from "./GlitchWordmark";
import ShaderCanvas from "./ShaderCanvas";

const emptySubscribe = () => () => {};

export default function HomeExperience() {
  const stored = useSyncExternalStore(emptySubscribe, hasEntered, () => false);
  const [forcedOpen, setForcedOpen] = useState(false);
  const open = stored || forcedOpen;

  const onEnter = useCallback(() => setForcedOpen(true), []);

  return (
    <>
      {!open ? <BootSequence onEnter={onEnter} /> : null}
      <section className="hero-stage">
        <ShaderCanvas />
        <div className="hero-copy">
          <p className="kicker phosphor">Horror FX studio · Archive node</p>
          <GlitchWordmark />
          <p className="tagline">Practical nightmares for camera.</p>
          <p className="subline">Horror FX · Prosthetics · Creature · On-set bloodwork</p>
          <div className="hero-ctas">
            <Link href="/work" className="btn">
              [ WORK ]
            </Link>
            <Link href="/contact" className="btn btn-blood">
              [ CONTACT ]
            </Link>
          </div>
        </div>
        <div className="hero-meta">
          <span>Move the pointer · Shader live</span>
          <span>Enter without mercy</span>
        </div>
      </section>
    </>
  );
}
