import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";

import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { freeMarketingReview } from "@/content/home";
import { primaryCta } from "@/content/site";

export function FreeMarketingReview() {
  return (
    <Section id="free-review" width="wide" aria-labelledby="free-review-title" className="bg-lime text-carbon">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-end">
        <Reveal className="lg:col-span-7">
          <p className="eyebrow text-carbon/60">{freeMarketingReview.eyebrow}</p>
          <h2 id="free-review-title" className="display mt-6 max-w-4xl text-balance text-4xl md:text-6xl lg:text-7xl">
            {freeMarketingReview.title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-carbon/70 md:text-lg">
            {freeMarketingReview.body}
          </p>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-5">
          <div className="border border-carbon/20 bg-soft-white p-6 text-carbon md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.14em]">During the call, we will</p>
            <ul className="mt-6 space-y-4">
              {freeMarketingReview.points.map((point) => (
                <li key={point} className="flex gap-3 border-t border-carbon/15 pt-4 text-sm leading-relaxed">
                  <Check className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="carbon" size="xl" className="mt-8 w-full">
              <Link to={primaryCta.to}>
                {primaryCta.label}
                <ArrowUpRight className="ml-2 size-4" aria-hidden="true" />
              </Link>
            </Button>
            <p className="mt-4 text-center text-xs uppercase tracking-[0.12em] text-carbon/55">
              30 minutes · No obligation · Vienna & remote
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
