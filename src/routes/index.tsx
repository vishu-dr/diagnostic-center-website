import { createFileRoute } from "@tanstack/react-router";
import lionsLogo from "@/assets/lions-club-lab-logo.jpg";
import sampleCounter from "@/assets/lab-sample-counter.jpg";
import campBanner from "@/assets/free-sugar-camp-banner.jpg";
import labDesk from "@/assets/lab-desk.jpg";
import recognitionWall from "@/assets/recognition-wall.jpg";
import servicePoster from "@/assets/lions-club-service-poster.jpg";
import standee from "@/assets/diagnostics-standee.jpg";
import standeeStreet from "@/assets/standee-street-view.jpg";
import rateCard from "@/assets/rate-card.jpg";

// ─── Contact details ────────────────────────────────────────────────────────
// Phone and address are from the lab's rate card and signboard. HOURS is still
// a placeholder and WHATSAPP_NUMBER is unset; the page must show real details
// for WhatsApp Business verification.
const PHONE_DISPLAY = "0878 3567447 · 6303792705";
const WHATSAPP_NUMBER = "";
const ADDRESS_LINE_1 = "H. No: 8-4-505/2/1/A/1, Ganesh Nagar By Pass Road";
const ADDRESS_LINE_2 = "Karimnagar, Telangana - 505 001";
const HOURS = "Monday – Saturday · 7:00 AM – 8:00 PM";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Prices", href: "#prices" },
  { label: "Free Camps", href: "#camps" },
  { label: "Contact", href: "#contact" },
];

// From the lab's printed rate card (undated) — confirm figures are current.
const priceCategories: { name: string; tests: { test: string; price: string }[] }[] = [
  {
    name: "Blood & Urine Tests",
    tests: [
      { test: "CBP (Complete Blood Picture)", price: "₹75" },
      { test: "Urine Test", price: "₹30" },
      { test: "Urine for Ketone", price: "₹30" },
      { test: "Urine Culture", price: "₹300" },
      { test: "CT, BT (Clotting Time, Bleeding Time)", price: "₹30" },
      { test: "Blood Group", price: "₹20" },
      { test: "ESR", price: "₹20" },
    ],
  },
  {
    name: "Bio Chemistry",
    tests: [
      { test: "Serum Bilirubin", price: "₹40" },
      { test: "LFT (Liver Function Test)", price: "₹250" },
      { test: "Serum Amylase", price: "₹200" },
      { test: "Serum Lipase", price: "₹200" },
      { test: "Lipid Profile", price: "₹300" },
      { test: "Serum Electrolytes", price: "₹200" },
      { test: "Serum Uric Acid", price: "₹30" },
      { test: "Troponin T", price: "₹500" },
      { test: "Troponin I", price: "₹400" },
      { test: "Serum Calcium", price: "₹30" },
      { test: "HbA1c", price: "₹250" },
      { test: "RBS (Random Blood Sugar)", price: "₹25" },
      { test: "FBS (Fasting Blood Sugar)", price: "₹25" },
      { test: "PLBS (Post-Lunch Blood Sugar)", price: "₹25" },
      { test: "Blood Urea", price: "₹30" },
      { test: "Serum Creatinine", price: "₹30" },
      { test: "Serum Phosphorus", price: "₹200" },
      { test: "T3, T4, TSH", price: "₹150" },
      { test: "Free Thyroid", price: "₹400" },
      { test: "PT INR", price: "₹200" },
      { test: "APTT", price: "₹200" },
    ],
  },
  {
    name: "Other Tests",
    tests: [
      { test: "Widal", price: "₹30" },
      { test: "MP (Malaria Parasite)", price: "₹50" },
      { test: "Dengue", price: "₹300" },
      { test: "RA Factor", price: "₹50" },
      { test: "ASO", price: "₹60" },
      { test: "VDRL", price: "₹50" },
      { test: "Gravindex (Urine PT)", price: "₹30" },
      { test: "HIV", price: "₹150" },
      { test: "HCV", price: "₹150" },
      { test: "HBsAg", price: "₹50" },
      { test: "CRP", price: "₹150" },
      { test: "D-Dimer", price: "₹400" },
      { test: "AEC", price: "₹200" },
      { test: "Vitamin D3", price: "₹600" },
      { test: "Vitamin B12", price: "₹500" },
      { test: "FSH", price: "₹200" },
      { test: "LH", price: "₹200" },
      { test: "Prolactin", price: "₹200" },
      { test: "Testosterone", price: "₹300" },
      { test: "AMH", price: "₹850" },
      { test: "Iron Profile", price: "₹850" },
      { test: "ANA", price: "₹800" },
      { test: "ANA Profile", price: "₹1,800" },
      { test: "Anti CCP", price: "₹900" },
      { test: "PSA", price: "₹550" },
      { test: "IgE", price: "₹550" },
      { test: "HLA B27", price: "₹850" },
      { test: "Chikungunya", price: "₹600" },
    ],
  },
];

