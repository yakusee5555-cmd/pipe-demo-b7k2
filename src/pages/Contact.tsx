import { BUSINESS } from "../data";
import { Check, CTABand, Eyebrow, MapEmbed, PageHero, QuoteForm, useRevealRoot } from "../components";

export default function Contact() {
  const ref = useRevealRoot();
  const cards = [
    {
      t: "Call or text",
      d: BUSINESS.phone,
      s: `${BUSINESS.emergency} — a real human answers.`,
      href: BUSINESS.phoneHref,
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="2">
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      t: "Email us",
      d: BUSINESS.email,
      s: "We reply within one business hour.",
      href: `mailto:${BUSINESS.email}`,
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" />
        </svg>
      ),
    },
    {
      t: "Visit the shop",
      d: BUSINESS.address,
      s: BUSINESS.hours,
      href: `https://maps.google.com/?q=${encodeURIComponent(BUSINESS.mapQuery)}`,
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="2">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
  ];
  return (
    <div ref={ref}>
      <PageHero
        eyebrow="Contact"
        title={<>Let's fix it <span className="text-sky-300">today.</span></>}
        sub="Call, message, or request a quote — whichever's easiest. Emergencies: skip the form and call now."
      />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <div className="grid gap-5 md:grid-cols-3">
            {cards.map((c) => (
              <a
                key={c.t}
                href={c.href}
                className="reveal group rounded-3xl border border-navy/10 bg-white p-7 shadow-[0_10px_40px_rgba(11,36,71,0.06)] transition hover:-translate-y-1"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-white">
                  {c.icon}
                </span>
                <h3 className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-muted">{c.t}</h3>
                <p className="mt-1 text-lg font-extrabold text-navy">{c.d}</p>
                <p className="mt-1 text-sm text-muted">{c.s}</p>
              </a>
            ))}
          </div>
          <div className="mt-12 grid items-start gap-8 lg:grid-cols-2">
            <div className="reveal">
              <Eyebrow>Send a message</Eyebrow>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-navy md:text-3xl">
                Not urgent? We'll get back fast.
              </h2>
              <div className="mt-6">
                <QuoteForm compact />
              </div>
            </div>
            <div className="reveal">
              <Eyebrow>Find us</Eyebrow>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-navy md:text-3xl">
                Our shop & service area.
              </h2>
              <div className="mt-6">
                <MapEmbed />
              </div>
              <ul className="mt-5 space-y-2.5">
                {["Free parking right out front", "Walk-ins welcome during business hours", "After-hours? Call — the on-call tech answers"].map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm font-semibold text-ink">
                    <Check className="mt-0.5" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <CTABand />
    </div>
  );
}
