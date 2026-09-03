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
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-border bg-background/92 backdrop-blur-md" : "bg-background",
      )}
    >
      <Container className="flex h-20 items-center justify-between gap-6 md:h-24">
        <Wordmark />

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild variant="ink" size="lg" className="hidden lg:inline-flex">
            <Link to={primaryCta.to}>{primaryCta.label}</Link>
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center border border-border text-foreground transition-colors hover:border-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      <div
        id="mobile-navigation"
        hidden={!open}
        className="fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto border-t border-border bg-background lg:hidden"
      >
        <Container className="flex flex-col gap-2 py-10">
          {navigation.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: item.to === "/" }}
              className="display border-b border-border py-5 text-4xl text-foreground/80 transition-colors hover:text-foreground data-[status=active]:text-foreground"
            >
              <span className="eyebrow me-4 align-middle">{String(i + 1).padStart(2, "0")}</span>
              {item.label}
            </Link>
          ))}
          <Button asChild variant="ink" size="xl" className="mt-8 w-full">
            <Link to={primaryCta.to} onClick={() => setOpen(false)}>
              {primaryCta.label}
            </Link>
          </Button>
        </Container>
      </div>
    </header>
  );
}
