export type CaseStudy = {
  id: string;
  file: string;
  title: string;
  dept: string;
  year: string;
  status: string;
  logline: string;
  notes: string[];
};

export const WORK: CaseStudy[] = [
  {
    id: "vessel-nine",
    file: "04_VESSEL_NINE.REC",
    title: "Vessel Nine",
    dept: "Creature / Transformation",
    year: "SAMPLE",
    status: "SEALED",
    logline: "A body that learns a second skeleton. Silicone collapse, practical steam, teeth that keep arriving.",
    notes: [
      "Full-torso transformation appliance, three-stage swap.",
      "On-set blood bladder rig timed to a single take.",
      "Placeholder record — not a produced credit.",
    ],
  },
  {
    id: "marrow-throne",
    file: "07_MARROW_THRONE.REC",
    title: "The Marrow Throne",
    dept: "Creature / Set piece",
    year: "SAMPLE",
    status: "SEALED",
    logline: "A seat grown from someone who stayed too long. Bone lattice, wet cartilage, a pulse you can mic.",
    notes: [
      "Sculpted foam-core armature, silicone skins, hand-laid vein work.",
      "Practical drip channels. No digital fill.",
      "Placeholder record — not a produced credit.",
    ],
  },
  {
    id: "salt-circle",
    file: "11_SALT_CIRCLE.REC",
    title: "Salt Circle",
    dept: "Blood systems / Ritual burns",
    year: "SAMPLE",
    status: "SEALED",
    logline: "The floor remembers the rite. Blister maps, salt-crust skin, a circle that smokes on cue.",
    notes: [
      "Transfer burns + gelatin blister sheets, continuity across four nights.",
      "Non-toxic smoke and practical scorch dressing.",
      "Placeholder record — not a produced credit.",
    ],
  },
  {
    id: "wet-room",
    file: "15_WET_ROOM.REC",
    title: "The Wet Room",
    dept: "Gore systems / Appliances",
    year: "SAMPLE",
    status: "SEALED",
    logline: "Everything in here has been underwater. Bloated tissue, clouded eyes, a drain that never clears.",
    notes: [
      "Waterlogged silicone, capillary blush, custom scleral lenses.",
      "Closed-set fluid recovery. Floor protection protocol.",
      "Placeholder record — not a produced credit.",
    ],
  },
  {
    id: "hollow-saint",
    file: "22_HOLLOW_SAINT.REC",
    title: "Hollow Saint",
    dept: "Prosthetics / Iconography",
    year: "SAMPLE",
    status: "SEALED",
    logline: "A relic that still wants a congregation. Flayed gilt, waxen lids, a mouth packed with offerings.",
    notes: [
      "Face and chest appliances, gold-leaf over trauma paint.",
      "Aging through the sequence: saint to husk.",
      "Placeholder record — not a produced credit.",
    ],
  },
  {
    id: "second-skin",
    file: "28_SECOND_SKIN.REC",
    title: "Second Skin",
    dept: "Aging / Illness",
    year: "SAMPLE",
    status: "SEALED",
    logline: "Ten years in a weekend. Jaundice, tremor makeup, a smile that no longer fits the skull.",
    notes: [
      "Illness progression chart, three looks, one performer.",
      "Subtle first. Ugly later. Camera tests at T2.8.",
      "Placeholder record — not a produced credit.",
    ],
  },
];
