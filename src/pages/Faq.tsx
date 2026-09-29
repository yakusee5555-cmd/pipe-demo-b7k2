import { Link } from "react-router-dom";
import { BUSINESS, FAQS } from "../data";
import { CTABand, Eyebrow, PageHero, useRevealRoot } from "../components";

export default function Faq() {
  const ref = useRevealRoot();
  return (
    <div ref={ref}>
      <PageHero
        eyebrow="FAQ"
        title={<>Questions? <span className="text-sky-300">Answered.</span></>}
        sub="Straight answers about pricing, timing, warranties, and how we work."
      />
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 md:px-8 md:py-24">
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <details
                key={f.q}
                open={i === 0}
                className="reveal group rounded-2xl border border-navy/10 bg-mist/50 p-5 md:p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-extrabold text-navy md:text-lg">
                  {f.q}
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-xl font-light text-white transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="reveal mt-10 rounded-3xl bg-navy p-8 text-center md:p-10">
            <h3 className="text-2xl font-extrabold text-white">Still have a question?</h3>
            <p className="mx-auto mt-2 max-w-md text-white/70">
              Call us — a real human picks up, 24/7. Or send a message and we'll reply within the hour.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-brand px-8 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-brand-dark"
              >
                Call {BUSINESS.phone}
              </a>
              <Link
                to="/contact"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full border-2 border-white/30 px-8 text-sm font-bold uppercase tracking-widest text-white transition hover:border-white"
              >
                Send a message
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CTABand />
    </div>
  );
}
