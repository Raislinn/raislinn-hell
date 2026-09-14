export const NAV = [
  { href: "/", label: "ROOT", file: "CAM00.SYS" },
  { href: "/work", label: "WORK", file: "WORK.DIR" },
  { href: "/services", label: "SERVICES", file: "SVC.DIR" },
  { href: "/about", label: "ABOUT", file: "MYTHOS.TXT" },
  { href: "/contact", label: "CONTACT", file: "UPLINK.CMD" },
] as const;

export const BRAND = {
  name: "Raislinn Hell",
  tagline: "Practical nightmares for camera.",
  sub: "Horror FX · Prosthetics · Creature · On-set bloodwork",
  email: "studio@raislinnhell.com",
  domain: "raislinnhell.com",
  path: "SEC:\\ARCHIVE\\FX",
} as const;
