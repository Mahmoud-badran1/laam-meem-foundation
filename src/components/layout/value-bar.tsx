import { Link } from "@tanstack/react-router";

export function ValueBar() {
  return (
    <div
      className="sticky top-0 z-[90] border-b border-carbon/10 bg-soft-white text-carbon"
      role="region"
      aria-label="Winter Sale promotion"
    >
      <Link
        to="/contact"
        className="flex h-8 items-center justify-center px-4 text-center text-[9px] font-medium uppercase tracking-[0.12em] transition-opacity hover:opacity-60 sm:text-[10px]"
      >
        <strong className="me-1.5 font-semibold">Winter Sale — 30% Off</strong>
        <span className="hidden sm:inline">on selected marketing packages</span>
      </Link>
    </div>
  );
}
