import { Link } from "@tanstack/react-router";

import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/ui/reveal";
import { about } from "@/content/home";

export function AboutPhilosophy() {
  return (
    <Section id="about" width="wide" aria-labelledby="about-title">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <img
            src={about.image.src}
            alt={about.image.alt}
            width={about.image.width}
            height={about.image.height}
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full object-cover"
          />
        </Reveal>

        <div className="lg:col-span-7 lg:pt-10">
          <Reveal>
            <p className="eyebrow">{about.eyebrow}</p>
            <h2 id="about-title" className="display mt-6 text-balance text-4xl md:text-5xl lg:text-6xl">
              {about.title}
            </h2>
          </Reveal>

          <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            {about.paragraphs.map((paragraph, i) => (
              <Reveal key={paragraph.slice(0, 24)} delay={80 + i * 80} as="p">
                {paragraph}
              </Reveal>
            ))}
          </div>

          <Reveal delay={240}>
            <ul className="mt-10 space-y-4">
              {about.points.map((point) => (
                <li key={point} className="hairline flex gap-4 pt-4 text-sm">
                  <span aria-hidden="true" className="mt-2 h-px w-6 shrink-0 bg-clay" />
                  {point}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="link-underline mt-10 inline-block text-sm font-semibold tracking-[0.14em] uppercase"
            >
              More about the studio
            </Link>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
