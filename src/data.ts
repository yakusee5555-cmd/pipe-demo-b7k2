export const BUSINESS = {
  name: "ClearFlow Plumbing",
  short: "ClearFlow",
  city: "Austin, TX",
  phone: "(555) 234-5678",
  phoneHref: "tel:+15552345678",
  email: "hello@clearflowplumbing.co",
  address: "2200 S Congress Ave, Austin, TX 78704",
  mapQuery: "2200 S Congress Ave, Austin, TX 78704",
  hours: "Mon–Sat: 7:00 AM – 7:00 PM",
  emergency: "24/7 emergency service",
  tagline: "Austin's plumbers, on time and upfront.",
};

export type Service = {
  slug: string;
  name: string;
  img: string;
  tagline: string;
  description: string;
  points: string[];
  priceHint: string;
};

export const SERVICES: Service[] = [
  {
    slug: "emergency-plumbing",
    name: "24/7 Emergency Plumbing",
    img: "/img/plumber-emergency.jpg",
    tagline: "Burst pipe at 2am? We're already rolling.",
    description:
      "Plumbing disasters don't check the clock. Our on-call techs answer around the clock and show up with a fully stocked truck, so most emergencies are fixed in a single visit.",
    points: ["Live answer day and night", "Upfront price before we start", "Fully stocked trucks", "Water shutoff & damage control first"],
    priceHint: "Upfront flat-rate quote on arrival",
  },
  {
    slug: "drain-cleaning",
    name: "Drain Cleaning",
    img: "/img/svc-drain.jpg",
    tagline: "Slow drains, cleared the right way.",
    description:
      "From kitchen sinks to main lines, we clear clogs with pro-grade augers and hydro jetting — and we camera-inspect the line so you know the clog is actually gone, not just pushed along.",
    points: ["Kitchen, bath & laundry drains", "Main sewer line clearing", "Camera inspection included", "Clog-free guarantee"],
    priceHint: "From $149",
  },
  {
    slug: "water-heaters",
    name: "Water Heater Repair & Install",
    img: "/img/svc-heater.jpg",
    tagline: "Hot water back by tonight.",
    description:
      "Cold showers end here. We repair all major tank brands and install high-efficiency tank and tankless units sized right for your home — most installs done in one day.",
    points: ["All major brands serviced", "Tank & tankless installs", "Same-day replacement", "6-year warranty on installs"],
    priceHint: "Installs from $1,299",
  },
  {
    slug: "leak-detection",
    name: "Leak Detection & Repair",
    img: "/img/svc-leak.jpg",
    tagline: "Find it fast, fix it right.",
    description:
      "That water bill spike or damp spot? Our acoustic and thermal sensors pinpoint hidden leaks without tearing your walls apart, then we repair the line cleanly.",
    points: ["Non-invasive detection", "Slab & wall leaks", "Pipe repair & repiping", "Insurance-ready reports"],
    priceHint: "Free estimates",
  },
  {
    slug: "sewer-lines",
    name: "Sewer Line Repair",
    img: "/img/svc-sewer.jpg",
    tagline: "Trenchless options that save your yard.",
    description:
      "Sewer backups are miserable. We diagnose with camera inspection and offer trenchless repair and replacement where possible — fixing the line without digging up your whole yard.",
    points: ["Camera diagnosis", "Trenchless repair options", "Full replacements", "Root intrusion removal"],
    priceHint: "Free camera inspection with repair",
  },
  {
    slug: "fixtures",
    name: "Fixture Installation",
    img: "/img/svc-fixture.jpg",
    tagline: "Faucets, toilets & showers, done cleanly.",
    description:
      "Upgrading the kitchen or bath? We install faucets, toilets, shower valves, and garbage disposals with clean caulk lines and zero leaks — and we haul the old ones away.",
    points: ["Faucets & shower valves", "Toilet install & repair", "Garbage disposals", "Old fixture haul-away"],
    priceHint: "From $129",
  },
];

