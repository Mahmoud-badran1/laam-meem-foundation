import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { hero } from "@/content/home";
import { primaryCta, secondaryCta } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-lime" />
      <Container width="wide">
        <div className="grid min-h-[72vh] items-end gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="eyebrow text-lime">{hero.eyebrow}</p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="display mt-8 max-w-6xl text-[clamp(3.5rem,9.5vw,8.8rem)]">
                {hero.headline[0]}
                <br />
                <span className="text-lime">{hero.headline[1]}</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                {hero.body}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild variant="ink" size="xl">
                  <Link to={primaryCta.to}>
                    {primaryCta.label}
                    <ArrowUpRight className="ml-2 size-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="quiet" size="xl">
                  <Link to={secondaryCta.to}>{secondaryCta.label}</Link>
                </Button>
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                {hero.microcopy}
              </p>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative lg:col-span-4">
            <div className="relative overflow-hidden border border-border">
              <img
                src={hero.image.src}
                alt={hero.image.alt}
                width={hero.image.width}
                height={hero.image.height}
                fetchPriority="high"
                decoding="async"
                className="aspect-[4/5] w-full object-cover grayscale"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-lime px-4 py-3 text-carbon">
                <span className="text-xs font-semibold uppercase tracking-[0.14em]">Vienna / Austria</span>
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="hairline mt-12 flex items-center justify-between gap-3 pt-6 text-xs text-muted-foreground md:mt-16">
          <div className="flex items-center gap-3">
            <ArrowDown className="size-4" aria-hidden="true" />
            <span className="tracking-[0.18em] uppercase">Explore</span>
          </div>
          <span className="hidden tracking-[0.18em] uppercase md:inline">Strategy + Production + Execution</span>
        </div>
      </Container>
    </section>
  );
}
