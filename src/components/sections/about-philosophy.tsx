import { Link } from "@tanstack/react-router";

import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/ui/reveal";
import { about } from "@/content/home";

export function AboutPhilosophy() {
  return (
    <Section id="about" width="wide" aria-labelledby="about-title" className="bg-soft-white text-carbon">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <img
              src={about.image.src}
              alt={about.image.alt}
              width={about.image.width}
              height={about.image.height}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover grayscale"
            />
            <div className="absolute bottom-0 left-0 bg-lime px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-carbon">
              Vienna-based / built for growth
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7 lg:pt-8">
          <Reveal>
            <p className="eyebrow text-carbon/60">{about.eyebrow}</p>
            <h2 id="about-title" className="display mt-6 text-balance text-4xl md:text-6xl lg:text-7xl">
              {about.title}
            </h2>
          </Reveal>

          <div className="mt-8 space-y-6 text-base leading-relaxed text-carbon/70 md:text-lg">
            {about.paragraphs.map((paragraph, i) => (
              <Reveal key={paragraph.slice(0, 24)} delay={80 + i * 80} as="p">
                {paragraph}
              </Reveal>
            ))}
          </div>

          <Reveal delay={240}>
            <ul className="mt-10 space-y-4">
              {about.points.map((point) => (
                <li key={point} className="flex gap-4 border-t border-carbon/20 pt-4 text-sm font-medium">
                  <span aria-hidden="true" className="mt-2 h-px w-6 shrink-0 bg-carbon" />
                  {point}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-10 inline-block border-b border-carbon pb-1 text-sm font-semibold tracking-[0.14em] uppercase"
            >
              Why Laam Meem
            </Link>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
