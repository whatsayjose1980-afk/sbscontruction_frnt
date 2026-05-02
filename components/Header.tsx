import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "What We Do" },
  { href: "#leadership", label: "Leadership" },
  { href: "#approach", label: "Approach" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-brand-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between gap-6">
        <Link
          href="#top"
          className="flex items-center gap-3 shrink-0"
          aria-label="SBS Construction & Consultancy — home"
        >
          <Image
            src="/logo.jpg"
            alt="SBS Construction & Consultancy"
            width={48}
            height={64}
            priority
            style={{ height: "3rem", width: "auto" }}
          />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display font-bold text-brand-primary text-base">
              SBS
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-brand-muted">
              Construction & Consultancy
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-primary/80 hover:text-brand-accent transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="inline-flex h-10 items-center rounded-full bg-brand-accent px-5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent shrink-0"
        >
          Get in Touch
        </a>
      </div>
    </header>
  );
}
