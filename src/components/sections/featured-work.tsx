import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Section, SectionHeading } from "@/components/layout/section";
import { Reveal } from "@/components/ui/reveal";
import { featuredProjects, type Project } from "@/content/home";
import { cn } from "@/lib/utils";

function ProjectCard({ project, feature }: { project: Project; feature?: boolean }) {
  return (
    <article className={cn("group", feature && "md:col-span-2")}>
      <Link to="/work" className="block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
        <div className="overflow-hidden bg-muted">
          <img
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            loading="lazy"
            decoding="async"
            className={cn(
              "w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]",
              feature ? "aspect-[16/9]" : "aspect-[4/3]",
            )}
          />
        </div>

        <div className="mt-6 flex items-start justify-between gap-6">
          <div>
            <p className="eyebrow">
              {project.client} — {project.year}
            </p>
            <h3
              className={cn(
                "display mt-3 text-balance transition-colors group-hover:text-clay",
                feature ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl",
              )}
            >
              {project.title}
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {project.excerpt}
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
              {project.disciplines.map((discipline) => (
                <li key={discipline} className="after:ms-3 after:content-['/'] last:after:content-['']">
                  {discipline}
                </li>
              ))}
            </ul>
          </div>
          <ArrowUpRight
            aria-hidden="true"
            className="mt-1 size-6 shrink-0 text-muted-foreground transition-transform duration-500 group-hover:-translate-y-1 group-hover:text-clay rtl:-scale-x-100"
          />
        </div>
      </Link>
    </article>
  );
}

export function FeaturedWork() {
  const [feature, ...rest] = featuredProjects;
  if (!feature) return null;

  return (
    <Section id="work" width="wide" className="bg-secondary/40" aria-labelledby="work-title">
      <SectionHeading
        id="work-title"
        eyebrow="Selected work"
        title="Projects that had to hold up in the real world."
      />

      <div className="mt-16 grid gap-14 md:grid-cols-2 md:gap-x-10 md:gap-y-20">
        <Reveal className="md:col-span-2">
          <ProjectCard project={feature} feature />
        </Reveal>
        {rest.map((project, i) => (
          <Reveal key={project.id} delay={i * 100}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <Link
          to="/work"
          className="link-underline mt-16 inline-block text-sm font-semibold tracking-[0.14em] uppercase"
        >
          View the full archive
        </Link>
      </Reveal>
    </Section>
  );
}
