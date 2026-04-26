import { useEffect, useState } from "react";

const navItems = ["Services", "Portfolio", "About", "Testimonials", "Contact"];

const logoSources = {
  full: ["/duma-logo.png", "/logo.png", "/DUMA.png", "/duma-dreamcatcher.png", "/dreamcatcher.png"],
  compact: ["/duma-logo-mark.png", "/duma-logo.png", "/logo.png", "/DUMA.png"],
};

const services = [
  {
    title: "Signature Websites",
    copy: "Cinematic, conversion-led websites built to make your brand feel expensive before a word is read.",
    meta: "Strategy / UX / Build",
  },
  {
    title: "Luxury Brand Systems",
    copy: "Identity, art direction, and messaging systems that turn ambition into a world people can recognize.",
    meta: "Brand / Visuals / Voice",
  },
  {
    title: "Growth Infrastructure",
    copy: "Funnels, automations, analytics, and content engines that make the beautiful thing work harder.",
    meta: "CRM / SEO / Automation",
  },
];

const projects = [
  {
    name: "Noir Atelier",
    type: "Fashion Commerce",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=82",
  },
  {
    name: "Lumen Capital",
    type: "Finance Platform",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=82",
  },
  {
    name: "Astra Residences",
    type: "Luxury Real Estate",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=82",
  },
];

const testimonials = [
  {
    quote:
      "DUMA made our digital presence feel like a private members club. Elegant, fast, and commercially sharp.",
    name: "Amara V.",
    role: "Founder, Maison Vale",
  },
  {
    quote:
      "The site launched with presence. Within weeks, inquiries felt more qualified and our brand finally matched our pricing.",
    name: "Julian R.",
    role: "Managing Partner, Northline",
  },
  {
    quote:
      "They translated a messy dream into a premium system. Every detail had intention and every screen felt alive.",
    name: "Sofia M.",
    role: "Creative Director, Aure Studio",
  },
];

