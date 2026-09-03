import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/sections/page-header";
import { AboutPhilosophy } from "@/components/sections/about-philosophy";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCta } from "@/components/sections/final-cta";
import { TrustStrip } from "@/components/sections/trust-strip";

const title = "About — Laam Meem";
const description =
  "A small, senior studio working at the intersection of strategy, typography and culture. Meet the thinking behind Laam Meem.";

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
        title="We build brands that can be argued for."
        intro="Laam Meem is a studio of strategists, designers and writers. We work in English, Arabic and German, and we care about what a brand means before we decide how it looks."
      />
      <TrustStrip />
      <AboutPhilosophy />
      <Process />
      <Testimonials />
      <FinalCta />
    </>
  );
}
