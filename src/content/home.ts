import heroImage from "@/assets/hero-composition.jpg";
import aboutImage from "@/assets/about-studio.jpg";
import work01 from "@/assets/work-01.jpg";
import work02 from "@/assets/work-02.jpg";
import work03 from "@/assets/work-03.jpg";

export const hero = {
  eyebrow: "Marketing agency — Vienna, Austria",
  headline: ["Your business is professional.", "Your presence should prove it."],
  body: "Laam Meem helps businesses build a stronger social media presence, cover events at a premium standard, create content people remember and turn marketing into growth.",
  image: {
    src: heroImage,
    alt: "Laam Meem creative direction and content production",
    width: 1280,
    height: 1600,
  },
} as const;

export const trustSignals = [
  { value: "01", label: "Strategy" },
  { value: "02", label: "Content" },
  { value: "03", label: "Events" },
  { value: "04", label: "Growth" },
] as const;

export const transformation = {
  eyebrow: "The gap we solve",
  title: "Great businesses lose trust when their marketing looks improvised.",
  intro:
    "Being visible is not the same as being positioned. Posting more is not the same as building a brand. We create the strategy, standard and execution that make every touchpoint feel intentional.",
  problems: [
    "Inconsistent posting with no clear direction",
    "Strong business, weak visual presentation",
    "Events that happen once and disappear online",
    "Content that follows trends but builds no long-term brand equity",
  ],
  outcomes: [
    "A clear and credible market position",
    "A professional, recognisable social presence",
    "Content systems designed around business goals",
    "Event coverage that keeps creating value after the event ends",
  ],
} as const;

export const about = {
  eyebrow: "Why Laam Meem",
  title: "One partner. One direction. One standard.",
  paragraphs: [
    "We combine marketing strategy, creative direction and production execution in one team. That means the idea, the content and the way it reaches your audience are designed to work together — not handed from supplier to supplier.",
    "Our approach starts before the camera turns on. We ask what people should think, feel and remember about your business, then build the system that makes that perception consistent across social media, campaigns, events and digital touchpoints.",
  ],
  points: [
    "Strategy before posting",
    "Premium production without losing commercial purpose",
    "Clear systems that make marketing consistent and measurable",
  ],
  image: {
    src: aboutImage,
    alt: "Laam Meem strategy and creative production process",
    width: 1200,
    height: 1400,
  },
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
    id: "marketing-strategy",
    index: "01",
    title: "Marketing strategy",
    summary:
      "We define the positioning, audience, messaging and campaign direction so your marketing has a reason behind every action.",
    capabilities: ["Positioning", "Campaign strategy", "Audience direction", "Marketing planning"],
  },
  {
    id: "social-media",
    index: "02",
    title: "Social media",
    summary:
      "A professional presence built around strategy, consistency and content that strengthens how people perceive your business.",
    capabilities: ["Content strategy", "Planning", "Account direction", "Campaign support"],
  },
  {
    id: "content-production",
    index: "03",
    title: "Content production",
    summary:
      "Photography, videography and reels designed for the platforms where your audience discovers and evaluates you.",
    capabilities: ["Photography", "Videography", "Reels", "Creative direction"],
  },
  {
    id: "event-coverage",
    index: "04",
    title: "Event coverage",
    summary:
      "We turn your event into a bank of premium content — live moments, social-first assets, recaps and branded storytelling.",
    capabilities: ["Photo coverage", "Video coverage", "Highlights", "Social-first content"],
  },
  {
    id: "brand-identity",
    index: "05",
    title: "Branding & visual identity",
    summary:
      "Identity systems and graphic direction that make your business recognisable, coherent and ready to grow across channels.",
    capabilities: ["Visual identity", "Graphic design", "Campaign design", "Print"],
  },
  {
    id: "digital-presence",
    index: "06",
    title: "Web & landing pages",
    summary:
      "Focused digital experiences that carry the same professional standard from your social presence into conversion.",
    capabilities: ["Websites", "Landing pages", "Campaign pages", "Digital design"],
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
    id: "social-transformation",
    title: "From scattered posting to a professional brand presence",
    client: "Selected work",
    year: "Case study",
    disciplines: ["Strategy", "Social Media", "Content"],
    excerpt:
      "A complete social-media direction built around clearer positioning, stronger visuals and a repeatable content system.",
    image: { src: work01, alt: "Social media content direction", width: 1200, height: 900 },
  },
  {
    id: "event-storytelling",
    title: "An event designed to keep working after the room empties",
    client: "Selected work",
    year: "Case study",
    disciplines: ["Event Coverage", "Video", "Photography"],
    excerpt:
      "A social-first event coverage system combining live moments, highlight assets and post-event storytelling.",
    image: { src: work02, alt: "Professional event coverage", width: 1200, height: 900 },
  },
  {
    id: "campaign-presence",
    title: "One campaign. One visual standard across every touchpoint.",
    client: "Selected work",
    year: "Case study",
    disciplines: ["Campaign", "Design", "Digital"],
    excerpt:
      "A coordinated campaign presence spanning content, graphic design and digital assets without losing brand consistency.",
    image: { src: work03, alt: "Integrated marketing campaign", width: 1200, height: 900 },
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    body: "We understand the business, audience, current presence and the gap between how you operate and how you are perceived.",
  },
  {
    step: "02",
    title: "Position",
    body: "We define the message, creative direction and marketing priorities before deciding what content needs to be produced.",
  },
  {
    step: "03",
    title: "Create",
    body: "Strategy becomes photography, video, reels, campaigns, design and digital experiences built to one standard.",
  },
  {
    step: "04",
    title: "Grow",
    body: "We refine what works, strengthen consistency and help your marketing compound rather than restart every month.",
  },
] as const;

export const testimonials = [] as const;

export const finalCta = {
  title: "Your business should look as professional as it really is.",
  body: "If your current presence does not reflect the quality of your business, that is where we begin.",
} as const;
