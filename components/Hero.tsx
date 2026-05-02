import Image from "next/image";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-screen flex items-center overflow-hidden"
    >
      <Image
        src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=2400&q=80"
        alt="Modern architectural facade with geometric glass and steel"
        fill
        priority
        sizes="100vw"
        className="object-cover -z-20"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-dark/90 via-brand-primary/75 to-brand-primary/40"
      />

      <div className="mx-auto max-w-7xl w-full px-6 lg:px-10 pt-32 pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-accent/15 ring-1 ring-inset ring-brand-accent/40 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-accent-soft backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
            Construction · Consultancy · Real Estate Intelligence
          </span>

          <h1 className="mt-7 font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.02] tracking-tight text-white">
            We don&apos;t just build structures.
            <br />
            <span className="text-brand-accent">
              We build strategic value.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg sm:text-xl leading-relaxed text-white/85">
            SBS sits at the intersection of construction expertise, real estate
            intelligence, and forward-looking consultancy — bringing clarity to
            complexity and results to the table.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-brand-accent px-8 text-base font-semibold text-white shadow-lg shadow-brand-accent/30 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
            >
              Start a Conversation
            </a>
            <a
              href="#services"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/40 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              What We Do
            </a>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.3em] uppercase"
      >
        Scroll
      </div>
    </section>
  );
}
