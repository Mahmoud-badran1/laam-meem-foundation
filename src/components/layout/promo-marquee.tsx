const strengths = [
  "Sales-focused marketing",
  "Strategy before content",
  "Premium creative execution",
  "One partner from idea to growth",
] as const;

export function PromoMarquee() {
  return (
    <div className="overflow-hidden border-b border-carbon/10 bg-soft-white text-carbon" role="region" aria-label="Laam Meem agency strengths">
      <div className="promo-marquee flex w-max min-w-full items-center whitespace-nowrap py-2">
        {[0, 1].map((track) => (
          <div key={track} className="flex shrink-0 items-center" aria-hidden={track === 1 ? true : undefined}>
            {strengths.map((strength) => (
              <div key={`${track}-${strength}`} className="flex items-center gap-5 px-6 sm:gap-7 sm:px-8">
                <span className="text-[10px] font-medium uppercase tracking-[0.14em] sm:text-[11px]">
                  {strength}
                </span>
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-carbon/45" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
