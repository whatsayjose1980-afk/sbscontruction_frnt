import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-brand-primary text-white/85">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-md p-2">
              <Image
                src="/logo.jpg"
                alt="SBS Construction & Consultancy"
                width={40}
                height={54}
                style={{ height: "3rem", width: "auto" }}
              />
            </div>
            <span className="font-display font-bold text-white text-lg leading-tight">
              SBS
              <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
                Construction & Consultancy
              </span>
            </span>
          </div>
          <p className="mt-5 text-sm text-white/70 max-w-xs leading-relaxed">
            Building durable spaces and offering expert consultancy across
            residential, commercial, and infrastructure projects.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-brand-accent-soft">
            Get in touch
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <span className="text-white/60">Email:&nbsp;</span>
              <a
                href="mailto:hello@sbsconstruction.com"
                className="hover:text-brand-accent"
              >
                hello@sbsconstruction.com
              </a>
            </li>
            <li>
              <span className="text-white/60">Phone:&nbsp;</span>
              <a href="tel:+910000000000" className="hover:text-brand-accent">
                +91 00000 00000
              </a>
            </li>
            <li className="text-white/70">
              <span className="text-white/60">Office:&nbsp;</span>
              Address line 1, City, State – 000000
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-brand-accent-soft">
            Quick links
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:text-brand-accent">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-brand-accent">
                What We Do
              </a>
            </li>
            <li>
              <a href="#leadership" className="hover:text-brand-accent">
                Leadership
              </a>
            </li>
            <li>
              <a href="#approach" className="hover:text-brand-accent">
                Approach
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-brand-accent">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 text-xs text-white/60 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>
            © {new Date().getFullYear()} SBS Construction and Consultancy. All
            rights reserved.
          </p>
          <p>Designed with precision.</p>
        </div>
      </div>
    </footer>
  );
}
