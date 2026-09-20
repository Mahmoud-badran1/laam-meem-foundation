import { Link } from "@tanstack/react-router";

import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/ui/reveal";
import { about } from "@/content/home";

export function AboutPhilosophy() {
  return (
    <Section id="about" width="wide" spacing="loose" aria-labelledby="about-title">
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-7 lg:order-2">
          <Reveal>
            <p className="eyebrow text-lime">{about.eyebrow}</p>
            <h2 id="about-title" className="display mt-8 max-w-5xl text-balance text-[clamp(3rem,6.4vw,7.4rem)]">
              {about.title}
            </h2>
          </Reveal>

          <div className="mt-10 max-w-3xl space-y-7 text-base leading-relaxed text-muted-foreground md:text-xl">
            {about.paragraphs.map((paragraph, i) => (
              <Reveal key={paragraph.slice(0, 24)} delay={80 + i * 80} as="p">
                {paragraph}
              </Reveal>
            ))}
          </div>

          <Reveal delay={240}>
            <ul className="mt-12 grid gap-x-10 gap-y-4 sm:grid-cols-2">
              {about.points.map((point) => (
                <li key={point} className="border-t border-border pt-4 text-sm font-medium">
                  <span aria-hidden="true" className="me-3 text-lime">—</span>
                  {point}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="link-underline mt-12 inline-block text-sm font-semibold uppercase tracking-[0.14em]"
            >
              The thinking behind Laam Meem
            </Link>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-5 lg:order-1 lg:pt-20">
          <div className="relative overflow-hidden">
            <img
              src={about.image.src}
              alt={about.image.alt}
              width={about.image.width}
              height={about.image.height}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover grayscale"
            />
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-carbon/90 to-transparent" />
            <div className="absolute bottom-5 left-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-soft-white">
              Creator 65% / Ruler 35%
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
