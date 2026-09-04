import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";
import { trustSignals } from "@/content/home";

export function TrustStrip() {
  return (
    <section aria-label="Laam Meem capabilities" className="border-b border-carbon/10 bg-soft-white text-carbon">
      <Container width="wide" className="py-7 md:py-9">
        <div className="grid items-center gap-6 md:grid-cols-[auto_1fr] md:gap-10">
          <Reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-carbon/55 md:text-[11px]">
              Built around
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4 md:gap-8">
            {trustSignals.map((signal, index) => (
              <Reveal key={signal.label} delay={index * 60}>
                <div className="flex items-center gap-3 border-s border-carbon/15 ps-4 md:ps-5">
                  <span className="text-[10px] font-semibold tracking-[0.16em] text-carbon/35">{signal.value}</span>
                  <span className="text-xs font-semibold uppercase tracking-[0.11em] md:text-sm">{signal.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
