import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/sections/page-header";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCta } from "@/components/sections/final-cta";

const title = "Work — Laam Meem";
const description =
  "Selected Laam Meem work across brand strategy, content, social media, production and campaigns.";

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
        title="Work designed to change perception."
        intro="Selected transformations across strategy, content and production. We focus on the thinking behind the work as much as the finished output."
      />
      <FeaturedWork />
      <Testimonials />
      <FinalCta />
    </>
  );
}
