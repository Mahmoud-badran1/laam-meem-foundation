import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { Transformation } from "@/components/sections/transformation";
import { FreeMarketingReview } from "@/components/sections/free-marketing-review";
import { ServicesList } from "@/components/sections/services-list";
import { FeaturedWork } from "@/components/sections/featured-work";
import { AboutPhilosophy } from "@/components/sections/about-philosophy";
import { Process } from "@/components/sections/process";
import { FinalCta } from "@/components/sections/final-cta";

const title = "Laam Meem — Marketing Agency in Vienna | Social Media, Event Coverage & Growth";
const description =
  "Laam Meem is a Vienna-based marketing agency helping businesses improve their social media presence, cover events professionally, create premium content and grow through stronger marketing strategy and execution.";

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
      <Transformation />
      <FreeMarketingReview />
      <ServicesList />
      <FeaturedWork />
      <AboutPhilosophy />
      <Process />
      <FinalCta />
    </>
  );
}
