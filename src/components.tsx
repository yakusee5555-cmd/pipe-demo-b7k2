import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BUSINESS, NAV, SERVICES } from "./data";

export function useRevealRoot() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    el.querySelectorAll(".reveal").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex min-h-[48px] items-center gap-2.5">
      <svg viewBox="0 0 64 64" className="h-10 w-10">
        <rect width="64" height="64" rx="16" fill="#1D6FE0" />
        <path
          d="M32 12 C32 12 19 29 19 39 a13 13 0 0 0 26 0 C45 29 32 12 32 12 Z"
          fill="#fff"
        />
        <path
          d="M26 40 a7 7 0 0 0 5 6"
          fill="none"
          stroke="#1D6FE0"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <span className={`text-xl font-extrabold tracking-tight ${light ? "text-white" : "text-navy"}`}>
        Clear<span className="text-brand">Flow</span>
        <span className={`ml-1.5 hidden text-sm font-bold uppercase tracking-[0.18em] sm:inline ${light ? "text-white/60" : "text-navy/50"}`}>
          Plumbing
        </span>
      </span>
    </Link>
  );
}

export function Check({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-5 w-5 shrink-0 ${className}`} fill="none">
      <circle cx="12" cy="12" r="10" fill="#1D6FE0" />
      <path
        d="M8 12.5 l2.7 2.7 L16.5 9"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Stars() {
  return <div className="text-base tracking-[0.15em] text-amber-400">★★★★★</div>;
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="reveal inline-block rounded-full border border-brand/25 bg-brand/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
      {children}
    </p>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <>
      {/* top bar */}
      <div className="bg-navy-deep text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-[11px] font-semibold tracking-wide md:px-8 md:text-xs">
          <p className="text-white/75">{BUSINESS.hours} · {BUSINESS.emergency}</p>
          <div className="flex items-center gap-4">
            <a href={BUSINESS.phoneHref} className="text-white/90 hover:text-white">
              {BUSINESS.phone}
            </a>
            <a href={`mailto:${BUSINESS.email}`} className="hidden text-white/75 hover:text-white sm:block">
              {BUSINESS.email}
            </a>
          </div>
        </div>
      </div>
      {/* nav */}
      <header className="sticky top-0 z-50 border-b border-navy/5 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
          <Logo />
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="flex min-h-[48px] items-center text-sm font-bold text-navy/70 transition hover:text-brand"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2.5">
            <a
              href={BUSINESS.phoneHref}
              className="hidden min-h-[48px] items-center rounded-full border-2 border-navy/15 px-6 text-sm font-bold text-navy transition hover:border-navy sm:flex"
            >
              {BUSINESS.phone}
            </a>
            <Link
              to="/pricing"
              className="hidden min-h-[48px] items-center rounded-full bg-brand px-6 text-sm font-bold text-white shadow-[0_8px_24px_rgba(29,111,224,0.35)] transition hover:bg-brand-dark sm:flex"
            >
              Get a Free Quote
            </Link>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-full bg-navy lg:hidden"
            >
              <span className={`h-[2px] w-5 bg-white transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`h-[2px] w-5 bg-white transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-[2px] w-5 bg-white transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
        {/* mobile menu */}
        <div
          className={`overflow-hidden border-t border-navy/5 bg-white transition-all duration-300 lg:hidden ${
            open ? "max-h-[560px]" : "max-h-0 border-t-0"
          }`}
        >
          <nav className="space-y-1 px-4 py-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="flex min-h-[52px] items-center border-b border-navy/5 text-base font-bold text-navy"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/pricing"
              onClick={() => setOpen(false)}
              className="mt-4 flex min-h-[52px] items-center justify-center rounded-full bg-brand text-sm font-bold uppercase tracking-widest text-white"
            >
              Get a Free Quote
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 md:hidden">
      <a
        href={BUSINESS.phoneHref}
        className="flex min-h-[60px] items-center justify-center gap-2 bg-navy px-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 text-[13px] font-bold uppercase tracking-widest text-white"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2">
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Call Now
      </a>
      <Link
        to="/pricing"
        className="flex min-h-[60px] items-center justify-center bg-brand px-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 text-[13px] font-bold uppercase tracking-widest text-white"
      >
        Free Quote
      </Link>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-8">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            {BUSINESS.tagline} Licensed, insured, and on time — across greater {BUSINESS.city}.
          </p>
          <div className="mt-4"><Stars /></div>
          <p className="mt-1 text-xs text-white/50">4.9 rating · 480+ verified reviews</p>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm font-semibold">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-white/70 transition hover:text-white">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm font-semibold">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to="/services" className="text-white/70 transition hover:text-white">{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Contact</h4>
          <ul className="mt-4 space-y-2.5 text-sm font-semibold text-white/70">
            <li><a href={BUSINESS.phoneHref} className="hover:text-white">{BUSINESS.phone}</a></li>
            <li><a href={`mailto:${BUSINESS.email}`} className="hover:text-white">{BUSINESS.email}</a></li>
            <li>{BUSINESS.address}</li>
            <li className="text-white/50">{BUSINESS.hours}<br />{BUSINESS.emergency}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/40 sm:flex-row md:px-8">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <p>Licensed & insured · TX Master Plumber</p>
        </div>
      </div>
    </footer>
  );
}

export function CTABand() {
  return (
    <section className="relative overflow-hidden bg-brand">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(600px 300px at 80% 20%, rgba(255,255,255,0.18), transparent 70%)" }}
      />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-14 text-center md:flex-row md:justify-between md:text-left md:px-8">
        <div>
          <h2 className="reveal text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Plumbing problem? Don't wait on it.
          </h2>
          <p className="reveal mt-2 max-w-xl text-white/85">
            Small leaks become big bills. Get an upfront price and a licensed tech today — or right now, if it's an emergency.
          </p>
        </div>
        <div className="reveal flex flex-col gap-3 sm:flex-row">
          <a
            href={BUSINESS.phoneHref}
            className="flex min-h-[54px] items-center justify-center rounded-full bg-navy px-9 text-sm font-bold uppercase tracking-widest text-white shadow-lg transition hover:bg-navy-deep"
          >
            Call {BUSINESS.phone}
          </a>
          <Link
            to="/pricing"
            className="flex min-h-[54px] items-center justify-center rounded-full bg-white px-9 text-sm font-bold uppercase tracking-widest text-brand transition hover:bg-mist"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub?: string }) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(700px 380px at 85% 10%, rgba(29,111,224,0.25), transparent 70%), radial-gradient(500px 300px at 5% 90%, rgba(29,111,224,0.12), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <p className="hero-in inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-white/90" style={{ animationDelay: "0.05s" }}>
          {eyebrow}
        </p>
        <h1 className="hero-in mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl" style={{ animationDelay: "0.15s" }}>
          {title}
        </h1>
        {sub && (
          <p className="hero-in mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg" style={{ animationDelay: "0.25s" }}>
            {sub}
          </p>
        )}
      </div>
      <svg viewBox="0 0 1440 70" preserveAspectRatio="none" className="relative block h-[40px] w-full md:h-[70px]">
        <path d="M0,40 C240,80 480,0 720,30 C960,60 1200,10 1440,40 L1440,70 L0,70 Z" fill="#ffffff" />
      </svg>
    </section>
  );
}

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", service: "Drain Cleaning", notes: "" });
  if (sent) {
    return (
      <div className="rounded-3xl bg-white p-8 text-center shadow-xl">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
          <Check className="h-8 w-8" />
        </div>
        <h3 className="mt-4 text-2xl font-extrabold text-navy">Thanks, {form.name.split(" ")[0] || "friend"}!</h3>
        <p className="mt-2 text-muted">
          Your request is in. We'll call you back shortly to confirm your free quote.
        </p>
      </div>
    );
  }
  const input =
    "min-h-[52px] w-full rounded-2xl border border-navy/10 bg-mist/60 px-4 text-[15px] font-semibold text-ink placeholder:font-normal placeholder:text-muted/70 outline-none transition focus:border-brand focus:bg-white";
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-3xl bg-white p-6 shadow-xl md:p-8"
    >
      <h3 className="text-2xl font-extrabold tracking-tight text-navy">Get a free quote</h3>
      <p className="mt-1 text-sm text-muted">60 seconds. No spam, no pressure.</p>
      <div className={`mt-5 grid gap-3 ${compact ? "" : "sm:grid-cols-2"}`}>
        <input
          required
          placeholder="Full name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={input}
        />
        <input
          required
          type="tel"
          placeholder="Phone number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className={input}
        />
      </div>
      <select
        value={form.service}
        onChange={(e) => setForm({ ...form, service: e.target.value })}
        className={`${input} mt-3`}
      >
        {SERVICES.map((s) => (
          <option key={s.slug}>{s.name}</option>
        ))}
        <option>Something else</option>
      </select>
      <textarea
        placeholder="Tell us what's going on (optional)"
        rows={3}
        value={form.notes}
        onChange={(e) => setForm({ ...form, notes: e.target.value })}
        className={`${input} mt-3 min-h-[88px] py-3`}
      />
      <button
        type="submit"
        className="mt-4 flex min-h-[54px] w-full items-center justify-center rounded-full bg-brand text-sm font-bold uppercase tracking-widest text-white shadow-[0_8px_24px_rgba(29,111,224,0.35)] transition hover:bg-brand-dark"
      >
        Request my free quote
      </button>
      <p className="mt-3 text-center text-xs text-muted">
        Prefer to talk? <a href={BUSINESS.phoneHref} className="font-bold text-brand">{BUSINESS.phone}</a>
      </p>
    </form>
  );
}

export function MapEmbed({ title = "Service area map" }: { title?: string }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-navy/10 shadow-lg">
      <iframe
        title={title}
        src={`https://maps.google.com/maps?q=${encodeURIComponent(BUSINESS.mapQuery)}&t=&z=11&ie=UTF8&iwloc=&output=embed`}
        className="h-[340px] w-full md:h-[440px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