const services = [
  {
    title: "Blood Tests",
    text: "Everyday tests such as CBP, ESR and blood group, along with clotting and bleeding time.",
  },
  {
    title: "Sugar Tests",
    text: "Fasting and after-food sugar tests for just ₹50 together, plus random sugar and HbA1c.",
  },
  {
    title: "Urine Tests",
    text: "Routine urine test, urine for ketone, urine culture and urine pregnancy test.",
  },
  {
    title: "Bio Chemistry",
    text: "Liver, lipid, thyroid and kidney-related tests including creatinine, urea and electrolytes.",
  },
  {
    title: "Infection Tests",
    text: "Widal, malaria, dengue, chikungunya, HIV, HCV, HBsAg and CRP.",
  },
  {
    title: "Vitamin & Hormone Tests",
    text: "Vitamin D3, vitamin B12, iron profile, FSH, LH, prolactin and testosterone.",
  },
];

const galleryPhotos = [
  { src: labDesk, alt: "Lab desk with testing equipment at Lions Club Lab" },
  { src: recognitionWall, alt: "Certificates, trophy and Lions Club banner on the lab wall" },
  {
    src: servicePoster,
    alt: "Lions Club of Karimnagar Balajinagar 'We Serve with Humanity' poster",
  },
  {
    src: standee,
    alt: "Lions Club Diagnostics standee listing blood tests and the ₹50 sugar test",
  },
  { src: standeeStreet, alt: "Lions Club Diagnostics standee on Ganesh Nagar Bypass Road" },
  { src: rateCard, alt: "Printed rate card of Lions Club Diagnostics" },
];

const campPoints = [
  "Free diabetes (sugar) testing at the club's camps",
  "Organised by Lions Club of Karimnagar Balajinagar with the help of Lions Club Diagnostics",
  "The 2024-25 camp ran every morning from 7 to 8 AM at the lab",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Lions Club Lab, Balaji Nagar — Affordable Blood & Urine Tests in Karimnagar",
      },
      {
        name: "description",
        content:
          "Diagnostic centre run by Lions Club of Karimnagar Balajinagar. Low-cost blood, urine and sugar tests, plus free sugar test camps.",
      },
      {
        property: "og:title",
        content: "Lions Club Lab, Balaji Nagar — Affordable Diagnostics in Karimnagar",
      },
      {
        property: "og:description",
        content:
          "Community diagnostics at honest prices: blood, urine and sugar tests and free sugar test camps by Lions Club of Karimnagar Balajinagar.",
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
      <Gallery />
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
            src={lionsLogo}
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
            <span className="inline-block h-2 w-2 rounded-full bg-gold" />A service initiative of
            Lions Club of Karimnagar Balajinagar
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            Quality diagnostics at honest prices, for everyone.
          </h1>
          <div className="gold-rule mt-5" />
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Lions Club Lab offers everyday blood, urine and sugar tests on Ganesh Nagar Bypass Road,
            Karimnagar — run as a community service, not a business, so rates stay within every
            family's reach.
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
              Free sugar test camps
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-primary">
            <span>✓ Fasting + after-food sugar ₹50</span>
            <span>✓ CBP ₹75</span>
            <span>✓ Blood group ₹20</span>
          </div>
        </div>
        <div className="relative">
          <img
            src={sampleCounter}
            alt="Blood sample tubes on the collection counter at Lions Club Lab"
            width={1279}
            height={959}
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
            Lions Club Lab was started by Lions Club of Karimnagar Balajinagar with one purpose: no
            family in our neighbourhood should skip a test because they cannot afford it. The lab
            operates as a charitable service initiative — surplus is returned to the club's
            community work, not to shareholders.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Alongside everyday diagnostics, the club organises free sugar test camps in line with
            the Lions' motto, "We Serve."
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Transparent, printed rate list — the same price for every patient",
              "All kinds of blood tests done here, in the spirit of service",
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
            src={lionsLogo}
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
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">Everyday tests a family needs</h2>
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

function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl px-4 py-16">
      <p className="section-label">Gallery</p>
      <h2 className="mt-3 text-3xl font-bold md:text-4xl">A look at our lab</h2>
      <div className="gold-rule mt-4" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {galleryPhotos.map((photo) => (
          <a
            key={photo.src}
            href={photo.src}
            target="_blank"
            rel="noreferrer"
            className="overflow-hidden rounded-2xl border border-border bg-muted shadow-sm transition-shadow hover:shadow-md"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="aspect-[4/3] w-full object-contain"
            />
          </a>
        ))}
      </div>
    </section>
  );
}

