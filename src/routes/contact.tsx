import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { toast } from "sonner";

import { PageHeader } from "@/components/sections/page-header";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contact, socials } from "@/content/site";

const title = "Free Marketing Review — Laam Meem Vienna";
const description =
  "Book a free 30-minute marketing review with Laam Meem. We review your current presence, identify the biggest gaps and show you what to improve first.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Your review request is ready to connect", {
        description: `The form is currently a front-end placeholder. Connect it to your booking or CRM flow, or email ${contact.email}.`,
      });
      form.reset();
    }, 500);
  }

  return (
    <>
      <PageHeader
        eyebrow="Free 30-minute marketing review"
        title="See where your marketing is underselling your business."
        intro="We review your current presence before the call, identify the biggest gaps and show you what we would improve first. No obligation and no pitch-first conversation."
      />

      <Section width="wide" spacing="tight" divided>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <div className="mb-10 border border-border bg-secondary/40 p-6 md:p-8">
              <p className="eyebrow text-lime">What you get</p>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  "Review of your current online presence",
                  "The 3 biggest gaps hurting perception or growth",
                  "Clear priorities for what to improve next",
                  "Our first-step recommendation for your marketing",
                ].map((item) => (
                  <li key={item} className="flex gap-3 border-t border-border pt-4 text-sm leading-relaxed">
                    <Check className="mt-0.5 size-4 shrink-0 text-lime" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" autoComplete="name" required className="h-11 rounded-none" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Work email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="h-11 rounded-none"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="organisation">Company</Label>
                  <Input id="organisation" name="organisation" required className="h-11 rounded-none" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website or social profile</Label>
                  <Input id="website" name="website" type="url" placeholder="https://" className="h-11 rounded-none" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">What do you need help with?</Label>
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="h-11 w-full rounded-none border border-input bg-background px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="" disabled>
                    Select an area
                  </option>
                  <option value="social-media">Social media</option>
                  <option value="content-production">Content production</option>
                  <option value="event-coverage">Event coverage</option>
                  <option value="marketing-strategy">Marketing strategy</option>
                  <option value="branding">Branding & visual identity</option>
                  <option value="web">Website / landing page</option>
                  <option value="multiple">Several areas / not sure yet</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="challenge">What is the biggest marketing challenge right now?</Label>
                <Textarea
                  id="challenge"
                  name="challenge"
                  rows={4}
                  required
                  placeholder="Tell us what feels inconsistent, unclear or underperforming."
                  className="rounded-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="success">What would make this project successful for you?</Label>
                <Textarea
                  id="success"
                  name="success"
                  rows={4}
                  placeholder="For example: look more premium, generate better leads, improve event visibility, build a consistent content system…"
                  className="rounded-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="investment">Approximate monthly marketing investment (optional)</Label>
                <select
                  id="investment"
                  name="investment"
                  defaultValue=""
                  className="h-11 w-full rounded-none border border-input bg-background px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="">Prefer not to say</option>
                  <option value="under-1000">Under €1,000</option>
                  <option value="1000-2500">€1,000–€2,500</option>
                  <option value="2500-5000">€2,500–€5,000</option>
                  <option value="5000-plus">€5,000+</option>
                </select>
              </div>

              <Button type="submit" variant="ink" size="xl" disabled={submitting}>
                {submitting ? "Submitting…" : "Request my free marketing review"}
              </Button>
              <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                30 minutes · No obligation · We review your presence before the call
              </p>
            </form>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5 lg:ps-10">
            <div className="sticky top-32 space-y-10 text-sm">
              <div className="border border-border p-6 md:p-8">
                <p className="eyebrow text-lime">How the review works</p>
                <ol className="mt-6 space-y-5">
                  <li className="border-t border-border pt-4">
                    <span className="text-lime">01</span>
                    <p className="mt-2">You tell us where the business stands and what you want marketing to improve.</p>
                  </li>
                  <li className="border-t border-border pt-4">
                    <span className="text-lime">02</span>
                    <p className="mt-2">We review your current presence before the conversation.</p>
                  </li>
                  <li className="border-t border-border pt-4">
                    <span className="text-lime">03</span>
                    <p className="mt-2">On the call, we show you the highest-priority gaps and what we would do first.</p>
                  </li>
                </ol>
                <p className="mt-6 border-t border-border pt-5 text-muted-foreground">
                  If we do not see a meaningful way to improve your marketing, we will tell you directly.
                </p>
              </div>

              <div>
                <h2 className="eyebrow mb-4">Direct</h2>
                <p>
                  <a href={`mailto:${contact.email}`} className="link-underline">
                    {contact.email}
                  </a>
                </p>
                <p className="mt-2">
                  <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="link-underline">
                    {contact.phone}
                  </a>
                </p>
              </div>

              <div>
                <h2 className="eyebrow mb-4">Based in</h2>
                <address className="space-y-1 not-italic text-muted-foreground">
                  {contact.addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </address>
                <p className="mt-3 text-muted-foreground">{contact.hours}</p>
              </div>

              <div>
                <h2 className="eyebrow mb-4">Elsewhere</h2>
                <ul className="space-y-2">
                  {socials.map((social) => (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="link-underline text-muted-foreground hover:text-foreground"
                      >
                        {social.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
