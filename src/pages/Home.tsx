import { Link } from "react-router-dom";
import {
  BUSINESS,
  FAQS,
  PRICING,
  SERVICES,
  TESTIMONIALS,
  AREAS,
} from "../data";
import {
  Check,
  CTABand,
  Eyebrow,
  MapEmbed,
  Stars,
  useRevealRoot,
} from "../components";

function VideoHero() {
  const ticks = ["Licensed & insured", "Upfront flat-rate pricing", "2-year workmanship warranty"];
  return (
    <section className="relative overflow-hidden bg-navy-deep">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/img/plumber-hero.jpg"
      >
        <source src="/video/plumber-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-navy-deep/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-navy-deep/30" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p
            className="hero-in inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-white"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            {BUSINESS.emergency} · {BUSINESS.city}
          </p>
          <h1
            className="hero-in mt-5 text-[2.75rem] font-extrabold leading-[1.02] tracking-tight text-white md:text-6xl"
            style={{ animationDelay: "0.15s" }}
          >
            Austin's Plumbers, <span className="text-sky-300">On Time</span> & Upfront.
          </h1>
          <p
            className="hero-in mt-5 max-w-lg text-base leading-relaxed text-white/80 md:text-lg"
            style={{ animationDelay: "0.25s" }}
          >
            Burst pipes, cold showers, clogged drains — fixed right the first time by licensed
            pros. Approve the exact price before we start. No surprises, ever.
          </p>
          <div className="hero-in mt-7 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "0.35s" }}>
            <Link
              to="/pricing"
              className="flex min-h-[54px] items-center justify-center rounded-full bg-brand px-9 text-sm font-bold uppercase tracking-widest text-white shadow-[0_8px_24px_rgba(29,111,224,0.45)] transition hover:bg-brand-dark"
            >
              Get a Free Quote
            </Link>
            <a
              href={BUSINESS.phoneHref}
              className="flex min-h-[54px] items-center justify-center rounded-full border-2 border-white/40 bg-white/10 px-9 text-sm font-bold uppercase tracking-widest text-white backdrop-blur transition hover:border-white hover:bg-white/20"
            >
              Call {BUSINESS.phone}
            </a>
          </div>
          <ul className="hero-in mt-7 space-y-2.5" style={{ animationDelay: "0.45s" }}>
            {ticks.map((t) => (
              <li key={t} className="flex items-center gap-2.5 text-sm font-semibold text-white/85">
                <Check /> {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative hidden lg:block">
          <div className="floaty absolute -top-4 right-6 rounded-2xl bg-white/95 px-5 py-4 shadow-2xl backdrop-blur">
            <Stars />
            <p className="mt-1 text-2xl font-extrabold text-navy">4.9</p>
            <p className="text-xs font-semibold text-muted">480+ verified reviews</p>
          </div>
          <div className="floaty absolute bottom-10 left-2 rounded-2xl bg-white/95 px-5 py-4 shadow-2xl backdrop-blur" style={{ animationDelay: "1.2s" }}>
            <p className="text-2xl font-extrabold text-navy">60<span className="text-base">min</span></p>
            <p className="text-xs font-semibold text-muted">avg. emergency response</p>
          </div>
        </div>
      </div>
      <svg viewBox="0 0 1440 70" preserveAspectRatio="none" className="relative block h-[40px] w-full md:h-[70px]">
        <path d="M0,40 C240,80 480,0 720,30 C960,60 1200,10 1440,40 L1440,70 L0,70 Z" fill="#0B2447" />
      </svg>
    </section>
  );
}

function Stats() {
  const stats = [
    { n: "15+", l: "Years in business" },
    { n: "12k+", l: "Jobs completed" },
    { n: "4.9", l: "Average rating" },
    { n: "60min", l: "Emergency response" },
  ];
  return (
    <section className="bg-navy">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4 md:px-8">
        {stats.map((s) => (
          <div key={s.l} className="reveal text-center">
            <p className="text-3xl font-extrabold text-white md:text-4xl">{s.n}</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-white/55">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="text-center">
          <Eyebrow>What we fix</Eyebrow>
          <h2 className="reveal mt-4 text-3xl font-extrabold tracking-tight text-navy md:text-5xl">
            Every pipe, drain & fixture. Covered.
          </h2>
          <p className="reveal mx-auto mt-3 max-w-2xl text-muted">
            Six specialties, one standard: upfront pricing and work we'd sign our name to.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              to="/services"
              className="reveal group overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-[0_10px_40px_rgba(11,36,71,0.06)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(11,36,71,0.12)]"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={s.img} alt={s.name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-brand px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white">
                  {s.priceHint}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-extrabold text-navy group-hover:text-brand">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand">
                  See details <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const points = [
    "Licensed Texas plumbers, background-checked",
    "Upfront flat-rate price before we start",
    "2-year workmanship warranty — double the industry standard",
    "Shoe covers, drop cloths & full cleanup",
    "Fully stocked trucks — most jobs done in one visit",
    "Real humans answer, 24/7",
  ];
  return (
    <section className="bg-mist">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-2">
        <div className="reveal relative">
          <img src="/img/plumber-about.jpg" alt="ClearFlow plumber" loading="lazy" className="rounded-3xl shadow-2xl" />
          <div className="absolute -bottom-6 -right-2 rounded-2xl bg-navy px-6 py-5 shadow-2xl md:right-8">
            <p className="text-3xl font-extrabold text-white">15+</p>
            <p className="text-xs font-bold uppercase tracking-widest text-white/60">years in Austin</p>
          </div>
        </div>
        <div>
          <Eyebrow>Why ClearFlow</Eyebrow>
          <h2 className="reveal mt-4 text-3xl font-extrabold tracking-tight text-navy md:text-5xl">
            The plumber you'd recommend to your mom.
          </h2>
          <p className="reveal mt-3 text-muted">
            We built ClearFlow on the stuff big shops skip: showing up when we say, charging
            what we quote, and treating your home like it's ours.
          </p>
          <ul className="reveal mt-6 grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-sm font-semibold text-ink">
                <Check className="mt-0.5" /> {p}
              </li>
            ))}
          </ul>
          <Link
            to="/about"
            className="reveal mt-8 inline-flex min-h-[52px] items-center rounded-full bg-navy px-8 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-navy-deep"
          >
            Our story
          </Link>
        </div>
      </div>
    </section>
  );
}

function PricingTeaser() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="text-center">
          <Eyebrow>Honest pricing</Eyebrow>
          <h2 className="reveal mt-4 text-3xl font-extrabold tracking-tight text-navy md:text-5xl">
            Know the price before we start.
          </h2>
          <p className="reveal mx-auto mt-3 max-w-2xl text-muted">
            Flat-rate, approved by you upfront. Here's what most jobs run.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {PRICING.map((p) => (
            <div
              key={p.name}
              className={`reveal relative rounded-3xl border p-7 ${
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
              <p className="mt-3">
                <span className={`text-xs font-bold uppercase tracking-widest ${p.featured ? "text-white/60" : "text-muted"}`}>{p.suffix}</span>
                <span className={`block text-4xl font-extrabold ${p.featured ? "text-white" : "text-navy"}`}>{p.price}</span>
              </p>
              <p className={`mt-2 text-sm ${p.featured ? "text-white/70" : "text-muted"}`}>{p.desc}</p>
              <ul className="mt-5 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-sm font-semibold ${p.featured ? "text-white/85" : "text-ink"}`}>
                    <Check /> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="reveal mt-8 text-center">
          <Link
            to="/pricing"
            className="inline-flex min-h-[52px] items-center rounded-full bg-brand px-9 text-sm font-bold uppercase tracking-widest text-white shadow-[0_8px_24px_rgba(29,111,224,0.35)] transition hover:bg-brand-dark"
          >
            See full pricing & get a quote
          </Link>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="text-center">
          <Eyebrow>Reviews</Eyebrow>
          <h2 className="reveal mt-4 text-3xl font-extrabold tracking-tight text-navy md:text-5xl">
            Austin keeps our number saved.
          </h2>
          <div className="reveal mt-3 flex items-center justify-center gap-2">
            <Stars />
            <span className="text-sm font-bold text-navy">4.9 · 480+ verified reviews</span>
          </div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="reveal rounded-3xl bg-white p-7 shadow-[0_10px_40px_rgba(11,36,71,0.06)]">
              <Stars />
              <blockquote className="mt-4 text-[15px] leading-relaxed text-ink">"{t.quote}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-sm font-extrabold text-white">
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-extrabold text-navy">{t.name}</span>
                  <span className="block text-xs font-semibold text-muted">{t.detail}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function AreasTeaser() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-2">
        <div>
          <Eyebrow>Service areas</Eyebrow>
          <h2 className="reveal mt-4 text-3xl font-extrabold tracking-tight text-navy md:text-5xl">
            All over greater Austin.
          </h2>
          <p className="reveal mt-3 text-muted">
            From Round Rock to Buda, our trucks are already in your neighborhood.
          </p>
          <ul className="reveal mt-6 flex flex-wrap gap-2.5">
            {AREAS.slice(0, 8).map((a) => (
              <li key={a} className="rounded-full bg-mist px-4 py-2 text-sm font-bold text-navy">
                {a}
              </li>
            ))}
          </ul>
          <Link
            to="/areas"
            className="reveal mt-7 inline-flex min-h-[52px] items-center rounded-full border-2 border-navy/15 px-8 text-sm font-bold uppercase tracking-widest text-navy transition hover:border-navy"
          >
            View all areas & map
          </Link>
        </div>
        <div className="reveal">
          <MapEmbed />
        </div>
      </div>
    </section>
  );
}

function FaqTeaser() {
  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-4xl px-4 py-16 md:px-8 md:py-24">
        <div className="text-center">
          <Eyebrow>Good to know</Eyebrow>
          <h2 className="reveal mt-4 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
            Questions? Answered.
          </h2>
        </div>
        <div className="mt-8 space-y-3">
          {FAQS.slice(0, 3).map((f) => (
            <details key={f.q} className="reveal group rounded-2xl bg-white p-5 shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-extrabold text-navy">
                {f.q}
                <span className="text-2xl font-light text-brand transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="reveal mt-7 text-center">
          <Link to="/faq" className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-navy px-8 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-navy-deep">
            All FAQs <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const ref = useRevealRoot();
  return (
    <div ref={ref}>
      <VideoHero />
      <Stats />
      <ServicesPreview />
      <WhyUs />
      <PricingTeaser />
      <Reviews />
      <AreasTeaser />
      <FaqTeaser />
      <CTABand />
    </div>
  );
}
