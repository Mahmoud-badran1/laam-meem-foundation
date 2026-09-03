/**
 * Homepage content. Placeholder copy — safe to replace wholesale.
 * Keeping it here means section components stay presentational.
 */

import heroImage from "@/assets/hero-composition.jpg";
import aboutImage from "@/assets/about-studio.jpg";
import work01 from "@/assets/work-01.jpg";
import work02 from "@/assets/work-02.jpg";
import work03 from "@/assets/work-03.jpg";

export const hero = {
  eyebrow: "Creative studio — identity & digital",
  headline: ["Meaning, made", "visible."],
  body: "Laam Meem builds brands with cultural depth and contemporary clarity. We work with founders and institutions who would rather be understood than merely seen.",
  image: { src: heroImage, alt: "Curved plaster forms in warm light", width: 1280, height: 1600 },
} as const;

export const trustSignals = [
  { value: "40+", label: "Brands shaped" },
  { value: "3", label: "Languages, natively" },
  { value: "12", label: "Design awards" },
  { value: "94%", label: "Clients return" },
] as const;

export const about = {
  eyebrow: "Philosophy",
  title: "Two letters. One idea: language before decoration.",
  paragraphs: [
    "Laam and Meem are letters that only reveal their shape in relation to what surrounds them. That is how we treat brands — as systems of meaning that live in context, not as artefacts kept behind glass.",
    "We are a small, senior team. Every engagement is led by the people who do the work, and every decision is argued from strategy rather than taste alone.",
  ],
  points: [
    "Strategy-first, never decoration-first",
    "Culturally fluent across EN, AR and DE markets",
    "Built to be maintained, not just launched",
  ],
  image: { src: aboutImage, alt: "Paper studies and a brass ruler on a work surface", width: 1200, height: 1400 },
} as const;

export type Service = {
  id: string;
  index: string;
  title: string;
  summary: string;
  capabilities: string[];
};

export const services: Service[] = [
  {
    id: "brand-strategy",
    index: "01",
    title: "Brand strategy",
    summary:
      "Positioning, narrative and naming that give a brand a defensible point of view before a single pixel is drawn.",
    capabilities: ["Research & audits", "Positioning", "Naming", "Messaging"],
  },
  {
    id: "identity-design",
    index: "02",
    title: "Identity design",
    summary:
      "Typographic, editorial identity systems built to scale across languages, formats and decades.",
    capabilities: ["Visual identity", "Type systems", "Art direction", "Guidelines"],
  },
  {
    id: "digital-experience",
    index: "03",
    title: "Digital experience",
    summary:
      "Websites and products that are fast, accessible and unmistakably yours — designed and built in one team.",
    capabilities: ["UX & UI", "Design systems", "Front-end build", "Performance"],
  },
  {
    id: "content-editorial",
    index: "04",
    title: "Content & editorial",
    summary:
      "Copy, photography direction and campaign systems that keep a brand articulate long after launch.",
    capabilities: ["Copywriting", "Photo direction", "Campaigns", "Localisation"],
  },
];

export type Project = {
  id: string;
  title: string;
  client: string;
  year: string;
  disciplines: string[];
  excerpt: string;
  image: { src: string; alt: string; width: number; height: number };
};

export const featuredProjects: Project[] = [
  {
    id: "atlas-press",
    title: "An archive turned into a living publication",
    client: "Atlas Press",
    year: "2025",
    disciplines: ["Strategy", "Identity", "Editorial"],
    excerpt:
      "A century of material, re-set as a bilingual publishing brand with a typographic system that carries both scripts with equal confidence.",
    image: { src: work01, alt: "Layered paper samples in raking light", width: 1200, height: 900 },
  },
  {
    id: "maison-noor",
    title: "A hospitality brand with architectural calm",
    client: "Maison Noor",
    year: "2024",
    disciplines: ["Identity", "Art direction"],
    excerpt:
      "Identity, wayfinding and photography direction for a residence where restraint had to feel generous rather than empty.",
    image: { src: work02, alt: "Arched opening in a warm ochre wall", width: 1200, height: 900 },
  },
  {
    id: "warp-weft",
    title: "Craft heritage, rebuilt for commerce",
    client: "Warp & Weft",
    year: "2024",
    disciplines: ["Digital", "Design system"],
    excerpt:
      "A commerce experience for a textile house, built on a design system that its in-house team now extends without us.",
    image: { src: work03, alt: "Macro detail of woven textile in bone and charcoal", width: 1200, height: 900 },
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Listen",
    body: "We start with interviews, audits and evidence — not a moodboard. You leave this phase with a written point of view.",
  },
  {
    step: "02",
    title: "Frame",
    body: "Positioning, narrative and creative territories. We agree the argument before we agree the aesthetic.",
  },
  {
    step: "03",
    title: "Make",
    body: "Identity, interface and content produced together, so the system is proven in real use rather than in mockups.",
  },
  {
    step: "04",
    title: "Hand over",
    body: "Documentation, training and a codebase your team can run. We stay available; you are never dependent.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "They asked harder questions than anyone we had worked with, and the answers reshaped more than our logo.",
    name: "Placeholder Name",
    role: "Founder, Placeholder Company",
  },
  {
    quote:
      "The system still holds three years later, across two languages and a team that has doubled in size.",
    name: "Placeholder Name",
    role: "Head of Brand, Placeholder Group",
  },
] as const;

export const finalCta = {
  title: "Let's build something worth remembering.",
  body: "Tell us what you are working on. We reply to every serious enquiry within two working days.",
} as const;
