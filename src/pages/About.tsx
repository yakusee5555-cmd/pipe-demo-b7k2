import { Link } from "react-router-dom";
import { BUSINESS } from "../data";
import { Check, CTABand, Eyebrow, PageHero, useRevealRoot } from "../components";

const VALUES = [
  { t: "Upfront, always", d: "You approve the exact price before we start. No hourly meters, no surprise line items." },
  { t: "On time, every time", d: "We text you when the tech is en route with a live ETA. Late isn't in our vocabulary." },
  { t: "Clean boots, clean work", d: "Shoe covers, drop cloths, and a full cleanup. Your home looks untouched — except the fixed part." },
  { t: "Warranty that means it", d: "2-year workmanship warranty on every repair. If our fix fails, we come back free." },
];

export default function About() {
  const ref = useRevealRoot();
  return (
    <div ref={ref}>
      <PageHero
        eyebrow="About us"
        title={<>The plumbers Austin <span className="text-sky-300">actually trusts.</span></>}
        sub="ClearFlow started with one truck, one wrench set, and a simple rule: treat every home like it's your mom's."
      />
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-2">
          <div>
            <Eyebrow>How we started</Eyebrow>
            <h2 className="reveal mt-4 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
              One truck. One rule. Fifteen years later, still the same rule.
            </h2>
            <div className="reveal mt-5 space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                ClearFlow Plumbing began in 2011 when our founder, a third-generation plumber,
                got tired of watching big shops upsell customers who just needed an honest fix.
                He bought a used van, printed simple flat-rate price cards, and promised every
                customer the same thing: the price we quote is the price you pay.
              </p>
              <p>
                Word spread. Today we run a full fleet across greater Austin, but the rule
                hasn't changed — upfront pricing, licensed techs, and work we'd sign our name to.
                That's why over 60% of our jobs come from repeat customers and referrals.
              </p>
            </div>
            <ul className="reveal mt-6 space-y-3">
              {["Licensed Texas Master Plumber on every job", "Background-checked, uniformed technicians", "Fully stocked trucks — most fixes in one visit"].map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm font-semibold text-ink">
                  <Check className="mt-0.5" /> {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal grid grid-cols-2 gap-4">
            <img src="/img/plumber-van.jpg" alt="ClearFlow service van" loading="lazy" className="rounded-3xl object-cover shadow-lg" />
            <img src="/img/plumber-bathroom.jpg" alt="Finished bathroom work" loading="lazy" className="mt-8 rounded-3xl object-cover shadow-lg" />
          </div>
        </div>
      </section>
      <section className="bg-mist">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <div className="text-center">
            <Eyebrow>What we stand for</Eyebrow>
            <h2 className="reveal mt-4 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
              Four rules, zero exceptions.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <div key={v.t} className="reveal rounded-3xl bg-white p-7 shadow-[0_10px_40px_rgba(11,36,71,0.06)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand text-lg font-extrabold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-extrabold text-navy">{v.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.d}</p>
              </div>
            ))}
          </div>
          <div className="reveal mt-10 text-center">
            <Link
              to="/contact"
              className="inline-flex min-h-[52px] items-center rounded-full bg-brand px-9 text-sm font-bold uppercase tracking-widest text-white shadow-[0_8px_24px_rgba(29,111,224,0.35)] transition hover:bg-brand-dark"
            >
              Work with us
            </Link>
          </div>
        </div>
      </section>
      <CTABand />
    </div>
  );
}
