import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services – Consumer Connect Communications" },
      { name: "description", content: "End-to-end advertising and communication solutions designed to deliver measurable impact and lasting brand value." },
      { property: "og:title", content: "Our Services – Consumer Connect Communications" },
      { property: "og:description", content: "End-to-end advertising and communication solutions." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Budget Forecasting",
    icon: "📊",
    description: "We help you plan smarter with strategic budget forecasting, ensuring optimal allocation of resources to maximize ROI and campaign effectiveness.",
  },
  {
    title: "Planning & Execution",
    icon: "🎯",
    description: "From insightful strategy to flawless execution, we design and implement integrated campaigns that align with your brand goals and connect with your target audience.",
  },
  {
    title: "Post Campaign Evaluation",
    icon: "📈",
    description: "Our work doesn't stop at execution. We provide in-depth performance analysis and insights to measure success, refine strategies, and drive continuous improvement.",
  },
  {
    title: "Outdoor Branding",
    icon: "🏙️",
    description: "We create high-visibility outdoor advertising solutions that enhance brand presence and capture attention across key locations.",
  },
  {
    title: "PR Services",
    icon: "📣",
    description: "Our public relations expertise helps build strong brand reputation, manage communications, and create meaningful engagement with your audience and media.",
  },
  {
    title: "End-to-End Support",
    icon: "🤝",
    description: "From ideation to analysis, we are your partners at every stage—ensuring your brand communicates effectively and grows consistently.",
  },
];

function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 animate-fade-in">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Our Services
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          At Consumer Connect Communications, we offer end-to-end advertising and communication solutions designed to deliver measurable impact and lasting brand value.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
          >
            <span className="mb-4 block text-3xl">{service.icon}</span>
            <h3 className="mb-2 text-lg font-semibold text-foreground">{service.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
