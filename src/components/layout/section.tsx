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
  tight: "py-14 md:py-20",
  default: "py-20 md:py-28 lg:py-36",
  loose: "py-28 md:py-40 lg:py-48",
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
      <Container width={width} className={cn(divided && "hairline pt-16 md:pt-24")}>
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
      {eyebrow ? <p className="eyebrow mb-5">{eyebrow}</p> : null}
      <h2 id={id} className="display text-balance text-4xl md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
