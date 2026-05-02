type Leader = {
  name: string;
  initials: string;
  role: string;
  bio: string;
  strengths: string[];
};

const leaders: Leader[] = [
  {
    name: "Bapi Mondal",
    initials: "BM",
    role: "Co-Founder · Strategic Advisor",
    bio: "With over 20 years of experience in bullion trading, Bapi brings a sharp understanding of market behavior, risk cycles, and financial timing. His transition into real estate and forecasting adds a unique edge to SBS — where financial insight meets physical asset development.",
    strengths: [
      "Predictive market analysis",
      "Investment timing strategies",
      "Cross-sector financial intelligence",
    ],
  },
  {
    name: "Sushen Ball",
    initials: "SB",
    role: "Co-Founder · Development Specialist",
    bio: "Sushen carries over two decades of hands-on experience in land trading, with deep roots in real estate planning and development. His practical knowledge of land dynamics, legal frameworks, and project execution ensures SBS operates with both precision and efficiency.",
    strengths: [
      "Land acquisition and valuation",
      "Development planning",
      "Project feasibility and execution",
    ],
  },
  {
    name: "Srikanta Bag",
    initials: "SB",
    role: "Co-Founder · Market Intelligence & Forecasting",
    bio: "With more than 20 years in bullion trading, Srikanta brings deep expertise in market trends, asset behaviour, and forecasting methodologies. His ability to interpret economic signals and translate them into actionable real estate insights strengthens SBS's strategic backbone.",
    strengths: [
      "Market trend forecasting",
      "Risk assessment & timing strategies",
      "Financial-market-driven real estate insights",
    ],
  },
  {
    name: "Sayan Chakrabarty",
    initials: "SC",
    role: "Director · International Liaison & Brand Strategy",
    bio: "With over 15 years of experience across IT and finance, Sayan specialises in international liaisoning, partnerships, and brand development. His global perspective and multi-industry exposure help position SBS as a forward-looking and well-connected organisation.",
    strengths: [
      "International business coordination",
      "Strategic partnerships and alliances",
      "Brand building and positioning",
    ],
  },
];

export function Leadership() {
  return (
    <section
      id="leadership"
      className="bg-brand-light py-20 sm:py-28 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-brand-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-accent">
            Leadership
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-primary">
            The minds behind SBS.
          </h2>
          <p className="mt-4 text-lg text-brand-muted">
            Four founders. Decades in bullion trading, land markets, and
            international finance — converging on a single mission: building
            real-estate value that lasts.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {leaders.map((leader) => (
            <article
              key={leader.name}
              className="group flex flex-col gap-5 rounded-2xl bg-white border border-brand-border p-7 sm:p-8 transition hover:border-brand-accent/60 hover:shadow-lg"
            >
              <header className="flex items-start gap-5">
                <div className="shrink-0 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-brand-primary text-brand-accent-soft font-display font-bold text-xl ring-1 ring-brand-primary/10">
                  {leader.initials}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-brand-primary leading-tight">
                    {leader.name}
                  </h3>
                  <p className="mt-1 text-sm text-brand-accent font-semibold">
                    {leader.role}
                  </p>
                </div>
              </header>

              <p className="text-sm leading-relaxed text-brand-muted">
                {leader.bio}
              </p>

              <div className="border-t border-brand-border pt-5">
                <p className="text-[11px] uppercase tracking-[0.16em] text-brand-primary/70 font-semibold">
                  Core strengths
                </p>
                <ul className="mt-3 space-y-1.5">
                  {leader.strengths.map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-2 text-sm text-brand-dark"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-accent shrink-0"
                      />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
