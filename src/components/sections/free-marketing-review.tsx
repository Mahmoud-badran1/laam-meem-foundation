import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";

import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { freeMarketingReview } from "@/content/home";
import { primaryCta } from "@/content/site";

export function FreeMarketingReview() {
  return (
    <Section id="free-review" width="wide" spacing="loose" aria-labelledby="free-review-title" className="bg-soft-white text-carbon">
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-20 lg:items-end">
        <Reveal className="lg:col-span-7">
          <p className="eyebrow text-carbon/50">{freeMarketingReview.eyebrow}</p>
          <h2 id="free-review-title" className="display mt-8 max-w-4xl text-balance text-[clamp(3rem,6vw,7rem)]">
            {freeMarketingReview.title}
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-carbon/65 md:text-xl">
            {freeMarketingReview.body}
          </p>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-5">
          <div className="border-t border-carbon pt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em]">What we review</p>
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
            <p className="mt-4 text-center text-[10px] uppercase tracking-[0.14em] text-carbon/45">
              30 minutes · No obligation · Vienna & remote
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
