import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Consumer Connect Communications" },
      { name: "description", content: "Connecting Brands. Creating Impact. Trusted advertising agency with 15+ years of experience." },
      { name: "author", content: "Consumer Connect Communications" },
      { property: "og:title", content: "Consumer Connect Communications" },
      { property: "og:description", content: "Connecting Brands. Creating Impact. Trusted advertising agency with 15+ years of experience." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Consumer Connect Communications" },
      { name: "twitter:description", content: "Connecting Brands. Creating Impact. Trusted advertising agency with 15+ years of experience." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8f178ab5-c1e5-43be-8166-3ccacadb045d/id-preview-a4560bf1--bb376f5b-40c0-42e6-943d-ca48127d1c7a.lovable.app-1777705081175.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8f178ab5-c1e5-43be-8166-3ccacadb045d/id-preview-a4560bf1--bb376f5b-40c0-42e6-943d-ca48127d1c7a.lovable.app-1777705081175.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
