import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  intro?: string;
};

/** Shared editorial header for interior pages. */
export function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <Container width="wide" className="pt-20 pb-24 md:pt-28 md:pb-36 lg:pt-36 lg:pb-44">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display mt-6 max-w-4xl text-balance text-[clamp(3rem,7vw,7.5rem)] leading-[0.92]">
          {title}
        </h1>
      </Reveal>
      {intro ? (
        <Reveal delay={100}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
        </Reveal>
      ) : null}
    </Container>
  );
}