function DreamMark({ className = "", compact = false }) {
  const [sourceIndex, setSourceIndex] = useState(0);
  const [showFallback, setShowFallback] = useState(false);
  const sources = compact ? logoSources.compact : logoSources.full;

  if (!showFallback) {
    return (
      <img
        className={`logo-aura select-none object-contain ${className}`}
        src={sources[sourceIndex]}
        alt="DUMA dreamcatcher logo"
        onError={() => {
          if (sourceIndex < sources.length - 1) {
            setSourceIndex((index) => index + 1);
          } else {
            setShowFallback(true);
          }
        }}
      />
    );
  }

  return (
    <div className={`logo-aura relative ${className}`} aria-label="DUMA dreamcatcher logo">
      <svg viewBox="0 0 220 220" className="h-full w-full" role="img">
        <defs>
          <radialGradient id="dumaGlow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#F8F5EE" stopOpacity="0.98" />
            <stop offset="42%" stopColor="#10B981" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#7d6320" stopOpacity="0.72" />
          </radialGradient>
        </defs>
        <circle
          cx="110"
          cy="95"
          r="68"
          fill="none"
          stroke="url(#dumaGlow)"
          strokeWidth="4"
          className="origin-center animate-slow-spin"
        />
        <circle cx="110" cy="95" r="9" fill="#10B981" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <line
            key={angle}
            x1="110"
            y1="95"
            x2={110 + 62 * Math.cos((angle * Math.PI) / 180)}
            y2={95 + 62 * Math.sin((angle * Math.PI) / 180)}
            stroke="#10B981"
            strokeOpacity="0.55"
            strokeWidth="1.5"
          />
        ))}
        <path
          d="M48 95 C76 45, 144 45, 172 95 C144 145, 76 145, 48 95 Z"
          fill="none"
          stroke="#F8F5EE"
          strokeOpacity="0.62"
          strokeWidth="1.6"
        />
        <path
          d="M80 151 C82 170, 77 184, 65 199 M110 163 C108 183, 110 196, 110 214 M140 151 C138 170, 143 184, 155 199"
          fill="none"
          stroke="#10B981"
          strokeLinecap="round"
          strokeWidth="3"
        />
        {!compact && (
          <text
            x="110"
            y="42"
            textAnchor="middle"
            fill="#F8F5EE"
            fontFamily="Cormorant Garamond, serif"
            fontSize="28"
            fontWeight="700"
          >
            DUMA
          </text>
        )}
      </svg>
    </div>
  );
}

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-gold">{eyebrow}</p>
      <h2 className="section-title font-display text-4xl font-bold leading-none text-cream md:text-6xl">
        {title}
      </h2>
      {copy && <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-cream/68 md:text-lg">{copy}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <div className="luxury-bg min-h-screen overflow-hidden bg-night text-white">
      <div className="noise" />
      <ParticleField />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Portfolio />
        <About />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-night/62 backdrop-blur-2xl">
      <nav className="container-x flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3" aria-label="DUMA home">
          <DreamMark className="h-14 w-12" compact />
          <span className="font-display text-2xl font-bold text-cream">DUMA</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item} className="nav-link text-sm font-semibold" href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="premium-button hidden border border-gold/60 bg-gold px-5 py-3 text-sm font-bold text-night md:inline-flex"
        >
          Start a Project
        </a>
        <button
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/14 text-cream md:hidden"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={`menu-line ${menuOpen ? "is-open" : ""}`} />
        </button>
      </nav>
      <div className={`mobile-menu md:hidden ${menuOpen ? "is-open" : ""}`}>
        {navItems.map((item) => (
          <a
            key={item}
            className="font-display text-5xl font-bold text-cream"
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}
        <a
          className="premium-button mt-4 w-max border border-gold/70 bg-gold px-6 py-3 font-bold text-night"
          href="#contact"
          onClick={() => setMenuOpen(false)}
        >
          Start a Project
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-28">
      <div className="container-x grid min-h-[calc(100vh-7rem)] items-center gap-12 py-16 lg:grid-cols-[1fr_0.82fr]">
        <div className="relative z-10">
          <p className="mb-6 inline-flex rounded-full border border-gold/35 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-gold shadow-aureate">
            Where Your Dreams Meet Digital.
          </p>
          <h1 className="hero-title max-w-5xl font-display text-5xl font-bold leading-[0.9] text-cream sm:text-7xl lg:text-8xl">
            We Build Websites That Build Businesses
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-8 text-cream/72 md:text-2xl">
            Where Your Dreams Meet Digital.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a className="premium-button border border-gold/70 bg-gold px-7 py-4 text-center font-bold text-night" href="#contact">
              Create My Digital Brand
            </a>
            <a className="premium-button border border-white/18 bg-white/8 px-7 py-4 text-center font-bold text-cream" href="#portfolio">
              View Signature Work
            </a>
          </div>
          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3 text-center sm:gap-5">
            {["7-Figure Positioning", "Cinematic UX", "Conversion Systems"].map((item) => (
              <div key={item} className="glass rounded-lg px-3 py-4">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-cream/70">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mx-auto flex aspect-square w-full max-w-[520px] items-center justify-center">
          <div className="absolute inset-3 rounded-full border border-gold/20 bg-plum/24 blur-[1px]" />
          <div className="absolute inset-8 rounded-full border border-white/10" />
          <div className="absolute inset-0 animate-slow-spin rounded-full border border-dashed border-gold/24" />
          <div className="absolute h-[78%] w-[78%] animate-gold-pulse rounded-full bg-gold/10 blur-3xl" />
          <DreamMark className="relative z-10 h-[92%] w-[68%] animate-float-lux" />
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const words = ["Strategy", "Web Design", "Brand Worlds", "Automation", "SEO", "Luxury UX"];
  return (
    <div className="border-y border-white/10 bg-white/[0.035] py-5">
      <div className="marquee-track flex w-max gap-10">
        {[...words, ...words, ...words, ...words].map((word, index) => (
          <span key={`${word}-${index}`} className="text-sm font-bold uppercase tracking-[0.24em] text-cream/54">
            {word} <span className="ml-10 text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="What we craft"
          title="Digital presence with atmosphere, authority, and intent."
          copy="DUMA designs the rare kind of website that feels beautiful and behaves like a revenue asset."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.title} className="service-card glass rounded-lg p-7 md:p-8">
              <div className="mb-10 flex items-center justify-between">
                <span className="font-display text-5xl font-bold text-gold/70">0{index + 1}</span>
                <span className="rounded-full border border-gold/30 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-gold">
                  {service.meta}
                </span>
              </div>
              <h3 className="font-display text-3xl font-bold text-cream">{service.title}</h3>
              <p className="mt-5 leading-8 text-cream/66">{service.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="section-pad bg-plum/26">
      <div className="container-x">
        <SectionHeading
          eyebrow="Selected visions"
          title="Websites that feel less like pages and more like destinations."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.name} className="project-card glass group overflow-hidden rounded-lg">
              <div className="aspect-[4/5] overflow-hidden">
                <img className="h-full w-full object-cover" src={project.image} alt={`${project.name} website concept`} />
              </div>
              <div className="flex items-center justify-between p-6">
                <div>
                  <h3 className="font-display text-3xl font-bold text-cream">{project.name}</h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-gold">{project.type}</p>
                </div>
                <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 text-xl text-gold transition group-hover:bg-gold group-hover:text-night">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative mx-auto aspect-square w-full max-w-[430px]">
          <div className="absolute inset-0 rounded-full bg-gold/10 blur-3xl" />
          <DreamMark className="relative z-10 h-full w-[72%] mx-auto" />
        </div>
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-gold">About DUMA</p>
          <h2 className="font-display text-4xl font-bold leading-none text-cream md:text-6xl">
            A dreamcatcher for ambitious brands.
          </h2>
          <p className="mt-7 text-lg leading-9 text-cream/70">
            DUMA exists for founders who know their brand is bigger than its current website. We blend luxury art
            direction, sharp UX strategy, and resilient development into digital experiences designed to make trust
            happen quickly.
          </p>
          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {[
              ["48+", "Launches shaped"],
              ["3.8x", "Average inquiry lift"],
              ["21d", "Premium sprint option"],
            ].map(([value, label]) => (
              <div key={label} className="border-l border-gold/45 pl-4">
                <p className="font-display text-4xl font-bold text-gold">{value}</p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-cream/58">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="section-pad bg-white/[0.035]">
      <div className="container-x">
        <SectionHeading eyebrow="Client words" title="The kind of feedback that sounds like the brief fulfilled." />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="testimonial-card glass rounded-lg p-7">
              <p className="font-display text-5xl text-gold">“</p>
              <p className="min-h-40 text-lg leading-8 text-cream/76">{testimonial.quote}</p>
              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="font-bold text-cream">{testimonial.name}</p>
                <p className="mt-1 text-sm text-cream/50">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-4 py-10 md:py-16">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-lg border border-gold/30 bg-gradient-to-br from-gold/22 via-white/[0.06] to-plum/70 p-8 text-center shadow-aureate md:p-14">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-gold">Your next digital era</p>
        <h2 className="font-display text-4xl font-bold leading-none text-cream md:text-6xl">
          Make the brand in your head finally visible.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-cream/70">
          Bring the dream. DUMA will build the digital world around it with polish, pace, and commercial clarity.
        </p>
        <a className="premium-button mt-9 inline-flex border border-gold/70 bg-gold px-8 py-4 font-bold text-night" href="#contact">
          Book the Vision Call
        </a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-pad">
      <div className="container-x grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-gold">Contact</p>
          <h2 className="font-display text-4xl font-bold leading-none text-cream md:text-6xl">
            Tell us the dream. We will shape the digital.
          </h2>
          <p className="mt-7 text-lg leading-9 text-cream/70">
            For premium websites, launch systems, and brand worlds built with taste and business discipline.
          </p>
          <div className="mt-8 space-y-3 text-cream/72">
            <p>hello@duma.digital</p>
            <p>Strategy calls available worldwide</p>
          </div>
        </div>
        <form className="glass rounded-lg p-6 md:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="field-label">
              Name
              <input className="field" type="text" placeholder="Your name" />
            </label>
            <label className="field-label">
              Email
              <input className="field" type="email" placeholder="you@brand.com" />
            </label>
          </div>
          <label className="field-label mt-5">
            Project Type
            <input className="field" type="text" placeholder="Website, brand, funnel, or all of it" />
          </label>
          <label className="field-label mt-5">
            The Dream
            <textarea className="field min-h-36 resize-none" placeholder="Tell us what you want this to become." />
          </label>
          <button className="premium-button mt-6 w-full border border-gold/70 bg-gold px-8 py-4 font-bold text-night" type="button">
            Send the Brief
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container-x flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
        <a href="#top" className="flex items-center gap-3">
          <DreamMark className="h-12 w-10" compact />
          <span className="font-display text-2xl font-bold text-cream">DUMA</span>
        </a>
        <p className="text-sm text-cream/54">Where Your Dreams Meet Digital.</p>
        <p className="text-sm text-cream/45">© 2026 DUMA. All rights reserved.</p>
      </div>
    </footer>
  );
}

function ParticleField() {
  return (
    <div className="particle-field pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      {Array.from({ length: 30 }).map((_, index) => (
        <span
          key={index}
          style={{
            left: `${(index * 37) % 100}%`,
            top: `${(index * 19) % 100}%`,
            "--duration": `${6 + (index % 7)}s`,
            "--delay": `${(index % 9) * -0.8}s`,
          }}
        />
      ))}
    </div>
  );
}

export default App;
