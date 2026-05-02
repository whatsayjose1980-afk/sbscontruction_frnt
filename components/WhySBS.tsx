import Image from "next/image";

const pillars = [
  {
    title: "Experience-backed decisions",
    description:
      "Decades of hands-on real estate, construction, and financial-market expertise inform every recommendation we make.",
  },
  {
    title: "Data-informed strategies",
    description:
      "Predictive analysis, market forecasting, and risk modelling — applied to physical asset development, not abstract theory.",
  },
  {
    title: "Ground-level execution",
    description:
      "Plans only matter if they get built. Our teams stay on the ground from acquisition through commissioning.",
  },
];

const stats = [
  { value: "60+", label: "Years combined experience" },
  { value: "20+", label: "Years in bullion & markets" },
  { value: "4", label: "Co-founding partners" },
  { value: "15+", label: "Years in IT & finance" },
];

export function WhySBS() {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=80"
        alt="Construction site at golden hour with cranes and steel framework"
        fill
        sizes="100vw"
        className="object-cover -z-20"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-dark/95 via-brand-primary/92 to-brand-primary/85"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 sm:py-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-brand-accent/15 ring-1 ring-inset ring-brand-accent/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-accent-soft">
            Why SBS
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Because guesswork is expensive —{" "}
            <span className="text-brand-accent">and we don&apos;t guess.</span>
          </h2>
          <p className="mt-5 text-lg text-white/80 max-w-2xl">
            Projects that aren&apos;t just completed — they&apos;re positioned
            to succeed.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="rounded-2xl bg-white/[0.04] ring-1 ring-white/10 p-7 backdrop-blur"
            >
              <div className="font-display text-3xl font-bold text-brand-accent-soft">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-white leading-snug">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        <dl className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6 border-t border-white/10 pt-10">
          {stats.map((s) => (
            <div key={s.label}>
              <dd className="font-display text-3xl sm:text-4xl font-bold text-white">
                {s.value}
              </dd>
              <dt className="mt-1 text-xs uppercase tracking-wider text-brand-accent-soft">
                {s.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
