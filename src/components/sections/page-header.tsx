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
    <Container width="wide" className="pt-12 pb-16 md:pt-20 md:pb-24">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display mt-6 max-w-4xl text-balance text-[clamp(2.75rem,8vw,6rem)]">
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
