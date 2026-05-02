import Image from "next/image";

export function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center rounded-full bg-brand-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-accent">
              About SBS
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-primary leading-tight">
              At SBS, we don&apos;t just build structures —
              <span className="text-brand-accent">
                {" "}
                we build strategic value.
              </span>
            </h2>

            <div className="mt-6 space-y-5 text-lg text-brand-muted leading-relaxed">
              <p>
                With decades of combined industry experience, SBS stands at the
                intersection of construction expertise, real estate
                intelligence, and forward-looking consultancy. Our approach
                blends hands-on market knowledge with analytical foresight,
                allowing us to deliver solutions that are not only practical
                but also future-ready.
              </p>
              <p>
                Whether it&apos;s land acquisition, development planning, or
                investment strategy, we bring{" "}
                <span className="text-brand-primary font-semibold">
                  clarity to complexity
                </span>{" "}
                — and results to the table.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-brand-border">
              <Image
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80"
                alt="Modern white residential tower against a deep blue sky"
                width={900}
                height={1100}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover w-full h-72 lg:h-96"
              />
            </div>

            <div className="mt-6 rounded-2xl bg-brand-primary p-8 text-white">
              <p className="text-[11px] uppercase tracking-[0.18em] text-brand-accent-soft">
                Our Vision
              </p>
              <p className="mt-3 font-display text-xl sm:text-2xl font-semibold leading-snug">
                To become a trusted force in construction and consultancy by
                delivering sustainable, high-value, and intelligently planned
                projects that{" "}
                <span className="text-brand-accent">
                  stand the test of time.
                </span>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
