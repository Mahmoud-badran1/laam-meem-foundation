import { Link } from "@tanstack/react-router";

import { Container } from "./container";
import { Wordmark } from "./wordmark";
import { brand, contact, legalLinks, navigation, socials } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/50">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Wordmark className="w-fit" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {brand.tagline}
            </p>
            <p className="eyebrow mt-8">{brand.foundedLabel}</p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <h2 className="eyebrow mb-5">Navigate</h2>
            <ul className="space-y-3 text-sm">
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-2">
            <h2 className="eyebrow mb-5">Elsewhere</h2>
            <ul className="space-y-3 text-sm">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    rel="noreferrer noopener"
                    target="_blank"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <address className="not-italic md:col-span-2">
            <h2 className="eyebrow mb-5">Contact</h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href={`mailto:${contact.email}`} className="transition-colors hover:text-foreground">
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-foreground"
                >
                  {contact.phone}
                </a>
              </li>
              {contact.addressLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </address>
        </div>

        <div className="hairline mt-14 flex flex-col gap-4 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {brand.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-6">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
