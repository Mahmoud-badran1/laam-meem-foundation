import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Wordmark } from "./wordmark";
import { Container } from "./container";
import { navigation, primaryCta } from "@/content/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    if (open) window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-8 z-[80] transition-colors duration-300",
        scrolled || open
          ? "border-b border-border bg-background/96 backdrop-blur-md"
          : "bg-background",
      )}
    >
      <Container
        width="wide"
        className="flex h-20 max-w-none items-center justify-between gap-6 px-4 md:h-24 md:px-6 lg:px-8"
      >
        <div className="flex items-center gap-4 md:gap-6">
          <Wordmark />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-10 items-center gap-2 border-s border-border ps-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground md:ps-6"
          >
            {open ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
            <span>{open ? "Close" : "Menu"}</span>
          </button>
        </div>

        <Button asChild variant="ink" size="lg" className="hidden sm:inline-flex">
          <Link to={primaryCta.to}>{primaryCta.label}</Link>
        </Button>
      </Container>

      <div
        id="site-menu"
        hidden={!open}
        className="fixed inset-x-0 top-28 bottom-0 z-[70] overflow-y-auto border-t border-border bg-background md:top-32"
      >
        <Container
          width="wide"
          className="flex min-h-full max-w-none flex-col justify-between px-4 py-10 md:px-6 md:py-14 lg:px-8 lg:py-16"
        >
          <nav aria-label="Primary navigation" className="grid gap-0">
            {navigation.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                className="group flex items-baseline justify-between border-b border-border py-5 text-foreground/72 transition-colors hover:text-foreground data-[status=active]:text-foreground md:py-6"
              >
                <span className="display text-[clamp(2.6rem,7vw,7rem)]">{item.label}</span>
                <span className="eyebrow transition-colors group-hover:text-lime">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </Link>
            ))}
          </nav>

          <div className="mt-12 grid gap-8 border-t border-border pt-8 md:grid-cols-2 md:items-end">
            <div>
              <p className="eyebrow text-lime">Laam Meem / Vienna</p>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
                Strategy, content, events and digital experiences designed to make strong businesses easier to trust and harder to ignore.
              </p>
            </div>
            <div className="md:text-end">
              <Button asChild variant="ink" size="xl">
                <Link to={primaryCta.to} onClick={() => setOpen(false)}>
                  {primaryCta.label}
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
