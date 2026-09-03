import { Link } from "@tanstack/react-router";

import { Section, SectionHeading } from "@/components/layout/section";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/content/home";

export function ServicesList() {
  return (
    <Section id="services" width="wide" divided aria-labelledby="services-title">
      <SectionHeading
        id="services-title"
        eyebrow="Services"
        title="Four disciplines, one continuous argument."
        intro="Engagements are modular. Most clients start with strategy and stay for the build."
      />

      <ul className="mt-16 md:mt-20">
        {services.map((service, i) => (
          <Reveal as="li" key={service.id} delay={i * 60} className="hairline group">
            <div className="grid gap-6 py-10 md:grid-cols-12 md:gap-10 md:py-12">
              <p className="eyebrow md:col-span-1">{service.index}</p>

              <h3 className="display text-3xl transition-colors group-hover:text-clay md:col-span-4 md:text-4xl">
                {service.title}
              </h3>

              <p className="text-base leading-relaxed text-muted-foreground md:col-span-4">
                {service.summary}
              </p>

              <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground md:col-span-3">
                {service.capabilities.map((capability) => (
                  <li key={capability} className="border border-border px-3 py-1.5">
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
          className="link-underline hairline mt-4 inline-block pt-10 text-sm font-semibold tracking-[0.14em] uppercase"
        >
          Explore all services
        </Link>
      </Reveal>
    </Section>
  );
}
