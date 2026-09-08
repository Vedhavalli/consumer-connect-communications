import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Our Clients – Consumer Connect Communications" },
      {
        name: "description",
        content:
          "Meet the brands Consumer Connect Communications has partnered with across Telecom, Retail, FMCG, Banking, Automotive, Healthcare, Real Estate, Education and Government.",
      },
      { property: "og:title", content: "Our Clients – Consumer Connect Communications" },
      {
        property: "og:description",
        content: "15+ years of partnering with leading brands across industries.",
      },
    ],
  }),
  component: ClientsPage,
});

type Client = {
  name: string;
  /** Tailwind bg class for the fallback badge, used while no logo file exists yet. */
  badgeClass?: string;
  /** Path to a real logo file once you have one, e.g. "/logos/rmkv-silks.svg". Takes priority over badgeClass. */
  logoSrc?: string;
};

// Split into three rows for the marquee. Reorder/rebalance freely — each row scrolls independently.
const row1: Client[] = [
  { name: "RmKV Silks", logoSrc: "/logos/rmkv-silks-logo.svg" },
  { name: "Gokul Cosmetics", logoSrc: "/logos/gokul-cosmetics.svg" },
  { name: "Sharon Plywood", logoSrc: "/logos/sharon-ply.svg" },
  { name: "P.Orr & Sons", logoSrc: "/logos/porr-sons.svg" },
  { name: "Sameera Estates", logoSrc: "/logos/sameera-estate.svg" },
  { name: "Suvee Wedding Caterers", logoSrc: "/logos/suvee-wedding-caterers.svg" },
];

const row2: Client[] = [
  { name: "Kalyana Maalai Matrimony", logoSrc: "/logos/kalyanamalai-matrmony.svg" },
  { name: "Kiara", badgeClass: "bg-[#F0997B]" },
  { name: "Seasons Chennai", logoSrc: "/logos/seasons-chennai.svg" },
  { name: "ERIA", logoSrc: "/logos/eria-logo.svg" },
  { name: "Ekbote Furniture", logoSrc: "/logos/ekbot-furniture.svg" },
];

const row3: Client[] = [
  { name: "Teak N Oak Furniture", logoSrc: "/logos/teak-n-oak.svg" },
  { name: "Urbanrise Estates", logoSrc: "/logos/urbanise-estates.svg" },
  { name: "Dhanvantri Land Developers", logoSrc: "/logos/dhanvantri-land-developers.svg" },
  { name: "Manju Promoters", logoSrc: "/logos/manju-groups.svg" },
  { name: "SSI International", logoSrc: "/logos/ssi-international.svg" },
];

function MarqueeRow({
  clients,
  direction,
  durationSeconds,
}: {
  clients: Client[];
  direction: "left" | "right";
  durationSeconds: number;
}) {
  // Duplicate the row so the loop is seamless (track scrolls exactly one copy's width).
  const doubled = [...clients, ...clients];

  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max gap-3.5 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        } motion-reduce:animate-none hover:[animation-play-state:paused]`}
        style={{ animationDuration: `${durationSeconds}s` }}
      >
        {doubled.map((client, i) => (
          <div
            key={`${client.name}-${i}`}
            className="flex items-center gap-2 whitespace-nowrap rounded-xl border border-border bg-card px-4 py-2.5"
          >
            {client.logoSrc ? (
              <img
                src={client.logoSrc}
                alt={client.name}
                className="h-5 w-auto max-w-[80px] object-contain"
              />
            ) : (
              <span className={`h-5 w-5 rounded-md ${client.badgeClass}`} />
            )}
            <span className="text-sm font-semibold text-foreground">{client.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ClientsPage() {
  return (
    <section className="py-16 px-4 animate-fade-in">
      <style>{`
        @keyframes marquee-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes marquee-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        .animate-marquee-left { animation: marquee-left linear infinite; }
        .animate-marquee-right { animation: marquee-right linear infinite; }
      `}</style>

      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Clients</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          For over 15 years, Consumer Connect Communications has partnered with
          leading brands across Telecom, Retail, FMCG, Banking, Automotive,
          Healthcare, Real Estate, Education and Government, delivering
          integrated marketing, digital transformation and communication
          solutions.
        </p>
      </div>

      {/* Marquee rows */}
      <div className="mx-auto max-w-5xl">
        <p className="mb-5 text-center text-xs font-semibold uppercase tracking-widest text-primary">
          Our key clients are
        </p>
        <div className="space-y-3">
          <MarqueeRow clients={row1} direction="left" durationSeconds={26} />
          <MarqueeRow clients={row2} direction="right" durationSeconds={22} />
          <MarqueeRow clients={row3} direction="left" durationSeconds={24} />
        </div>
      </div>

      {/* Closing note */}
      <div className="mx-auto max-w-2xl text-center mt-14">
        <p className="text-sm text-muted-foreground">
          Interested in working together?{" "}
          <a href="/contact" className="text-accent hover:underline">
            Get in touch
          </a>
          .
        </p>
      </div>
    </section>
  );
}