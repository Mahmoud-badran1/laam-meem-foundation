import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/ui/reveal";

const proofPoints = [
  {
    value: "6",
    label: "connected marketing capabilities — from strategy and social media to production, events, branding and digital",
  },
  {
    value: "1",
    label: "coordinated partner from positioning and creative direction through execution",
  },
  {
    value: "30 min",
    label: "free marketing review to identify the highest-priority gaps in your current presence",
  },
  {
    value: "Vienna",
    label: "based locally, with a premium standard designed for ambitious businesses and organisations",
  },
] as const;

export function AuthorityProof() {
  return (
    <Section
      id="authority"
      width="wide"
      spacing="loose"
      className="bg-lime text-carbon"
      aria-labelledby="authority-title"
    >
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-carbon/65">Our promise</p>
            <h2
              id="authority-title"
              className="display mt-10 max-w-5xl text-balance text-[clamp(3.2rem,7vw,7.8rem)] leading-[0.9]"
            >
              Built to turn attention into trust — and trust into growth.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-12 max-w-2xl text-lg leading-relaxed text-carbon/78 md:text-2xl">
              We bring strategy, creative direction and execution under one standard so your business looks as professional as it really is — and becomes easier for the right clients to choose.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:col-span-5 lg:pt-20">
          {proofPoints.map((point, index) => (
            <Reveal key={point.value} delay={80 + index * 70}>
              <div className="border-t border-carbon/20 pt-5">
                <p className="display text-[clamp(3.2rem,5vw,5.8rem)] leading-none text-soft-white">
                  {point.value}
                </p>
                <p className="mt-5 max-w-xs text-sm font-medium leading-snug text-carbon/82 md:text-base">
                  {point.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
