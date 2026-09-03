import { Link } from "@tanstack/react-router";
import { brand } from "@/content/site";
import { cn } from "@/lib/utils";
import logoBlack from "@/assets/laam-meem-logo-black.png";
import logoLight from "@/assets/laam-meem-logo-light.png";

export function Wordmark({
  className,
  variant = "light",
}: {
  className?: string;
  variant?: "black" | "light";
}) {
  return (
    <Link
      to="/"
      aria-label={`${brand.name} — home`}
      className={cn("inline-flex shrink-0 transition-opacity hover:opacity-70", className)}
    >
      <img
        src={variant === "light" ? logoLight : logoBlack}
        alt={brand.name}
        className="h-auto w-36 md:w-44"
        width="1328"
        height="376"
      />
    </Link>
  );
}
