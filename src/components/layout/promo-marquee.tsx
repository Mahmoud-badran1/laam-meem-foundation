import { Link } from "@tanstack/react-router";

const promoItems = Array.from({ length: 8 }, (_, index) => index);

export function PromoMarquee() {
  return (
    <div className="overflow-hidden bg-white text-carbon" role="region" aria-label="Winter Sale promotion">
      <Link
        to="/contact"
        className="group block border-b border-carbon/10 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-carbon"
      >
        <div className="promo-marquee flex w-max min-w-full items-center whitespace-nowrap">
          {[0, 1].map((track) => (
            <div key={track} className="flex shrink-0 items-center" aria-hidden={track === 1 ? true : undefined}>
              {promoItems.map((item) => (
                <div key={`${track}-${item}`} className="flex items-center gap-5 px-5 sm:gap-7 sm:px-7">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] sm:text-[11px]">
                    Winter Sale
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-[0.16em] opacity-80 sm:text-[11px]">
                    30% Off
                  </span>
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-carbon/70" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
}
