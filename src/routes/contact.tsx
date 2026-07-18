import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us – Consumer Connect Communications" },
      { name: "description", content: "Get in touch with Consumer Connect Communications in Chennai." },
      { property: "og:title", content: "Contact Us – Consumer Connect Communications" },
      { property: "og:description", content: "Get in touch with Consumer Connect Communications." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 animate-fade-in">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Contact Us
        </h1>
        <p className="mt-4 text-muted-foreground">
          We'd love to hear from you. Reach out and let's create something impactful together.
        </p>
      </div>

      <div className="mx-auto max-w-xl rounded-xl border border-border bg-card p-8 shadow-sm">
        <div className="space-y-6">
          <div>
            <h3 className="mb-1 text-sm font-semibold text-primary uppercase tracking-wider">Address</h3>
            <p className="text-sm leading-relaxed text-foreground">
              29a, Golden Rays, 53a, Lake View Rd, AGS Colony, Jothi Nagar, Ramakrishnapuram, West Mambalam, Chennai, Tamil Nadu 600033
            </p>
          </div>

          <div className="h-px bg-border" />

          <div>
            <h3 className="mb-1 text-sm font-semibold text-primary uppercase tracking-wider">Email</h3>
            <a href="mailto:info@consumerconnectcom.in" className="text-sm text-accent hover:underline">
              info@consumerconnectcom.in
            </a>
          </div>

          <div className="h-px bg-border" />

          <div>
            <h3 className="mb-1 text-sm font-semibold text-primary uppercase tracking-wider">Phone</h3>
            <p className="text-sm text-foreground">
              <a href="tel:+919840334101" className="hover:text-accent">+91 9840334101</a>
              {" / "}
              <a href="tel:+919380020105" className="hover:text-accent">+91 9380020105</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
