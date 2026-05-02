import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Sectors } from "@/components/Sectors";
import { WhySBS } from "@/components/WhySBS";
import { Leadership } from "@/components/Leadership";
import { Approach } from "@/components/Approach";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Sectors />
        <WhySBS />
        <Leadership />
        <Approach />

        <section
          id="contact"
          className="relative bg-brand-light py-20 sm:py-28 scroll-mt-20"
        >
          <div className="mx-auto max-w-3xl px-6 lg:px-10">
            <div className="text-center">
              <span className="inline-flex items-center rounded-full bg-brand-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-accent">
                Contact
              </span>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-primary leading-tight">
                We&apos;re building more than properties —
                <span className="text-brand-accent">
                  {" "}
                  we&apos;re shaping opportunities, investments, and futures.
                </span>
              </h2>
              <p className="mt-5 text-lg text-brand-muted">
                Tell us about your project and we&apos;ll get back to you
                within one business day.
              </p>
            </div>

            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
