import { createFileRoute } from "@tanstack/react-router";
import lionsLogo from "@/assets/lions-club-lab-logo.png.asset.json";
import ctRoom from "@/assets/ct-scan-room.jpg";
import healthCamp from "@/assets/health-camp.jpg";

// ─── Contact details ────────────────────────────────────────────────────────
// PLACEHOLDERS — replace with the lab's real phone number, street address and
// opening hours before publishing; the page must show real details for
// WhatsApp Business verification.
const PHONE = "";
const PHONE_DISPLAY = "";
const WHATSAPP_NUMBER = "";
const ADDRESS_LINE_1 = "Lions Club Lab, Balaji Nagar";
const ADDRESS_LINE_2 = "Karimnagar, Telangana";
const HOURS = "Monday – Saturday · 7:00 AM – 8:00 PM";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Prices", href: "#prices" },
  { label: "Free Camps", href: "#camps" },
  { label: "Contact", href: "#contact" },
];

// DRAFT PRICE LIST — user to confirm every figure before publishing.
const priceRows: { test: string; detail: string; price: string }[] = [
  { test: "CT Scan (Plain)", detail: "Head, chest, abdomen, spine & joints", price: "₹1,499" },
  { test: "CT Scan (Contrast)", detail: "With contrast injection, as advised by doctor", price: "₹2,999" },
  { test: "Digital X-Ray", detail: "Single view — chest, limbs, spine", price: "₹200" },
  { test: "Ultrasound (USG)", detail: "Abdomen / pelvis / pregnancy scan", price: "₹600" },
  { test: "ECG", detail: "12-lead electrocardiogram", price: "₹100" },
  { test: "Complete Blood Picture (CBP)", detail: "Haemoglobin, counts and more", price: "₹200" },
  { test: "Blood Sugar (Fasting / PP)", detail: "Random also available", price: "₹30" },
  { test: "Lipid Profile", detail: "Cholesterol and heart-risk panel", price: "₹300" },
  { test: "Liver Function Test (LFT)", detail: "Full liver panel", price: "₹300" },
  { test: "Kidney Function Test (KFT)", detail: "Creatinine, urea, electrolytes", price: "₹300" },
  { test: "Thyroid Profile", detail: "T3, T4, TSH", price: "₹300" },
  { test: "HbA1c", detail: "Three-month sugar control", price: "₹200" },
  { test: "Urine Routine", detail: "Complete urine examination", price: "₹100" },
  { test: "Basic Full Body Check-up", detail: "CBP + sugar + lipid + urine + ECG", price: "₹499" },
];

const services = [
  {
    title: "CT Scan",
    text: "High-resolution CT imaging for head, chest, abdomen and bones — reported promptly, at a fraction of city-hospital rates.",
  },
  {
    title: "Digital X-Ray",
    text: "Instant digital radiography with clear, shareable reports for bones, chest and spine.",
  },
  {
    title: "Ultrasound (USG)",
    text: "Abdomen, pelvis and pregnancy scans performed by experienced sonologists.",
  },
  {
    title: "Pathology Lab",
    text: "Blood, urine and specialised tests processed daily, from a simple sugar test to full body panels.",
  },
  {
    title: "ECG",
    text: "Quick 12-lead ECG for heart screening, read the same day.",
  },
  {
    title: "Health Check-ups",
    text: "Ready-made low-cost packages covering the tests most families need in one visit.",
  },
];

