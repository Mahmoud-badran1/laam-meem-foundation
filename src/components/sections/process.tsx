import { Section, SectionHeading } from "@/components/layout/section";
import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/content/home";

export function Process() {
  return (
    <Section id="process" width="wide" spacing="loose" className="bg-soft-white text-carbon" aria-labelledby="process-title">
      <SectionHeading
        id="process-title"
        eyebrow="Our approach"
        title="Perception before production."
        intro="We think before we create. Every engagement moves from understanding how the brand is seen to building what should be seen next."
      />

      <ol className="mt-20 grid gap-px bg-carbon/15 md:mt-28 md:grid-cols-5">
        {processSteps.map((step, i) => (
          <Reveal as="li" key={step.step} delay={i * 80} className="bg-soft-white p-6 md:min-h-80 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-carbon/45">{step.step}</p>
            <h3 className="display mt-12 text-3xl md:text-4xl">{step.title}</h3>
            <p className="mt-6 text-sm leading-relaxed text-carbon/65">{step.body}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
