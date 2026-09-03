import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { AboutPhilosophy } from "@/components/sections/about-philosophy";
import { ServicesList } from "@/components/sections/services-list";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCta } from "@/components/sections/final-cta";

const title = "Laam Meem — Brand, Identity & Digital Studio";
const description =
  "Laam Meem is a creative studio building culturally intelligent brands: strategy, identity, digital experience and editorial direction.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutPhilosophy />
      <ServicesList />
      <FeaturedWork />
      <Process />
      <Testimonials />
      <FinalCta />
    </>
  );
}