export const PRICING = [
  {
    name: "Drain Clearing",
    price: "$149",
    suffix: "starting at",
    desc: "One clogged drain, cleared and camera-checked.",
    features: ["Single drain auger service", "Camera inspection included", "Clog-free guarantee", "Upfront flat-rate price"],
    cta: "Book Drain Clearing",
    featured: false,
  },
  {
    name: "Water Heater Install",
    price: "$1,299",
    suffix: "starting at",
    desc: "New high-efficiency tank unit, installed in a day.",
    features: ["40/50-gal tank included", "Same-day installation", "Old unit haul-away", "6-year warranty"],
    cta: "Get My Quote",
    featured: true,
  },
  {
    name: "Emergency Visit",
    price: "24/7",
    suffix: "always open",
    desc: "Burst pipes, major leaks, sewer backups — now.",
    features: ["Live answer, day & night", "Upfront price on arrival", "Damage control first", "Most fixed in one visit"],
    cta: "Call Now",
    featured: false,
  },
];

export const FAQS = [
  {
    q: "How fast can you get here for an emergency?",
    a: "Our on-call techs cover greater Austin around the clock. In most cases we're at your door within 60–90 minutes of your call, with a fully stocked truck so the fix happens the same visit.",
  },
  {
    q: "Do you charge by the hour or flat rate?",
    a: "Flat rate, always. You approve the exact price before we touch a wrench — no hourly meters running, no surprise line items on the invoice.",
  },
  {
    q: "Are your plumbers licensed and insured?",
    a: "Yes. Every tech is a licensed Texas plumber, background-checked, and covered by full liability insurance. We'll show license numbers on request, no awkwardness.",
  },
  {
    q: "Can you really clear any clogged drain?",
    a: "Nearly. We start with pro augers, step up to hydro jetting for grease and roots, and camera-inspect the line after so you can see it's clear. If the pipe itself is broken, we'll show you the footage and quote the repair.",
  },
  {
    q: "How long does a water heater install take?",
    a: "A standard tank swap takes 2–4 hours, and we do most installs the same day you call. Tankless conversions take a full day since they need new venting and gas lines.",
  },
  {
    q: "Do you guarantee your work?",
    a: "Every repair is backed by our 2-year workmanship warranty — double the industry standard. Water heater installs carry a 6-year warranty on the unit and our labor.",
  },
  {
    q: "Which areas do you serve?",
    a: "All of greater Austin — from Round Rock and Cedar Park down to Buda and Kyle, plus West Lake, Dripping Springs, Pflugerville, and Georgetown. If you're inside the loop or just outside it, we've got you.",
  },
  {
    q: "Do I need to be home during the service?",
    a: "For most repairs, yes — at least to let us in and approve the quote. For outdoor work like sewer lines or hose bibbs, we can often handle it with gate access and text you photos of the finished job.",
  },
];

export const AREAS = [
  "Austin",
  "Round Rock",
  "Cedar Park",
  "Georgetown",
  "Pflugerville",
  "West Lake Hills",
  "Dripping Springs",
  "Buda",
  "Kyle",
  "Lakeway",
];

export const TESTIMONIALS = [
  {
    quote:
      "Pipe burst at 11pm and they were here by midnight. Upfront price, fixed in one visit, and they even helped mop up. Unreal service.",
    name: "Marcus T.",
    detail: "Emergency customer, Zilker",
    initials: "MT",
  },
  {
    quote:
      "Three different companies quoted me on a water heater. ClearFlow was the only one who showed the actual price breakdown and finished the same day.",
    name: "Denise R.",
    detail: "Water heater install, Round Rock",
    initials: "DR",
  },
  {
    quote:
      "They camera-inspected my main line and showed me the roots on a screen before quoting. No scare tactics, just the facts. Drain's been perfect since.",
    name: "Greg W.",
    detail: "Drain cleaning, Cedar Park",
    initials: "GW",
  },
];

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Pricing", to: "/pricing" },
  { label: "Service Areas", to: "/areas" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];
