"use client";

import { FormEvent, useState } from "react";
import { BRAND } from "@/data/nav";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const production = String(data.get("production") || "").trim();
    const message = String(data.get("message") || "").trim();

    const body = [
      `Name: ${name}`,
      `Signal: ${email}`,
      `Production: ${production}`,
      "",
      message,
    ].join("\n");

    const mailto = `mailto:${BRAND.email}?subject=${encodeURIComponent(
      `Raislinn Hell / ${production || "inquiry"}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="panel bracket">
        <p className="kicker phosphor mb-3">TRANSMISSION QUEUED</p>
        <p className="prose-cold">
          Your mail client should open addressed to {BRAND.email}. If it does
          not, send the same text there directly.
        </p>
        <p className="muted mt-4 text-xs tracking-[0.14em] uppercase">
          Next step for production: point this form at Formspree by setting the
          form action to your endpoint. The UI is already field-complete.
        </p>
      </div>
    );
  }

  return (
    <form className="panel bracket grid gap-5" onSubmit={onSubmit}>
      <p className="kicker">UPLINK · plaintext</p>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" required autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="email">Signal (email)</label>
        <input id="email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="production">Production</label>
        <input id="production" name="production" placeholder="Feature / series / commercial" />
      </div>
      <div className="field">
        <label htmlFor="message">Transmission</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="What needs to look wrong."
        />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button type="submit" className="btn">
          [ SEND ]
        </button>
        <a className="muted text-xs tracking-[0.16em] uppercase" href={`mailto:${BRAND.email}`}>
          or {BRAND.email}
        </a>
      </div>
    </form>
  );
}
