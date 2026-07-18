import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us – Consumer Connect Communications" },
      { name: "description", content: "Learn about Consumer Connect Communications, a trusted advertising agency with 15+ years of experience in connecting brands and creating impact." },
      { property: "og:title", content: "About Us – Consumer Connect Communications" },
      { property: "og:description", content: "Learn about our story and expertise in advertising and communications." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 animate-fade-in">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          About Us
        </h1>
        <p className="mt-2 text-sm font-medium text-primary">
          Connecting Brands. Creating Impact.
        </p>
      </div>

      <div className="space-y-6 text-sm leading-relaxed text-foreground/90 sm:text-base">
        <p>
          At <strong className="text-foreground">Consumer Connect Communications</strong>, we believe powerful ideas begin with meaningful connections.
        </p>
        <p>
          With over 15 years of experience as a trusted advertising agency, we have been helping brands grow, evolve, and stand out in an ever-changing marketplace. Founded and led by industry experts with over 30+ years of combined experience, our strength lies in blending deep market insights with creative excellence.
        </p>
        <p>
          We specialize in crafting impactful communication strategies that truly connect brands with their consumers. From concept to execution, our approach is rooted in understanding people — their behaviors, aspirations, and emotions — ensuring every campaign we create is relevant, engaging, and results-driven.
        </p>
        <p>
          Over the years, we have partnered with diverse brands across industries, delivering solutions that range from brand building and creative campaigns to media planning and integrated marketing communications.
        </p>
        <p>
          At our core, we are passionate storytellers, strategic thinkers, and problem solvers — committed to turning ideas into meaningful brand experiences.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {[
          { value: "15+", label: "Years of Experience" },
          { value: "30+", label: "Years Combined Expertise" },
          { value: "100+", label: "Brands Served" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border bg-card p-6 text-center">
            <p className="text-3xl font-bold text-primary">{stat.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}