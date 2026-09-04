import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { hero } from "@/content/home";
import { primaryCta, secondaryCta } from "@/content/site";

export function Hero() {
  return (
    <section className="relative isolate min-h-[72svh] overflow-hidden border-b border-border">
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

      <Container width="wide" className="flex min-h-[72svh] items-center py-24 md:py-32 lg:py-36">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow text-lime">{hero.eyebrow}</p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="display mt-8 max-w-3xl text-balance text-[clamp(3.1rem,6.7vw,7.4rem)] text-soft-white">
              {hero.headline[0]}
              <br />
              <span className="text-lime">{hero.headline[1]}</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-soft-white/78 md:text-lg lg:text-xl">
              {hero.body}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
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
            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-soft-white/20 pt-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-soft-white/65 md:text-[11px]">
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
