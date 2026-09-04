import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const messages = [
  "Winter Sale — 30% Off on selected marketing packages",
  "Strategy before content. Business outcomes before vanity metrics.",
  "Premium creative execution built to strengthen trust and perception.",
  "One marketing partner from positioning to production and growth.",
] as const;

export function ValueBar() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % messages.length);
    }, 10000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div
      className="sticky top-0 z-[90] border-b border-carbon/10 bg-soft-white text-carbon"
      role="region"
      aria-label="Laam Meem promotion and agency strengths"
    >
      <Link
        to="/contact"
        className="flex h-8 items-center justify-center overflow-hidden px-6 text-center text-[9px] font-semibold uppercase tracking-[0.12em] transition-opacity hover:opacity-60 sm:text-[10px]"
      >
        <span key={activeIndex} className="animate-in fade-in duration-700">
          {messages[activeIndex]}
        </span>
      </Link>
    </div>
  );
}
