import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Reveal } from "@/components/ui/reveal";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Vertical rhythm. */
  spacing?: "default" | "tight" | "loose";
  width?: "default" | "wide" | "narrow";
  /** Adds a hairline rule at the top of the section. */
  divided?: boolean;
  "aria-labelledby"?: string;
};

const spacings = {
  tight: "py-16 md:py-24 lg:py-28",
  default: "py-24 md:py-36 lg:py-44",
  loose: "py-32 md:py-44 lg:py-56",
} as const;

export function Section({
  id,
  children,
  className,
  spacing = "default",
  width = "default",
  divided = false,
  ...rest
}: SectionProps) {
  return (
    <section id={id} className={cn(spacings[spacing], className)} {...rest}>
      <Container width={width} className={cn(divided && "hairline pt-20 md:pt-28")}>
        {children}
      </Container>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  id?: string;
  className?: string;
  align?: "start" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
  className,
  align = "start",
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <p className="eyebrow mb-7">{eyebrow}</p> : null}
      <h2 id={id} className="display text-balance text-4xl md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
