import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/sections/page-header";
import { ServicesList } from "@/components/sections/services-list";
import { Process } from "@/components/sections/process";
import { FinalCta } from "@/components/sections/final-cta";

const title = "Services — Laam Meem";
const description =
  "Brand strategy, identity design, digital experience and editorial content — modular engagements led by the people who do the work.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Strategy, identity, digital, editorial."
        intro="Start anywhere. Most engagements begin with a strategic phase and continue into design and build with the same team."
      />
      <ServicesList />
      <Process />
      <FinalCta />
    </>
  );
}
