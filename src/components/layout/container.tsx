import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** `wide` for full-bleed editorial grids, `narrow` for reading columns. */
  width?: "default" | "wide" | "narrow";
};

const widths = {
  default: "max-w-[80rem]",
  wide: "max-w-[96rem]",
  narrow: "max-w-[48rem]",
} as const;

export function Container({ children, className, as: Tag = "div", width = "default" }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full px-6 md:px-10 lg:px-14", widths[width], className)}>
      {children}
    </Tag>
  );
}
