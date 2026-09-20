import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/ui/reveal";

const proofPoints = [
  { value: "4", label: "connected pillars — Strategy, Create, Manage and Grow" },
  { value: "5", label: "stages from perception and strategy through production and distribution" },
  { value: "30 min", label: "free presence review focused on the highest-value brand gaps" },
  { value: "Vienna", label: "based locally, built for ambitious brands with European standards" },
] as const;

export function AuthorityProof() {
  return (
    <Section
      id="authority"
      width="wide"
      spacing="loose"
      className="bg-carbon text-soft-white"
      aria-labelledby="authority-title"
    >
      <div className="grid gap-20 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow text-lime">Why us</p>
            <h2
              id="authority-title"
              className="display mt-10 max-w-5xl text-balance text-[clamp(3rem,6.8vw,7.5rem)] leading-[0.9]"
            >
              Organized creativity. Built around the brand, not the post.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-12 max-w-2xl text-lg leading-relaxed text-soft-white/62 md:text-xl">
              We connect strategic thinking, creative direction and execution under one system so every touchpoint reinforces the same perception.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:col-span-5 lg:pt-20">
          {proofPoints.map((point, index) => (
            <Reveal key={point.value} delay={80 + index * 70}>
              <div className="border-t border-soft-white/18 pt-5">
                <p className="display text-[clamp(3rem,5vw,5.6rem)] leading-none text-lime">
                  {point.value}
                </p>
                <p className="mt-5 max-w-xs text-sm leading-snug text-soft-white/60 md:text-base">
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