function Prices() {
  return (
    <section id="prices" className="bg-parchment py-16">
      <div className="mx-auto max-w-6xl px-4">
        <p className="section-label">Rate list</p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">Low prices for everyone</h2>
        <div className="gold-rule mt-4" />
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Our rates are kept deliberately low and are the same for every patient. Reports for most
          tests are handed over or sent on WhatsApp the same day.
        </p>
        <div className="mt-8 grid items-start gap-5 lg:grid-cols-3">
          {priceCategories.map((category) => (
            <div
              key={category.name}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-4 py-3 font-bold">{category.name}</th>
                    <th className="px-4 py-3 text-right font-bold">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {category.tests.map((row, index) => (
                    <tr
                      key={row.test}
                      className={index % 2 === 0 ? "bg-background" : "bg-muted/50"}
                    >
                      <td className="px-4 py-2 font-semibold">{row.test}</td>
                      <td className="px-4 py-2 text-right font-bold text-primary">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Rates shown are indicative and may change; please call or WhatsApp the lab for the latest
          price list and any concession you may be eligible for.
        </p>
      </div>
    </section>
  );
}

function Camps() {
  return (
    <section id="camps" className="py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        <img
          src={campBanner}
          alt="Free Sugar Test camp banner of Lions Club of Karimnagar Balajinagar"
          width={700}
          height={350}
          loading="lazy"
          className="w-full rounded-3xl border-4 border-gold object-cover shadow-xl"
        />
        <div>
          <p className="section-label">Community service</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Free sugar test camps</h2>
          <div className="gold-rule mt-4" />
          <p className="mt-5 text-lg text-muted-foreground">
            Beyond everyday testing, Lions Club of Karimnagar Balajinagar organises free sugar test
            camps — so that cost never stands between a family and a check-up.
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
            Camp dates are announced at the lab and through local community groups. To request a
            camp in your area, contact the club.
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
                <p className="text-sm font-bold uppercase tracking-wider text-gold">Phone</p>
                <p className="mt-1 text-lg">{PHONE_DISPLAY}</p>
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
        <img
          src={lionsLogo}
          alt=""
          width={40}
          height={40}
          loading="lazy"
          className="h-10 w-10 rounded-full"
        />
        <p className="text-sm font-bold text-primary">Lions Club Lab · Balaji Nagar, Karimnagar</p>
        <p className="text-xs text-muted-foreground">
          A community service initiative of Lions Club of Karimnagar Balajinagar.
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Lions Club of Karimnagar Balajinagar
        </p>
      </div>
    </footer>
  );
}
