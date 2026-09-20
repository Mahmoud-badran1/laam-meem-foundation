import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Transformation } from "@/components/sections/transformation";
import { ServicesList } from "@/components/sections/services-list";
import { Process } from "@/components/sections/process";
import { AuthorityProof } from "@/components/sections/authority-proof";
import { AboutPhilosophy } from "@/components/sections/about-philosophy";
import { FreeMarketingReview } from "@/components/sections/free-marketing-review";
import { FinalCta } from "@/components/sections/final-cta";

const title = "Laam Meem — Creative Growth Agency in Vienna";
const description =
  "Laam Meem is a Vienna-based creative growth agency helping ambitious brands build stronger perception through strategy, content, social media and production.";

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
      <FeaturedWork />
      <Transformation />
      <ServicesList />
      <Process />
      <AuthorityProof />
      <AboutPhilosophy />
      <FreeMarketingReview />
      <FinalCta />
    </>
  );
}
