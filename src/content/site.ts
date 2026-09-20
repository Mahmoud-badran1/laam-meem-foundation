/**
 * Site-wide configuration and reusable content.
 */

export type NavItem = {
  to: "/" | "/about" | "/services" | "/work" | "/contact";
  label: string;
};

export const brand = {
  name: "Laam Meem",
  tagline: "Be Seen. Be Remembered. Be Chosen.",
  description:
    "Laam Meem is a Vienna-based creative growth agency helping ambitious brands turn strong businesses into recognizable, trusted brands through strategy, content, social media and production.",
  foundedLabel: "Vienna, Austria",
} as const;

export const navigation: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const primaryCta = {
  label: "Build your presence",
  to: "/contact",
} as const;

export const secondaryCta = {
  label: "View our work",
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
