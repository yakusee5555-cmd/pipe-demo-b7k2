import { Link } from "react-router-dom";
import { BUSINESS, SERVICES } from "../data";
import { Check, CTABand, Eyebrow, PageHero, useRevealRoot } from "../components";

export default function Services() {
  const ref = useRevealRoot();
  return (
    <div ref={ref}>
      <PageHero
        eyebrow="Services"
        title={<>One call fixes <span className="text-sky-300">all of it.</span></>}
        sub="Six specialties, one standard: upfront flat-rate pricing and a 2-year workmanship warranty on every job."
      />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl space-y-10 px-4 py-16 md:px-8 md:py-24">
          {SERVICES.map((s, i) => (
            <article
              key={s.slug}
              className={`reveal grid items-center gap-8 rounded-3xl border border-navy/10 bg-white p-6 shadow-[0_10px_40px_rgba(11,36,71,0.06)] md:p-10 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img src={s.img} alt={s.name} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <span className="absolute left-4 top-4 rounded-full bg-brand px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white">
                  {s.priceHint}
                </span>
              </div>
              <div>
                <Eyebrow>Service {String(i + 1).padStart(2, "0")}</Eyebrow>
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-navy md:text-3xl">{s.name}</h2>
                <p className="mt-2 text-lg font-bold text-brand">{s.tagline}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{s.description}</p>
                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm font-semibold text-ink">
                      <Check className="mt-0.5" /> {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/pricing"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-brand px-8 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-brand-dark"
                  >
                    Get a free quote
                  </Link>
                  <a
                    href={BUSINESS.phoneHref}
                    className="inline-flex min-h-[52px] items-center justify-center rounded-full border-2 border-navy/15 px-8 text-sm font-bold uppercase tracking-widest text-navy transition hover:border-navy"
                  >
                    {BUSINESS.phone}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTABand />
    </div>
  );
}
