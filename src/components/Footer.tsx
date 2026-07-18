export default function Footer() {
  return (
    <footer className="border-t border-border bg-card py-8">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <p className="text-sm font-semibold text-primary">
          Consumer Connect Communications
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          Connecting Brands. Creating Impact.
        </p>
        <p className="mt-3 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Consumer Connect Communications. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
