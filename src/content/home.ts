import heroImage from "@/assets/hero-composition.jpg";
import aboutImage from "@/assets/about-studio.jpg";
import work01 from "@/assets/work-01.jpg";
import work02 from "@/assets/work-02.jpg";
import work03 from "@/assets/work-03.jpg";

export const hero = {
  eyebrow: "Creative Growth Agency — Vienna",
  headline: ["Your work deserves", "a stronger presence."],
  body:
    "Strategy, content and production for ambitious brands ready to be seen differently — and chosen with more confidence.",
  microcopy: "Brand · Content · Social · Production",
  image: {
    src: heroImage,
    alt: "Cinematic creative direction for Laam Meem",
    width: 1280,
    height: 1600,
  },
} as const;

export const trustSignals = [
  { value: "01", label: "Perception" },
  { value: "02", label: "Attention" },
  { value: "03", label: "Trust" },
  { value: "04", label: "Growth" },
] as const;

export const transformation = {
  eyebrow: "The problem",
  title: "Good work does not automatically become a strong brand.",
  intro:
    "People cannot see the years of experience, the care behind the service or the quality of the work before they buy. They see the brand first. We close the gap between what your business is worth and how the market perceives it.",
  problems: [
    "A strong business with a weaker digital impression",
    "Content without a clear position or recognizable point of view",
    "Inconsistent visuals that make the brand feel smaller than it is",
    "Marketing activity that creates noise but not preference",
  ],
  outcomes: [
    "A brand that looks established, credible and desirable",
    "A clearer position people can understand and remember",
    "A consistent visual and content standard across touchpoints",
    "A presence designed to earn attention, trust and choice",
  ],
} as const;

export const freeMarketingReview = {
  eyebrow: "Free presence review",
  title: "See your brand the way a potential client sees it.",
  body:
    "We review your current brand presence, identify where perception is falling behind the quality of your work, and show you the highest-value changes to make first.",
  points: [
    "Review the first impression your brand creates",
    "Identify the biggest perception and content gaps",
    "Clarify what should feel more premium, credible or distinctive",
    "Prioritise the changes most likely to improve trust and choice",
    "Outline the first strategic move we would make",
  ],
} as const;

export const about = {
  eyebrow: "Why Laam Meem",
  title: "We think before we create.",
  paragraphs: [
    "Laam Meem works at the intersection of brand perception, content, growth and production. We do not begin with the question: what should we post this week? We begin with: what should people think, feel and remember about this brand?",
    "From that answer, we build the strategy, concept, visual direction, production and distribution system that makes the outside of the business match the quality inside it.",
  ],
  points: [
    "Perception before production",
    "Strategy before content",
    "Creative direction with commercial purpose",
    "Organized creativity across every touchpoint",
  ],
  image: {
    src: aboutImage,
    alt: "Laam Meem creative direction and production process",
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
    id: "strategy",
    index: "01",
    title: "Strategy",
    summary:
      "We define how the brand should be perceived, who it needs to matter to and what message should guide every creative decision.",
    capabilities: ["Brand strategy", "Content strategy", "Campaign strategy", "Growth strategy"],
  },
  {
    id: "create",
    index: "02",
    title: "Create",
    summary:
      "We turn the strategy into a visual and verbal world that feels distinctive, premium and recognisably yours.",
    capabilities: ["Photography", "Videography", "Design", "Copywriting", "Creative direction"],
  },
  {
    id: "manage",
    index: "03",
    title: "Manage",
    summary:
      "We keep the brand coherent in motion — across content planning, social media, community and day-to-day execution.",
    capabilities: ["Social media", "Content management", "Community", "Publishing systems"],
  },
  {
    id: "grow",
    index: "04",
    title: "Grow",
    summary:
      "We connect the presence to business momentum through campaigns, optimisation, automation and performance thinking.",
    capabilities: ["Campaigns", "Performance", "Automation", "Optimisation"],
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
    title: "From scattered content to a brand people can recognise.",
    client: "Selected work",
    year: "Brand presence",
    disciplines: ["Strategy", "Social", "Content"],
    excerpt:
      "A clearer position, stronger visual discipline and a repeatable content system designed to make the business feel more established at first glance.",
    image: { src: work01, alt: "Brand and social media transformation", width: 1200, height: 900 },
  },
  {
    id: "event-storytelling",
    title: "Turning a live moment into lasting brand value.",
    client: "Selected work",
    year: "Production",
    disciplines: ["Creative Direction", "Video", "Photography"],
    excerpt:
      "Event coverage designed as brand storytelling — capturing the atmosphere, the people and the details in assets that continue working after the event.",
    image: { src: work02, alt: "Cinematic event production", width: 1200, height: 900 },
  },
  {
    id: "campaign-presence",
    title: "One campaign language across every touchpoint.",
    client: "Selected work",
    year: "Campaign",
    disciplines: ["Concept", "Design", "Digital"],
    excerpt:
      "A coordinated campaign direction connecting message, content and visual execution so every customer touchpoint reinforces the same perception.",
    image: { src: work03, alt: "Integrated campaign creative direction", width: 1200, height: 900 },
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Perception",
    body: "We diagnose the gap between the quality of the business and the impression the market currently receives.",
  },
  {
    step: "02",
    title: "Strategy",
    body: "We define the position, audience, message and commercial objective before creative work begins.",
  },
  {
    step: "03",
    title: "Concept",
    body: "We translate the strategy into a clear creative idea, visual direction and content language.",
  },
  {
    step: "04",
    title: "Production",
    body: "We create the photography, video, design, copy and digital assets with one consistent standard.",
  },
  {
    step: "05",
    title: "Distribution",
    body: "We put the work in front of the right people, learn from response and improve what comes next.",
  },
] as const;

export const testimonials = [] as const;

export const finalCta = {
  title: "Be seen. Be remembered. Be chosen.",
  body:
    "If the quality of your presence is still behind the quality of your work, let us show you what should change first.",
} as const;
