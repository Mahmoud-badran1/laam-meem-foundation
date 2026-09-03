import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/content/home";

export function Testimonials() {
  return (
    <Section width="wide" spacing="tight" aria-label="Client testimonials">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        {testimonials.map((testimonial, i) => (
          <Reveal key={testimonial.quote.slice(0, 24)} delay={i * 100}>
            <figure className="hairline pt-8">
              <blockquote className="display text-balance text-2xl leading-tight md:text-3xl">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-8 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{testimonial.name}</span>
                <span className="mx-2" aria-hidden="true">
                  —
                </span>
                {testimonial.role}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
