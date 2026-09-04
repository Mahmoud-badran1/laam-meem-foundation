/**
 * Site-wide configuration and reusable content.
 * Keep brand details, navigation and contact information centralized here.
 */

export type NavItem = {
  to: "/" | "/about" | "/services" | "/work" | "/contact";
  label: string;
};

export const brand = {
  name: "Laam Meem",
  tagline: "Marketing that makes your business look as professional as it really is.",
  description:
    "Laam Meem is a Vienna-based marketing agency helping businesses strengthen their social media presence, cover events professionally, create memorable content and turn marketing into business growth.",
  foundedLabel: "Vienna, Austria",
} as const;

export const navigation: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const primaryCta = {
  label: "Get your free marketing review",
  to: "/contact",
} as const;

export const secondaryCta = {
  label: "See our work",
  to: "/work",
} as const;

export const contact = {
  email: "hello@laammeem.example",
  phone: "+43 000 000 0000",
  addressLines: ["Vienna", "Austria"],
  hours: "Mon – Fri, 09:00 – 18:00",
} as const;

export const socials = [
  { label: "Instagram", href: "https://example.com/instagram" },
  { label: "LinkedIn", href: "https://example.com/linkedin" },
] as const;

export const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Imprint", href: "/imprint" },
] as const;
