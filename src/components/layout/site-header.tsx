import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Globe2, Menu, X } from "lucide-react";

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
        "sticky top-8 z-[80] border-b border-carbon/10 bg-soft-white text-carbon transition-shadow duration-300",
        scrolled && "shadow-[0_8px_30px_rgba(0,0,0,0.05)]",
      )}
    >
      <Container
        width="wide"
        className="relative grid h-20 max-w-none grid-cols-[1fr_auto_1fr] items-center px-4 md:h-24 md:px-7 lg:px-10"
      >
        <div className="justify-self-start">
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-11 items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-carbon transition-opacity hover:opacity-55"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            <span className="hidden sm:inline">{open ? "Close" : "Menu"}</span>
          </button>
        </div>

        <Wordmark variant="black" className="justify-self-center" />

        <div className="flex items-center justify-self-end gap-4 md:gap-6">
          <div className="hidden items-center gap-2 text-[11px] font-medium uppercase tracking-[0.1em] text-carbon/65 md:flex">
            <Globe2 className="size-4" aria-hidden="true" />
            <span>EN</span>
            <span className="text-carbon/25">/</span>
            <span>Vienna</span>
          </div>
          <Button asChild variant="carbon" size="lg" className="hidden sm:inline-flex">
            <Link to={primaryCta.to}>{primaryCta.label}</Link>
          </Button>
        </div>
      </Container>

      <div
        id="site-menu"
        hidden={!open}
        className="fixed inset-x-0 top-28 bottom-0 z-[70] overflow-y-auto border-t border-border bg-carbon text-soft-white md:top-32"
      >
        <Container
          width="wide"
          className="flex min-h-full max-w-none flex-col justify-between px-4 py-10 md:px-7 md:py-14 lg:px-10 lg:py-16"
        >
          <nav aria-label="Primary navigation" className="grid gap-0">
            {navigation.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                className="group flex items-baseline justify-between border-b border-soft-white/15 py-5 text-soft-white/70 transition-colors hover:text-soft-white data-[status=active]:text-soft-white md:py-6"
              >
                <span className="display text-[clamp(2.6rem,7vw,7rem)]">{item.label}</span>
                <span className="eyebrow transition-colors group-hover:text-lime">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </Link>
            ))}
          </nav>

          <div className="mt-12 grid gap-8 border-t border-soft-white/15 pt-8 md:grid-cols-2 md:items-end">
            <div>
              <p className="eyebrow text-lime">Laam Meem / Vienna</p>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-soft-white/55 md:text-base">
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
