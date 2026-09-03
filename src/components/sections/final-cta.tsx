import { Link } from "@tanstack/react-router";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { finalCta } from "@/content/home";
import { contact, primaryCta } from "@/content/site";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="bg-primary text-primary-foreground">
      <Container width="wide" className="py-24 md:py-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-8">
            <h2 id="cta-title" className="display text-balance text-4xl md:text-6xl lg:text-7xl">
              {finalCta.title}
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed opacity-70 md:text-lg">
              {finalCta.body}
            </p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-4">
            <div className="flex flex-col items-start gap-5">
              <Button asChild variant="carbon" size="xl">
                <Link to={primaryCta.to}>{primaryCta.label}</Link>
              </Button>
              <a
                href={`mailto:${contact.email}`}
                className="link-underline text-sm opacity-70 transition-opacity hover:opacity-100"
              >
                {contact.email}
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
