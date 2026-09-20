import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { finalCta } from "@/content/home";
import { primaryCta } from "@/content/site";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="border-t border-border bg-carbon text-soft-white">
      <Container width="wide" className="py-28 md:py-40 lg:py-48">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-9">
            <p className="eyebrow text-lime">Laam Meem</p>
            <h2 id="cta-title" className="display mt-8 max-w-6xl text-balance text-[clamp(3.4rem,8vw,9rem)] leading-[0.9]">
              {finalCta.title}
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-soft-white/55 md:text-xl">
              {finalCta.body}
            </p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3 lg:text-end">
            <Button asChild variant="ink" size="xl">
              <Link to={primaryCta.to}>
                {primaryCta.label}
                <ArrowUpRight className="ml-2 size-4" aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
