import { BUSINESS, PRICING } from "../data";
import { Check, CTABand, Eyebrow, PageHero, QuoteForm, useRevealRoot } from "../components";

export default function Pricing() {
  const ref = useRevealRoot();
  return (
    <div ref={ref}>
      <PageHero
        eyebrow="Pricing"
        title={<>Honest prices, <span className="text-sky-300">in writing.</span></>}
        sub="Flat-rate and approved by you before we start. No hourly meters, no surprise line items — ever."
      />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <div className="grid gap-5 md:grid-cols-3">
            {PRICING.map((p) => (
              <div
                key={p.name}
                className={`reveal relative flex flex-col rounded-3xl border p-8 ${
                  p.featured
                    ? "border-brand bg-navy text-white shadow-[0_20px_60px_rgba(11,36,71,0.25)]"
                    : "border-navy/10 bg-white shadow-[0_10px_40px_rgba(11,36,71,0.06)]"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white">
                    Most booked
                  </span>
                )}
                <h3 className={`text-lg font-extrabold ${p.featured ? "text-white" : "text-navy"}`}>{p.name}</h3>
                <p className="mt-4">
                  <span className={`text-xs font-bold uppercase tracking-widest ${p.featured ? "text-white/60" : "text-muted"}`}>{p.suffix}</span>
                  <span className={`block text-5xl font-extrabold ${p.featured ? "text-white" : "text-navy"}`}>{p.price}</span>
                </p>
                <p className={`mt-3 text-sm leading-relaxed ${p.featured ? "text-white/70" : "text-muted"}`}>{p.desc}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2.5 text-sm font-semibold ${p.featured ? "text-white/85" : "text-ink"}`}>
                      <Check /> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={BUSINESS.phoneHref}
                  className={`mt-7 flex min-h-[52px] items-center justify-center rounded-full text-sm font-bold uppercase tracking-widest transition ${
                    p.featured
                      ? "bg-white text-brand hover:bg-mist"
                      : "bg-brand text-white hover:bg-brand-dark"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
          <p className="reveal mx-auto mt-8 max-w-2xl text-center text-sm text-muted">
            Every job is quoted flat-rate on site before work begins. The price we quote is the
            price you pay — if we find something unexpected mid-job, we stop and re-quote. Your call.
          </p>
        </div>
      </section>
      <section id="quote" className="bg-mist">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-2">
          <div>
            <Eyebrow>Free quote</Eyebrow>
            <h2 className="reveal mt-4 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
              Tell us what's wrong. We'll tell you the price.
            </h2>
            <p className="reveal mt-3 text-muted">
              Fill this out and we'll call you back shortly with a free, no-pressure quote.
              Most quotes confirmed within the hour during business hours.
            </p>
            <ul className="reveal mt-6 space-y-3">
              {["Free with zero obligation", "Real price ranges, not bait-and-switch", "Emergency? Skip the form — just call"].map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm font-semibold text-ink">
                  <Check className="mt-0.5" /> {p}
                </li>
              ))}
            </ul>
            <a
              href={BUSINESS.phoneHref}
              className="reveal mt-7 inline-flex min-h-[54px] items-center gap-2 rounded-full bg-navy px-8 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-navy-deep"
            >
              Call {BUSINESS.phone}
            </a>
          </div>
          <div className="reveal">
            <QuoteForm />
          </div>
        </div>
      </section>
      <CTABand />
    </div>
  );
}
