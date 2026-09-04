import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/ui/reveal";
import { transformation } from "@/content/home";

export function Transformation() {
  return (
    <Section id="transformation" width="wide" aria-labelledby="transformation-title">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <p className="eyebrow">{transformation.eyebrow}</p>
          <h2
            id="transformation-title"
            className="display mt-6 max-w-4xl text-balance text-4xl md:text-6xl lg:text-7xl"
          >
            {transformation.title}
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {transformation.intro}
          </p>
        </Reveal>

        <div className="grid gap-8 lg:col-span-5">
          <Reveal delay={100}>
            <div className="border border-border p-6 md:p-8">
              <p className="eyebrow text-muted-foreground">What we often find</p>
              <ul className="mt-6 space-y-4">
                {transformation.problems.map((item) => (
                  <li key={item} className="flex gap-4 border-t border-border pt-4 text-sm leading-relaxed">
                    <span className="text-lime">−</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="bg-lime p-6 text-carbon md:p-8">
              <p className="eyebrow text-carbon/60">What changes</p>
              <ul className="mt-6 space-y-4">
                {transformation.outcomes.map((item) => (
                  <li key={item} className="flex gap-4 border-t border-carbon/20 pt-4 text-sm font-medium leading-relaxed">
                    <span>+</span>
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
