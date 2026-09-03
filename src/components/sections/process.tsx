import { Section, SectionHeading } from "@/components/layout/section";
import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/content/home";

export function Process() {
  return (
    <Section id="process" width="wide" divided aria-labelledby="process-title">
      <SectionHeading
        id="process-title"
        eyebrow="Process"
        title="A short path from question to system."
        intro="Four steps, typically eight to sixteen weeks, always with a named lead."
      />

      <ol className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {processSteps.map((step, i) => (
          <Reveal as="li" key={step.step} delay={i * 90} className="hairline pt-6">
            <p className="display text-5xl text-clay md:text-6xl">{step.step}</p>
            <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
