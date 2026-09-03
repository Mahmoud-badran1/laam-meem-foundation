/**
 * Site-wide configuration and reusable content.
 *
 * EDIT HERE: brand details, navigation, contact info, socials, legal links.
 * Components must not hard-code any of this.
 */

export type NavItem = {
  /** TanStack Router path. Must match a file in src/routes. */
  to: "/" | "/about" | "/services" | "/work" | "/contact";
  label: string;
};

export const brand = {
  name: "Laam Meem",
  /** Short positioning line, reused in metadata and the footer. */
  tagline: "A studio for brands with something to say.",
  description:
    "Laam Meem is a creative studio building culturally intelligent brands — identity, digital experience and editorial direction for organisations that want to be remembered.",
  foundedLabel: "Est. 2019",
} as const;

export const navigation: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
];

export const primaryCta = {
  label: "Start a project",
  to: "/contact",
} as const;

export const secondaryCta = {
  label: "See selected work",
  to: "/work",
} as const;

export const contact = {
  email: "hello@laammeem.example",
  phone: "+00 000 000 0000",
  addressLines: ["Studio 04, Example Building", "City District", "Country"],
  hours: "Sun – Thu, 09:00 – 18:00",
} as const;

export const socials = [
  { label: "Instagram", href: "https://example.com/instagram" },
  { label: "LinkedIn", href: "https://example.com/linkedin" },
  { label: "Behance", href: "https://example.com/behance" },
] as const;

export const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Imprint", href: "/imprint" },
] as const;
