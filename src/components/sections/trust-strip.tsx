import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";
import { trustSignals } from "@/content/home";

export function TrustStrip() {
  return (
    <section aria-label="Studio credentials" className="border-y border-border bg-secondary/40">
      <Container width="wide" className="py-10 md:py-14">
        <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {trustSignals.map((signal, i) => (
            <Reveal key={signal.label} delay={i * 80} className="text-start">
              <dt className="eyebrow order-2">{signal.label}</dt>
              <dd className="display mb-2 text-4xl md:text-5xl">{signal.value}</dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
