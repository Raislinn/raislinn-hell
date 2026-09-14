export type Service = {
  code: string;
  title: string;
  line: string;
  body: string[];
};

export const SERVICES: Service[] = [
  {
    code: "01",
    title: "Prosthetics",
    line: "Faces, wounds, transfers. Whatever the cut requires.",
    body: [
      "Silicone and foam appliances, from micro-cuts to full-face builds.",
      "Sculpt, mold, paint, apply. Continuity photos on every stage.",
      "Designed for sweat, coverage, and the hour after lunch.",
    ],
  },
  {
    code: "02",
    title: "Creature appliances",
    line: "Things that should not have bones — until they do.",
    body: [
      "Partial creatures, full heads, chestbursts, extra joints.",
      "Armatures that survive a twelve-hour day.",
      "We build for the lens, not the display case.",
    ],
  },
  {
    code: "03",
    title: "Blood and gore systems",
    line: "Recipes. Rigs. The moment it hits the floor.",
    body: [
      "On-set bloodwork: squibs, bladders, mouth pumps, arterial hits.",
      "Viscosity matched to temperature, fabric, and camera speed.",
      "Cleanup planned before the first drop.",
    ],
  },
  {
    code: "04",
    title: "Aging and illness",
    line: "Time, disease, the body as evidence.",
    body: [
      "Old-age stipple, illness palettes, wasting, jaundice, post-trauma.",
      "Progression charts so day four still matches day one.",
      "Quiet work. The audience should feel it before they clock it.",
    ],
  },
  {
    code: "05",
    title: "On-set support",
    line: "We stay for the take that actually prints.",
    body: [
      "Application, maintenance, resets, emergency patches.",
      "Kit built for the call sheet you actually get.",
      "Closed-set protocol. No phones. No souvenirs.",
    ],
  },
];
