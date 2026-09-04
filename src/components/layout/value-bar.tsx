const strengths = [
  "Sales-focused marketing",
  "Strategy before content",
  "Premium creative execution",
  "One partner from idea to growth",
] as const;

export function ValueBar() {
  return (
    <div
      className="sticky top-0 z-[70] border-b border-carbon/15 bg-white text-carbon"
      role="region"
      aria-label="Laam Meem agency strengths"
    >
      <div className="mx-auto flex h-8 max-w-[1600px] items-center justify-center overflow-hidden px-4 sm:px-6">
        <div className="flex w-full items-center justify-center gap-4 whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.16em] sm:gap-7 sm:text-[10px] lg:justify-between">
          {strengths.map((strength, index) => (
            <div key={strength} className={index > 1 ? "hidden lg:flex lg:items-center lg:gap-7" : "flex items-center gap-4 sm:gap-7"}>
              <span>{strength}</span>
              {index < strengths.length - 1 ? (
                <span aria-hidden="true" className="hidden h-1 w-1 rounded-full bg-carbon/45 sm:block" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
