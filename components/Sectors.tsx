import Image from "next/image";

type Sector = {
  title: string;
  description: string;
  image: string;
  alt: string;
  span?: string;
};

const sectors: Sector[] = [
  {
    title: "Residential Developments",
    description:
      "Apartments, townhouses, and standalone residences planned for liveability and long-term value.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80",
    alt: "Modern white residential tower with clean geometric lines against a clear sky",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Commercial Spaces",
    description: "Offices, retail, and mixed-use buildings built for utility.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    alt: "Glass-fronted commercial office building reflecting the sky",
  },
  {
    title: "Infrastructure",
    description: "Bridges, civic works, and large-scale public projects.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
    alt: "Construction crane silhouetted against a sunset over a building site",
  },
  {
    title: "Land Development",
    description: "Strategic acquisition, planning, and parcel readiness.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    alt: "Aerial view of a planned land parcel with surveyed boundaries",
  },
  {
    title: "Adaptive Reuse",
    description: "Reimagining existing structures for the next generation.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern open-plan office interior with exposed beams and warm wood finishes",
  },
];

export function Sectors() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-brand-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-accent">
            Sectors We Serve
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-primary">
            Wherever real estate meets opportunity.
          </h2>
          <p className="mt-4 text-lg text-brand-muted">
            Our work spans the full spectrum of the built environment — each
            sector approached with the same engineering rigour and strategic
            lens.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[14rem] gap-4">
          {sectors.map((s) => (
            <figure
              key={s.title}
              className={`group relative overflow-hidden rounded-2xl ring-1 ring-brand-border ${
                s.span ?? ""
              }`}
            >
              <Image
                src={s.image}
                alt={s.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <p className="font-display font-bold text-lg leading-tight">
                  {s.title}
                </p>
                <p className="mt-1 text-xs text-white/75 leading-snug">
                  {s.description}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
