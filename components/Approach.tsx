const principles = [
  {
    over: "Transparency",
    under: "over jargon",
    description:
      "Plain language, honest numbers, and decisions you can defend. No glossy sales decks hiding the assumptions.",
  },
  {
    over: "Strategy",
    under: "over shortcuts",
    description:
      "Every recommendation is the output of analysis — never the path of least resistance.",
  },
  {
    over: "Long-term value",
    under: "over quick wins",
    description:
      "We optimise for projects that compound — for owners, occupants, and the surrounding community.",
  },
];

export function Approach() {
  return (
    <section
      id="approach"
      className="bg-white py-20 sm:py-28 scroll-mt-20 border-t border-brand-border"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center rounded-full bg-brand-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-accent">
              Our Approach
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-primary leading-tight">
              Every project is a partnership —
              <span className="text-brand-accent"> not a transaction.</span>
            </h2>
            <p className="mt-5 text-lg text-brand-muted leading-relaxed">
              We earn trust the slow way: by being clear about what we know,
              honest about what we don&apos;t, and accountable for what we
              deliver.
            </p>
          </div>

          <ul className="lg:col-span-7 space-y-4">
            {principles.map((p) => (
              <li
                key={p.over}
                className="group rounded-2xl border border-brand-border bg-brand-light p-7 transition hover:border-brand-accent/60 hover:bg-white hover:shadow-md"
              >
                <p className="font-display text-2xl sm:text-3xl font-bold text-brand-primary leading-tight">
                  <span>{p.over}</span>{" "}
                  <span className="text-brand-muted/70 font-medium">
                    {p.under}
                  </span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                  {p.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
