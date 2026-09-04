import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { hero } from "@/content/home";
import { primaryCta, secondaryCta } from "@/content/site";

export function Hero() {
  return (
    <section className="aurora-hero relative isolate overflow-hidden border-b border-border">
      <div aria-hidden="true" className="aurora-hero__signal absolute inset-0 -z-20" />
      <div aria-hidden="true" className="aurora-hero__grid absolute inset-0 -z-10" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-carbon/95 via-carbon/62 to-carbon/28" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-carbon to-transparent" />

      <Container width="wide" className="relative flex min-h-[78svh] flex-col justify-between py-24 md:py-32 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-10 xl:col-span-9">
            <Reveal>
              <p className="eyebrow text-lime">{hero.eyebrow}</p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="display mt-10 max-w-6xl text-[clamp(3.7rem,9vw,9.5rem)] text-soft-white">
                {hero.headline[0]}
                <br />
                <span className="text-lime">{hero.headline[1]}</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-12 max-w-2xl text-lg leading-relaxed text-soft-white/72 md:text-xl lg:mt-14">
                {hero.body}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-12">
                <Button asChild variant="ink" size="xl">
                  <Link to={primaryCta.to}>
                    {primaryCta.label}
                    <ArrowUpRight className="ml-2 size-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="quiet" size="xl" className="border-soft-white/30 bg-carbon/20 backdrop-blur-sm">
                  <Link to={secondaryCta.to}>{secondaryCta.label}</Link>
                </Button>
              </div>
              <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.16em] text-soft-white/48 md:text-xs">
                {hero.microcopy}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-24 grid gap-8 border-t border-soft-white/18 pt-7 text-xs uppercase tracking-[0.16em] text-soft-white/55 md:mt-32 md:grid-cols-3 md:items-end">
          <div className="flex items-center gap-3">
            <ArrowDown className="size-4" aria-hidden="true" />
            <span>Explore Laam Meem</span>
          </div>
          <div>
            <span className="block text-lime">01 / Strategy first</span>
            <span className="mt-2 block normal-case tracking-normal text-soft-white/52">We define the business outcome before the content.</span>
          </div>
          <div>
            <span className="block text-lime">02 / One standard</span>
            <span className="mt-2 block normal-case tracking-normal text-soft-white/52">Strategy, production and execution under one direction.</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
