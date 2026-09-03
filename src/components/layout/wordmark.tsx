import { Link } from "@tanstack/react-router";
import { brand } from "@/content/site";
import { cn } from "@/lib/utils";

/** Typographic wordmark. Swap for an SVG logo here when one exists. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      aria-label={`${brand.name} — home`}
      className={cn(
        "group inline-flex items-baseline gap-2 text-foreground transition-opacity hover:opacity-70",
        className,
      )}
    >
      <span className="display text-2xl leading-none tracking-[-0.01em] md:text-[1.75rem]">
        {brand.name}
      </span>
      <span aria-hidden="true" className="hidden h-1.5 w-1.5 bg-clay sm:block" />
    </Link>
  );
}
