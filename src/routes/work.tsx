import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/sections/page-header";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCta } from "@/components/sections/final-cta";

const title = "Work — Laam Meem";
const description =
  "Selected projects in brand identity, editorial systems and digital experience for institutions and founders.";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title="Fewer projects, followed further."
        intro="A sample of recent engagements. Case studies with full detail are available on request."
      />
      <FeaturedWork />
      <Testimonials />
      <FinalCta />
    </>
  );
}