const campPoints = [
  "Free blood pressure and blood sugar screening for everyone who walks in",
  "Free doctor consultation and basic medicines at every camp",
  "CT scan, X-ray and lab tests offered at further-reduced rates on camp days",
  "Special camps for senior citizens, women's health and school children",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Lions Club Lab, Balaji Nagar — Affordable CT Scan & Diagnostics in Karimnagar",
      },
      {
        name: "description",
        content:
          "Diagnostic centre run by Lions Club of Karimnagar Balajinagar. Low-cost CT scan, X-ray, ultrasound, blood tests and ECG, plus free community health camps.",
      },
      {
        property: "og:title",
        content: "Lions Club Lab, Balaji Nagar — Affordable Diagnostics in Karimnagar",
      },
      {
        property: "og:description",
        content:
          "Community diagnostics at honest prices: CT scan, X-ray, ultrasound, lab tests and free health camps by Lions Club of Karimnagar Balajinagar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Services />
      <Prices />
      <Camps />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={lionsLogo.url}
            alt="Lions Club Lab logo"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full"
          />
          <span className="leading-tight">
            <span className="block text-lg font-bold text-primary">Lions Club Lab</span>
            <span className="block text-xs text-muted-foreground">Balaji Nagar · Karimnagar</span>
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-foreground md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-primary">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#prices"
          className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          View Prices
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="bg-parchment">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="section-label">
            <span className="inline-block h-2 w-2 rounded-full bg-gold" />
            A service initiative of Lions Club of Karimnagar Balajinagar
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            Quality diagnostics at honest prices, for everyone.
          </h1>
          <div className="gold-rule mt-5" />
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Lions Club Lab offers CT scan, digital X-ray, ultrasound, ECG and a full
            pathology lab in Balaji Nagar, Karimnagar — run as a community service, not
            a business, so rates stay within every family's reach.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#prices"
              className="rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              See our low prices
            </a>
            <a
              href="#camps"
              className="rounded-full border-2 border-primary px-6 py-3 font-bold text-primary transition-colors hover:bg-accent"
            >
              Free health camps
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-primary">
            <span>✓ CT Scan from ₹1,499</span>
            <span>✓ X-Ray from ₹200</span>
            <span>✓ Blood tests from ₹30</span>
          </div>
        </div>
        <div className="relative">
          <img
            src={ctRoom}
            alt="CT scanner room at Lions Club Lab diagnostic centre"
            width={1024}
            height={1024}
            className="w-full rounded-3xl border-4 border-gold object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid items-start gap-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="section-label">About us</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Run by Lions Club of Karimnagar Balajinagar
          </h2>
          <div className="gold-rule mt-4" />
          <p className="mt-5 text-lg text-muted-foreground">
            Lions Club Lab was started by Lions Club of Karimnagar Balajinagar with one
            purpose: no family in our neighbourhood should skip a scan or a test because
            they cannot afford it. The lab operates as a charitable service initiative —
            surplus is returned to the club's community work, not to shareholders.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Alongside everyday diagnostics, the club organises free health camps, check-up
            drives for senior citizens and awareness programmes across Karimnagar, in line
            with the Lions' motto, "We Serve."
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Transparent, printed rate list — the same price for every patient",
              "Qualified technicians and visiting specialist doctors",
              "Reports delivered the same day for most tests",
              "Concessions for senior citizens and families in genuine need",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-gold" />
                <span className="text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-sm">
          <img
            src={lionsLogo.url}
            alt="Lions Club Lab emblem"
            width={160}
            height={160}
            loading="lazy"
            className="mx-auto h-40 w-40"
          />
          <p className="mt-6 font-serif text-xl font-bold text-primary">We Serve</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Lions Club of Karimnagar Balajinagar · Lions Clubs International
          </p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-parchment py-16">
      <div className="mx-auto max-w-6xl px-4">
        <p className="section-label">Our services</p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">Everything a family needs, under one roof</h2>
        <div className="gold-rule mt-4" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent font-serif text-lg font-bold text-accent-foreground">
                {service.title.charAt(0)}
              </div>
              <h3 className="mt-4 text-lg font-bold">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Prices() {
  return (
    <section id="prices" className="mx-auto max-w-5xl px-4 py-16">
      <p className="section-label">Rate list</p>
      <h2 className="mt-3 text-3xl font-bold md:text-4xl">Low prices for everyone</h2>
      <div className="gold-rule mt-4" />
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Our rates are kept deliberately low and are the same for every patient. Reports
        for most tests are handed over or sent on WhatsApp the same day.
      </p>
      <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-primary text-primary-foreground">
              <th className="px-5 py-3 font-bold">Test / Scan</th>
              <th className="hidden px-5 py-3 font-bold sm:table-cell">Includes</th>
              <th className="px-5 py-3 text-right font-bold">Our Price</th>
            </tr>
          </thead>
          <tbody>
            {priceRows.map((row, index) => (
              <tr key={row.test} className={index % 2 === 0 ? "bg-background" : "bg-muted/50"}>
                <td className="px-5 py-3 font-semibold">{row.test}</td>
                <td className="hidden px-5 py-3 text-muted-foreground sm:table-cell">{row.detail}</td>
                <td className="px-5 py-3 text-right font-bold text-primary">{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        Rates shown are indicative and may change; please call or WhatsApp the lab for the
        latest price list and any concession you may be eligible for.
      </p>
    </section>
  );
}

function Camps() {
  return (
    <section id="camps" className="bg-parchment py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        <img
          src={healthCamp}
          alt="Free community health camp organised by Lions Club of Karimnagar Balajinagar"
          width={1024}
          height={1024}
          loading="lazy"
          className="w-full rounded-3xl border-4 border-gold object-cover shadow-xl"
        />
        <div>
          <p className="section-label">Community service</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Free health camps, open to all</h2>
          <div className="gold-rule mt-4" />
          <p className="mt-5 text-lg text-muted-foreground">
            Beyond the lab, Lions Club of Karimnagar Balajinagar regularly organises free
            health camps in and around Karimnagar — so that cost never stands between a
            family and a check-up.
          </p>
          <ul className="mt-6 space-y-3">
            {campPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-gold" />
                <span className="text-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 rounded-2xl border border-border bg-card p-4 text-sm text-muted-foreground">
            Camp dates are announced at the lab and through local community groups. To
            request a camp in your area, contact the club.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      <div className="rounded-3xl bg-primary px-6 py-12 text-primary-foreground md:px-12">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Visit or contact the lab</h2>
            <div className="gold-rule mt-4" />
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-gold">Address</p>
                <p className="mt-1 text-lg">
                  {ADDRESS_LINE_1}, {ADDRESS_LINE_2}
                </p>
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-gold">Timings</p>
                <p className="mt-1 text-lg">{HOURS}</p>
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-gold">Phone / WhatsApp</p>
                {PHONE_DISPLAY ? (
                  <p className="mt-1 text-lg">{PHONE_DISPLAY}</p>
                ) : (
                  <p className="mt-1 text-lg">
                    Phone number to be added — the lab's real number goes here.
                  </p>
                )}
              </div>
            </div>
          </div>
          {WHATSAPP_NUMBER && (
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-lg font-bold text-gold-foreground shadow-lg transition-transform hover:scale-105"
            >
              Chat on WhatsApp
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 text-center">
        <img src={lionsLogo.url} alt="" width={40} height={40} loading="lazy" className="h-10 w-10 rounded-full" />
        <p className="text-sm font-bold text-primary">Lions Club Lab · Balaji Nagar, Karimnagar</p>
        <p className="text-xs text-muted-foreground">
          A community service initiative of Lions Club of Karimnagar Balajinagar.
        </p>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Lions Club of Karimnagar Balajinagar</p>
      </div>
    </footer>
  );
}
