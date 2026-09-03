import { Link } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { hero } from "@/content/home";
import { primaryCta, secondaryCta } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 md:pt-16 md:pb-28">
      <Container width="wide">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow">{hero.eyebrow}</p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="display mt-8 text-[clamp(3rem,11vw,8.5rem)]">
                {hero.headline[0]}
                <br />
                <span className="text-clay">{hero.headline[1]}</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {hero.body}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild variant="ink" size="xl">
                  <Link to={primaryCta.to}>{primaryCta.label}</Link>
                </Button>
                <Button asChild variant="quiet" size="xl">
                  <Link to={secondaryCta.to}>{secondaryCta.label}</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={200} className="relative">
              <img
                src={hero.image.src}
                alt={hero.image.alt}
                width={hero.image.width}
                height={hero.image.height}
                fetchPriority="high"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
              <span
                aria-hidden="true"
                className="absolute -bottom-5 -end-5 hidden h-28 w-28 border border-clay md:block"
              />
            </Reveal>
          </div>
        </div>

        <div className="hairline mt-16 flex items-center gap-3 pt-6 text-xs text-muted-foreground md:mt-24">
          <ArrowDown className="size-4" aria-hidden="true" />
          <span className="tracking-[0.18em] uppercase">Scroll</span>
        </div>
      </Container>
    </section>
  );
}
