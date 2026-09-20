import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/ui/reveal";
import { transformation } from "@/content/home";

export function Transformation() {
  return (
    <Section id="transformation" width="wide" spacing="loose" aria-labelledby="transformation-title">
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-7">
          <p className="eyebrow text-lime">{transformation.eyebrow}</p>
          <h2
            id="transformation-title"
            className="display mt-8 max-w-5xl text-balance text-[clamp(3rem,6.5vw,7.5rem)] leading-[0.92]"
          >
            {transformation.title}
          </h2>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {transformation.intro}
          </p>
        </Reveal>

        <div className="lg:col-span-5 lg:pt-20">
          <Reveal delay={100}>
            <div className="border-t border-border pt-6">
              <p className="eyebrow">Before</p>
              <ul className="mt-7 space-y-5">
                {transformation.problems.map((item) => (
                  <li key={item} className="grid grid-cols-[24px_1fr] gap-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                    <span className="text-lime">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-14 border-t border-lime pt-6">
              <p className="eyebrow text-lime">After Laam Meem</p>
              <ul className="mt-7 space-y-5">
                {transformation.outcomes.map((item) => (
                  <li key={item} className="grid grid-cols-[24px_1fr] gap-4 text-sm font-medium leading-relaxed md:text-base">
                    <span className="text-lime">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
