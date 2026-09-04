import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";
import { trustSignals } from "@/content/home";

export function TrustStrip() {
  return (
    <section aria-label="Laam Meem capabilities" className="border-y border-border bg-secondary/40">
      <Container width="wide" className="py-8 md:py-10">
        <div className="grid grid-cols-2 gap-px bg-border md:grid-cols-4">
          {trustSignals.map((signal, i) => (
            <Reveal key={signal.label} delay={i * 60} className="bg-background p-5 md:p-7">
              <span className="eyebrow text-lime">{signal.value}</span>
              <p className="mt-3 text-sm font-medium uppercase tracking-[0.08em]">{signal.label}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
