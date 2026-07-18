import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80")'
      }}
    >
      <div className="text-center px-4 py-16 bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl max-w-2xl mx-4 animate-fade-in">
        <h1 className="text-4xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
          Consumer Connect Communications
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Connecting Brands. Creating Impact. Elevating Your Communication Strategy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Our Services
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-border bg-card text-card-foreground rounded-lg font-medium hover:bg-accent transition-colors"
          >
            Get in Touch
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-2xl font-bold text-primary">15+</p>
            <p className="text-sm text-muted-foreground">Years of Experience</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-2xl font-bold text-primary">100+</p>
            <p className="text-sm text-muted-foreground">Brands Served</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-2xl font-bold text-primary">30+</p>
            <p className="text-sm text-muted-foreground">Years Combined Expertise</p>
          </div>
        </div>
      </div>
    </div>
  );
}
