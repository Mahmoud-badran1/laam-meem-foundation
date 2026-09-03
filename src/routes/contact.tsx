import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";

import { PageHeader } from "@/components/sections/page-header";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contact, socials } from "@/content/site";

const title = "Contact — Laam Meem";
const description =
  "Tell us about your project. We reply to every serious enquiry within two working days.";

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

  // Placeholder handler: wire this to a backend (or an email service) later.
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thanks — this form is a placeholder", {
        description: `Connect it to a backend, or email ${contact.email} in the meantime.`,
      });
      event.currentTarget?.reset?.();
    }, 500);
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Start a conversation."
        intro="Share a little about the organisation, the problem and the timeline. A named lead will reply personally."
      />

      <Section width="wide" spacing="tight" divided>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" autoComplete="name" required className="rounded-none h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="rounded-none h-11"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="organisation">Organisation</Label>
                <Input id="organisation" name="organisation" className="rounded-none h-11" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Project</Label>
                <Textarea id="message" name="message" rows={6} required className="rounded-none" />
              </div>

              <Button type="submit" variant="ink" size="xl" disabled={submitting}>
                {submitting ? "Sending…" : "Send enquiry"}
              </Button>
            </form>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5 lg:ps-10">
            <div className="space-y-10 text-sm">
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
                <h2 className="eyebrow mb-4">Studio</h2>
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
