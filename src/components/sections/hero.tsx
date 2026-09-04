import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { hero } from "@/content/home";
import { primaryCta, secondaryCta } from "@/content/site";

export function Hero() {
  return (
    <section className="relative isolate min-h-[78svh] overflow-hidden border-b border-border">
      <img
        src={hero.image.src}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
      />
      <div aria-hidden="true" className="aurora-hero__signal absolute inset-0 -z-20 mix-blend-screen opacity-85" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(9,10,10,0.94)_0%,rgba(9,10,10,0.76)_36%,rgba(9,10,10,0.28)_68%,rgba(9,10,10,0.12)_100%)]" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-carbon/85 to-transparent" />

      <Container width="wide" className="flex min-h-[78svh] items-center py-28 md:py-40 lg:py-48">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-lime">{hero.eyebrow}</p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="display mt-10 max-w-2xl text-balance text-[clamp(2.35rem,4.6vw,4.9rem)] leading-[0.98] text-soft-white">
              {hero.headline[0]}
              <br />
              <span className="text-lime">{hero.headline[1]}</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-10 max-w-lg text-base leading-relaxed text-soft-white/76 md:text-lg">
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
              <Button asChild variant="quiet" size="xl" className="border-soft-white/45 bg-carbon/16 text-soft-white backdrop-blur-sm hover:bg-soft-white hover:text-carbon">
                <Link to={secondaryCta.to}>{secondaryCta.label}</Link>
              </Button>
            </div>
            <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.16em] text-soft-white/55 md:text-xs">
              {hero.microcopy}
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-soft-white/20 pt-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-soft-white/65 md:text-[11px]">
              <span>Strategy first</span>
              <span className="text-lime">•</span>
              <span>Premium production</span>
              <span className="text-lime">•</span>
              <span>One partner</span>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
