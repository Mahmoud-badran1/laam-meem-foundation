import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/sections/page-header";
import { AboutPhilosophy } from "@/components/sections/about-philosophy";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCta } from "@/components/sections/final-cta";
import { TrustStrip } from "@/components/sections/trust-strip";

const title = "About — Laam Meem";
const description =
  "Meet the thinking behind Laam Meem — a Vienna-based creative growth agency working across brand perception, strategy, content and production.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="We shape how strong businesses are seen."
        intro="We are a creative growth agency built around one belief: the outside of a business should match the quality inside it. We think about perception before production, and strategy before content."
      />
      <TrustStrip />
      <AboutPhilosophy />
      <Process />
      <Testimonials />
      <FinalCta />
    </>
  );
}
