import { Link } from "react-router-dom";
import { AREAS, BUSINESS } from "../data";
import { Check, CTABand, Eyebrow, MapEmbed, PageHero, useRevealRoot } from "../components";

export default function Areas() {
  const ref = useRevealRoot();
  return (
    <div ref={ref}>
      <PageHero
        eyebrow="Service areas"
        title={<>Proudly serving <span className="text-sky-300">greater Austin.</span></>}
        sub="Our trucks are staged across the metro, so most calls get a tech within the hour."
      />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <div className="reveal">
            <MapEmbed title={`Map of ${BUSINESS.name} service area`} />
          </div>
          <div className="mt-12">
            <div className="text-center">
              <Eyebrow>Cities we cover</Eyebrow>
              <h2 className="reveal mt-4 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
                Find your neighborhood below.
              </h2>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {AREAS.map((a) => (
                <li
                  key={a}
                  className="reveal flex items-center gap-2.5 rounded-2xl border border-navy/10 bg-mist/60 px-5 py-4 text-[15px] font-bold text-navy"
                >
                  <Check /> {a}
                </li>
              ))}
            </ul>
            <p className="reveal mx-auto mt-8 max-w-2xl text-center text-sm text-muted">
              Just outside these areas? Call us anyway — for bigger jobs like repipes and sewer
              lines, we regularly travel further across Central Texas.
            </p>
            <div className="reveal mt-7 text-center">
              <Link
                to="/pricing"
                className="inline-flex min-h-[52px] items-center rounded-full bg-brand px-9 text-sm font-bold uppercase tracking-widest text-white shadow-[0_8px_24px_rgba(29,111,224,0.35)] transition hover:bg-brand-dark"
              >
                Get a free quote
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CTABand />
    </div>
  );
}
