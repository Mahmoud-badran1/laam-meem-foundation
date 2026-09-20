import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/sections/page-header";
import { ServicesList } from "@/components/sections/services-list";
import { Process } from "@/components/sections/process";
import { FinalCta } from "@/components/sections/final-cta";

const title = "Services — Laam Meem";
const description =
  "Explore Laam Meem services across Strategy, Create, Manage and Grow — one connected system for stronger brand perception and growth.";

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
        title="Strategy. Create. Manage. Grow."
        intro="Four connected pillars designed to make the brand clearer, more credible, more memorable and easier to choose."
      />
      <ServicesList />
      <Process />
      <FinalCta />
    </>
  );
}
