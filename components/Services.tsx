const services = [
  {
    number: "01",
    title: "Real Estate Development & Planning",
    description:
      "End-to-end development planning — from site analysis and feasibility through master planning and execution roadmaps.",
  },
  {
    number: "02",
    title: "Land Acquisition & Trading Strategy",
    description:
      "Deep land-market knowledge applied to acquisition, valuation, and trading — backed by legal and regulatory diligence.",
  },
  {
    number: "03",
    title: "Construction Consultancy",
    description:
      "Independent advisory on design, engineering, vendor selection, and on-site execution to keep your project on spec.",
  },
  {
    number: "04",
    title: "Market Forecasting & Investment Insights",
    description:
      "Predictive analysis of real-estate cycles and asset behaviour, translating market signals into investment timing.",
  },
  {
    number: "05",
    title: "Customised Business & Infrastructure Solutions",
    description:
      "Bespoke engagements for owners, developers, and institutions where standard templates simply don't apply.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="bg-brand-light py-20 sm:py-28 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-brand-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-accent">
            What We Do
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-primary">
            Five disciplines, one strategic partner.
          </h2>
          <p className="mt-4 text-lg text-brand-muted">
            From the first acquisition decision to the last commissioned
            structure, SBS brings the same blend of market intuition and
            execution discipline.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <article
              key={s.number}
              className="group relative overflow-hidden rounded-2xl bg-white border border-brand-border p-7 transition hover:border-brand-accent/60 hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-2xl font-bold text-brand-accent/80">
                  {s.number}
                </span>
                <span
                  aria-hidden="true"
                  className="h-px w-16 bg-brand-border group-hover:bg-brand-accent transition"
                />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-brand-primary leading-snug">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                {s.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
