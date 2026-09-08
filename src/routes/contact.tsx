import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.02 2C6.5 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.08-1.33A9.96 9.96 0 0 0 12.02 22C17.53 22 22 17.52 22 12S17.53 2 12.02 2Zm0 18.1c-1.63 0-3.15-.44-4.46-1.22l-.32-.19-3.02.79.8-2.94-.2-.3A8.1 8.1 0 0 1 3.9 12c0-4.48 3.65-8.12 8.13-8.12 4.47 0 8.12 3.64 8.12 8.12s-3.65 8.1-8.13 8.1Zm4.47-6.08c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.78.95-.14.16-.29.18-.53.06-.24-.12-1.02-.38-1.95-1.2-.72-.64-1.2-1.44-1.35-1.68-.14-.24-.02-.37.11-.49.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42-.14-.01-.3-.01-.47-.01-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02 0 1.19.87 2.34.99 2.5.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us – Consumer Connect Communications" },
      {
        name: "description",
        content: "Get in touch with Consumer Connect Communications in Chennai.",
      },
      { property: "og:title", content: "Contact Us – Consumer Connect Communications" },
      {
        property: "og:description",
        content: "Get in touch with Consumer Connect Communications.",
      },
    ],
  }),
  component: Contact,
});

type ContactPerson = {
  name: string;
  phone: string;
};

const contacts: ContactPerson[] = [
  { name: "Srinivasan", phone: "+91 98403 34101" },
  { name: "Nalini", phone: "+91 93800 20105" },
  { name: "Harini", phone: "+91 98848 40905" },
];

function Contact() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 animate-fade-in">
      {/* Heading */}
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Let's start a conversation.
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Write, call, WhatsApp, or drop by our Chennai office — we read
          every message and reply from a real person, usually the same day.
        </p>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-border" />

      {/* Body grid */}
      <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
        {/* Address */}
        <div className="lg:col-span-5">
          <div className="flex items-start gap-3">
            <MapPin
              className="mt-1 h-[18px] w-[18px] shrink-0 text-accent"
              strokeWidth={1.75}
            />
            <div>
              <p className="text-sm font-semibold text-foreground">
                Our office
              </p>
              <address className="mt-2 max-w-[30ch] text-sm not-italic leading-relaxed text-muted-foreground">
                29a, Golden Rays, 53a, Lake View Rd, AGS Colony, Jothi
                Nagar, Ramakrishnapuram, West Mambalam, Chennai, Tamil
                Nadu 600033
              </address>
              <a
                href="https://maps.google.com/?q=29a+Golden+Rays+53a+Lake+View+Rd+AGS+Colony+Jothi+Nagar+Ramakrishnapuram+West+Mambalam+Chennai+600033"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
              >
                Get directions
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
              </a>
            </div>
          </div>
        </div>

        {/* Email + Phone */}
        <div className="lg:col-span-7 lg:border-l lg:border-border lg:pl-10">
          {/* Email */}
          <div className="flex items-start gap-3 pb-8">
            <Mail
              className="mt-1 h-[18px] w-[18px] shrink-0 text-accent"
              strokeWidth={1.75}
            />
            <div>
              <p className="text-sm font-semibold text-foreground">Email</p>
              <a
                href="mailto:info@consumerconnectcom.in"
                className="mt-2 inline-block text-sm text-accent hover:underline"
              >
                info@consumerconnectcom.in
              </a>
            </div>
          </div>

          <div className="h-px w-full bg-border" />

          {/* Phone */}
          <div className="flex items-start gap-3 pt-8">
            <Phone
              className="mt-1 h-[18px] w-[18px] shrink-0 text-accent"
              strokeWidth={1.75}
            />
            <div className="w-full">
              <p className="text-sm font-semibold text-foreground">Phone</p>
              <ul className="mt-1">
                {contacts.map((c, i) => (
                  <li
                    key={c.name}
                    className={`flex items-center justify-between gap-4 py-2 ${
                      i !== 0 ? "border-t border-border" : ""
                    }`}
                  >
                    <span className="text-sm text-foreground">{c.name}</span>
                    <span className="flex items-center gap-2">
                      <a
                        href={`https://wa.me/${c.phone.replace(/[^\d]/g, "")}`}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Message ${c.name} on WhatsApp`}
                        className="text-accent transition-opacity hover:opacity-70"
                      >
                        <WhatsAppIcon className="h-[17px] w-[17px]" />
                      </a>
                      <a
                        href={`tel:${c.phone.replace(/\s/g, "")}`}
                        className="text-sm tabular-nums text-accent hover:underline"
                      >
                        {c.phone}
                      </a>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}