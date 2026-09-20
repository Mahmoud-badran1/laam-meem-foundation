import { Link } from "@tanstack/react-router";

import { Section, SectionHeading } from "@/components/layout/section";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/content/home";

export function ServicesList() {
  return (
    <Section id="services" width="wide" spacing="loose" divided aria-labelledby="services-title">
      <SectionHeading
        id="services-title"
        eyebrow="What we do"
        title="Four pillars. One stronger perception."
        intro="Strategy, creation, management and growth work as one system — because the brand should feel consistent wherever people meet it."
      />

      <ul className="mt-20 md:mt-28">
        {services.map((service, i) => (
          <Reveal as="li" key={service.id} delay={i * 70} className="group border-t border-border">
            <div className="grid gap-8 py-12 md:grid-cols-12 md:gap-10 md:py-16">
              <p className="eyebrow text-lime md:col-span-1">{service.index}</p>

              <h3 className="display text-[clamp(2.4rem,4.5vw,5.2rem)] transition-colors group-hover:text-lime md:col-span-4">
                {service.title}
              </h3>

              <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:col-span-4 md:text-lg">
                {service.summary}
              </p>

              <ul className="flex flex-col gap-2 text-xs uppercase tracking-[0.12em] text-muted-foreground md:col-span-3">
                {service.capabilities.map((capability) => (
                  <li key={capability} className="border-b border-border pb-2">
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={120}>
        <Link
          to="/services"
          className="link-underline mt-10 inline-block text-sm font-semibold uppercase tracking-[0.14em]"
        >
          Explore the full capability
        </Link>
      </Reveal>
    </Section>
  );
}
