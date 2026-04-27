import { useEffect, useState } from "react";

const navItems = ["Home", "Services", "About", "Contact"];

const logoSources = ["/duma-logo-mark.png", "/duma-logo.png", "/logo.png", "/DUMA.png"];

const contact = {
  email: "anu.nimisha02@gmail.com",
};

const services = [
  {
    title: "Website Development",
    icon:"◈",
    summary: "Premium websites enhanced with intelligent user journeys, automation, and conversion systems.",
    does: "Creates high-performing websites that combine elegant design, fast loading, AI-assisted flows, and business-ready integrations.",
    benefits: ["Premium first impression", "Smarter customer journeys", "Better lead capture", "Scalable digital foundation"],
    delivery: "DUMA maps your offer, designs a refined experience, builds responsive pages, and connects the site to automation and analytics.",
    why: "You get strategy, design taste, and AI execution in one focused build.",
  },
  {
    title: "Chatbots",
    icon:"◈",
    summary: "Smart website assistants that answer questions, qualify leads, and guide visitors instantly.",
    does: "Deploys conversational AI that understands common customer needs and routes people toward the right next step.",
    benefits: ["24/7 response", "Lead qualification", "Lower support load", "Improved visitor confidence"],
    delivery: "We define your knowledge base, conversation flow, escalation rules, and brand voice before launching the bot.",
    why: "DUMA builds chatbots that feel helpful, premium, and aligned with your business goals.",
  },
  {
    title: "Workflow Automation",
    icon:"◈",
    summary: "Automated systems that remove repetitive admin and keep your team moving faster.",
    does: "Connects tools, triggers, forms, notifications, and data flows so routine work happens without manual chasing.",
    benefits: ["Reduced manual tasks", "Cleaner operations", "Faster follow-up", "Fewer missed steps"],
    delivery: "DUMA audits your process, identifies bottlenecks, builds automation logic, and tests every workflow end to end.",
    why: "We design automation around real business behavior, not generic templates.",
  },
  {
    title: "WhatsApp Automation",
    icon:"◈",
    summary: "Customer conversations, lead follow-ups, and reminders automated through WhatsApp flows.",
    does: "Builds WhatsApp response and follow-up systems for inquiries, booking journeys, updates, and nurturing.",
    benefits: ["Instant replies", "Higher response rates", "Automated follow-ups", "Better customer experience"],
    delivery: "We script the flow, connect approved tools, structure message logic, and prepare handoff points for your team.",
    why: "DUMA makes WhatsApp feel like a polished business channel, not a messy inbox.",
  },
  {
    title: "Marketing Systems",
    icon:"◈",
    summary: "Campaign systems that help attract, nurture, and convert customers with intelligence.",
    does: "Combines audience strategy, content workflows, automation, and tracking into a sharper marketing engine.",
    benefits: ["Clearer campaigns", "Consistent follow-up", "Better insights", "More qualified leads"],
    delivery: "DUMA builds the funnel map, automation steps, campaign assets, and reporting structure.",
    why: "We connect marketing creativity with systems that keep working after launch.",
  },
  {
    title: "Lead Generation Funnels",
    icon:"◈",
    summary: "Premium landing and follow-up journeys designed to turn attention into inquiries.",
    does: "Creates conversion paths from traffic source to lead capture, qualification, and booked conversation.",
    benefits: ["More inquiries", "Cleaner qualification", "Better tracking", "Higher campaign ROI"],
    delivery: "We design landing pages, lead forms, thank-you flows, email or WhatsApp follow-up, and analytics.",
    why: "DUMA builds funnels that feel elegant to customers and useful to your sales process.",
  },
  {
    title: "Branding & Identity",
    icon:"◈",
    summary: "Distinctive brand systems that make your AI-powered business feel credible and premium.",
    does: "Shapes the visual language, tone, and digital presence that make your business recognizable.",
    benefits: ["Stronger trust", "Premium positioning", "Consistent visuals", "Clearer messaging"],
    delivery: "DUMA develops direction, palette, typography, voice, and practical brand assets for digital use.",
    why: "We build identities that feel modern without losing human warmth.",
  },
  {
    title: "SEO Optimization",
    icon:"◈",
    summary: "Technical and content improvements that help your website get found by the right audience.",
    does: "Improves discoverability through structure, metadata, speed, content clarity, and search-friendly pages.",
    benefits: ["More organic visibility", "Better page structure", "Improved performance", "Long-term growth"],
    delivery: "We review technical SEO, optimize page content, structure headings, and prepare search-ready metadata.",
    why: "DUMA blends SEO discipline with premium design, so visibility does not come at the cost of brand feel.",
  },
  {
    title: "Social Media Automation",
    icon:"◈",
    summary: "Content and scheduling workflows that keep your brand consistent across channels.",
    does: "Streamlines planning, content creation, approvals, scheduling, and response workflows.",
    benefits: ["Consistent posting", "Faster content cycles", "Cleaner approvals", "Less operational drag"],
    delivery: "We set up calendars, AI-assisted content workflows, templates, and automation between your tools.",
    why: "DUMA helps you show up consistently without making your team live inside social platforms.",
  },
  {
    title: "Custom Solutions",
    icon:"◈",
    summary: "Tailored AI systems built around your specific business challenge.",
    does: "Designs bespoke AI workflows for research, support, content, operations, sales, or internal knowledge.",
    benefits: ["Purpose-built tools", "More efficient teams", "Better decision support", "Competitive advantage"],
    delivery: "DUMA scopes the use case, designs the workflow, selects the right tools, and implements a usable system.",
    why: "We focus on practical AI that solves real problems, not novelty demos.",
  },
  {
    title: "CRM Automation",
    icon:"◈",
    summary: "Smarter customer pipelines that organize leads, tasks, reminders, and follow-ups.",
    does: "Connects your forms, channels, customer records, and team actions into a reliable CRM workflow.",
    benefits: ["No missed leads", "Better sales visibility", "Automated reminders", "Cleaner customer data"],
    delivery: "We define stages, fields, triggers, notifications, and follow-up logic for your business process.",
    why: "DUMA makes your CRM easier to trust and easier to use.",
  },
  {
    title: "Appointment Booking Systems",
    icon:"◈",
    summary: "Smooth booking journeys for consultations, demos, calls, and service appointments.",
    does: "Creates appointment flows that connect availability, forms, reminders, and confirmation messages.",
    benefits: ["Fewer back-and-forth messages", "Better show-up rates", "Clearer intake", "Faster scheduling"],
    delivery: "DUMA builds the booking structure, intake questions, confirmation flow, and automated reminders.",
    why: "We make booking feel simple for customers and organized for your team.",
  },
  {
    title: "Content Creation",
    icon:"◈",
    summary: "AI-assisted content workflows for websites, campaigns, blogs, and social media.",
    does: "Turns business ideas into structured content assets while keeping voice, quality, and strategy intact.",
    benefits: ["Faster content production", "Consistent voice", "More campaign output", "Reduced blank-page time"],
    delivery: "We create prompts, templates, editorial workflows, and review systems tailored to your brand.",
    why: "DUMA uses AI to support creativity, not flatten it.",
  },
  {
    title: "Business Process Automation",
    icon:"◈",
    summary: "End-to-end automation for repeated business processes across departments and tools.",
    does: "Transforms manual sequences into clear automated systems for intake, approval, delivery, and reporting.",
    benefits: ["Operational clarity", "Time savings", "Fewer errors", "Better accountability"],
    delivery: "DUMA documents your process, designs the automation map, builds integrations, and tests edge cases.",
    why: "We make automation feel reliable enough for real business use.",
  },
  {
    title: "Landing Page Design",
    icon:"◈",
    summary: "High-converting landing pages for offers, ads, launches, and lead magnets.",
    does: "Builds focused pages with strong messaging, premium visuals, clear CTAs, and tracking-ready structure.",
    benefits: ["Higher conversion potential", "Clearer offer presentation", "Faster campaign launch", "Better tracking"],
    delivery: "DUMA writes the page flow, designs the interface, builds responsive sections, and connects lead capture.",
    why: "We make landing pages that feel premium and perform with purpose.",
  },
];

const whyChoose = [
  "Smart AI Solutions",
  "Premium Execution",
  "Fast Delivery",
  "Growth Focused",
  "Automation Experts",
  "Reliable Support",
];

function DreamMark({ className = "" }) {
  const [sourceIndex, setSourceIndex] = useState(0);
  const [showFallback, setShowFallback] = useState(false);

  if (!showFallback) {
    return (
      <img
        className={`logo-aura select-none object-contain ${className}`}
        src={logoSources[sourceIndex]}
        alt="DUMA AI Agency logo"
        onError={() => {
          if (sourceIndex < logoSources.length - 1) {
            setSourceIndex((index) => index + 1);
          } else {
            setShowFallback(true);
          }
        }}
      />
    );
  }

  return (
    <div className={`logo-aura relative ${className}`} aria-label="DUMA Agency logo">
      <svg viewBox="0 0 220 220" className="h-full w-full" role="img">
        <defs>
          <radialGradient id="dumaAiGlow" cx="50%" cy="50%" r="62%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.98" />
            <stop offset="44%" stopColor="#D1FAE5" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.72" />
          </radialGradient>
        </defs>
        {/* Outer circle */}
        <circle cx="110" cy="110" r="100" fill="none" stroke="url(#dumaAiGlow)" strokeWidth="2" opacity="0.6" />
        {/* Middle circle */}
        <circle cx="110" cy="110" r="85" fill="none" stroke="#10B981" strokeWidth="1.5" opacity="0.4" />
        {/* Inner decorative circle */}
        <circle cx="110" cy="110" r="70" fill="none" stroke="#D1FAE5" strokeWidth="1" opacity="0.3" />
        
        {/* Dreamcatcher web - curved lines */}
        <path d="M 110 50 Q 130 70 140 90" fill="none" stroke="#D1FAE5" strokeWidth="1.5" opacity="0.6" />
        <path d="M 110 50 Q 90 70 80 90" fill="none" stroke="#D1FAE5" strokeWidth="1.5" opacity="0.6" />
        <path d="M 150 110 Q 135 130 115 145" fill="none" stroke="#D1FAE5" strokeWidth="1.5" opacity="0.6" />
        <path d="M 70 110 Q 85 130 105 145" fill="none" stroke="#D1FAE5" strokeWidth="1.5" opacity="0.6" />
        
        {/* Central circle */}
        <circle cx="110" cy="110" r="12" fill="#10B981" opacity="0.8" />
        <circle cx="110" cy="110" r="8" fill="#D1FAE5" opacity="0.4" />
        
        {/* Feather-like elements hanging down */}
        <path d="M 85 150 Q 80 165 85 180" fill="none" stroke="#D1FAE5" strokeWidth="1.5" opacity="0.7" />
        <path d="M 110 155 Q 108 170 110 185" fill="none" stroke="#D1FAE5" strokeWidth="1.5" opacity="0.7" />
        <path d="M 135 150 Q 140 165 135 180" fill="none" stroke="#D1FAE5" strokeWidth="1.5" opacity="0.7" />
        
        {/* Small circles at feather tips */}
        <circle cx="85" cy="182" r="2" fill="#10B981" opacity="0.6" />
        <circle cx="110" cy="187" r="2" fill="#10B981" opacity="0.6" />
        <circle cx="135" cy="182" r="2" fill="#10B981" opacity="0.6" />
        
        {/* DUMA text below - will be handled by component layout */}
      </svg>
    </div>
  );
}

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-gold">{eyebrow}</p>
      <h2 className="section-title font-display text-4xl font-bold leading-none text-white md:text-6xl">
        {title}
      </h2>
      {copy && <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-mint/[0.72] md:text-lg">{copy}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    document.body.classList.toggle("modal-open", Boolean(selectedService));
    return () => document.body.classList.remove("modal-open");
  }, [selectedService]);

  return (
    <div className="luxury-bg min-h-screen overflow-hidden bg-night text-white">
      <div className="noise" />
      <ParticleField />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <IntelligenceRibbon />
        <Services onSelectService={setSelectedService} />
        <About />
        <WhyChoose />
        <Contact />
      </main>
      <Footer />
      <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
    </div>
  );
}

function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-mint/10 bg-night/[0.72] backdrop-blur-2xl">
      <nav className="container-x flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3" aria-label="DUMA Agency home">
          <DreamMark className="h-14 w-11" />
          <span className="font-display text-2xl font-bold text-white">DUMA AI Agency</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item} className="nav-link text-sm font-semibold" href={item === "Home" ? "#top" : `#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="premium-button hidden border border-gold/70 bg-gold px-5 py-3 text-sm font-bold text-night md:inline-flex"
        >
          Let's Talk
        </a>
        <button
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-mint/[0.16] text-white md:hidden"
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
            className="font-display text-5xl font-bold text-white"
            href={item === "Home" ? "#top" : `#${item.toLowerCase()}`}
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
          Let's Talk
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-28">
      <div className="container-x grid min-h-[calc(100vh-7rem)] items-center gap-12 py-16 lg:grid-cols-[1fr_0.84fr]">
        <div className="relative z-10">
          <p className="mb-6 inline-flex rounded-full border border-gold/[0.35] bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-gold shadow-aureate">
            Where Dreams Meet Digital Intelligence
          </p>
          <h1 className="hero-title max-w-5xl font-display text-5xl font-bold leading-[0.9] text-white sm:text-7xl lg:text-8xl">
            AI Solutions That Grow Businesses
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-mint/[0.76] md:text-2xl">
            We help businesses grow through AI automation, smart websites, chatbots, workflow systems,
            branding, and digital transformation.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a className="premium-button border border-gold/70 bg-gold px-7 py-4 text-center font-bold text-night" href="#contact">
              Book Free Consultation
            </a>
            <a className="premium-button border border-mint/20 bg-white/[0.08] px-7 py-4 text-center font-bold text-white" href="#services">
              Explore Services
            </a>
          </div>
        </div>
        <div className="relative mx-auto flex aspect-square w-full max-w-[540px] items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-gold/[0.15] bg-dark/[0.28] blur-[1px]" />
          <div className="absolute inset-8 rounded-full border border-mint/[0.12]" />
          <div className="absolute inset-0 animate-slow-spin rounded-full border border-dashed border-gold/[0.28]" />
          <div className="absolute inset-16 animate-slow-spin rounded-full border border-mint/[0.14] [animation-direction:reverse]" />
          <div className="absolute h-[78%] w-[78%] animate-gold-pulse rounded-full bg-gold/[0.14] blur-3xl" />
          <div className="ai-core relative z-10 flex h-[78%] w-[78%] flex-col items-center justify-center rounded-full border border-mint/10 backdrop-blur-[2px]">
            <DreamMark className="h-[72%] w-[62%] animate-float-lux" />
            <p className="mt-3 font-display text-4xl tracking-[0.45em] text-gold">
              DUMA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntelligenceRibbon() {
  const words = ["AI Automation", "Smart Websites", "Chatbots", "Workflow Systems", "Brand Intelligence", "Growth Funnels"];
  return (
    <div className="border-y border-mint/10 bg-white/[0.035] py-5">
      <div className="marquee-track flex w-max gap-10">
        {[...words, ...words, ...words, ...words].map((word, index) => (
          <span key={`${word}-${index}`} className="text-sm font-bold uppercase tracking-[0.24em] text-mint/[0.56]">
            {word} <span className="ml-10 text-gold">+</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Services({ onSelectService }) {
  const loopedServices = [...services, ...services];

  return (
    <section id="services" className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="Services"
          title="AI Services Built for Modern Businesses"
          copy="Explore how DUMA helps brands automate, grow, and lead with intelligence."
        />
      </div>
      <div className="services-rail group">
        <div className="services-track">
          {loopedServices.map((service, index) => (
            <button
              key={`${service.title}-${index}`}
              className="service-card service-slide glass text-left"
              type="button"
              onClick={() => onSelectService(service)}>
              <span className="service-orb flex items-center justify-center text-xl text-[#D1FAE5] leading-none">
               {service.icon}
              </span>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-gold">
                {String((index % services.length) + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display text-3xl font-bold leading-none text-white">{service.title}</h3>
              <p className="mt-5 min-h-24 text-sm leading-7 text-mint/[0.66]">{service.summary}</p>
              <span className="mt-7 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-gold">
                View Details <span aria-hidden="true">-</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-pad bg-dark/[0.28]">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="relative mx-auto aspect-square w-full max-w-[430px]">
          <div className="absolute inset-0 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute inset-10 rounded-full border border-gold/20" />
          <DreamMark className="relative z-10 mx-auto h-full w-[72%]" />
        </div>
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-gold">About DUMA AI Agency</p>
          <h2 className="font-display text-4xl font-bold leading-none text-white md:text-6xl">
            Built for the Future
          </h2>
          <p className="mt-7 text-lg leading-9 text-mint/[0.72]">
            DUMA AI Agency helps businesses unlock growth through AI systems, automation, premium web
            presence, and digital intelligence.
          </p>
          <p className="mt-5 text-lg leading-9 text-mint/[0.64]">
            We design trustworthy digital systems that make your business easier to discover, easier to
            understand, and easier to buy from.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why choose us"
          title="Premium execution for intelligent business growth."
          copy="DUMA combines modern AI thinking with refined brand experience and practical delivery."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item) => (
            <article key={item} className="glass feature-card rounded-lg p-6">
              <div className="mb-5 h-11 w-11 rounded-full border border-gold/[0.35] bg-gold/[0.12] shadow-aureate" />
              <h3 className="font-display text-3xl font-bold text-white">{item}</h3>
              <p className="mt-4 leading-7 text-mint/[0.64]">
                Reliable, modern systems designed to help your business move with clarity and confidence.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-pad bg-white/[0.035]">
      <div className="container-x grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-gold">Contact</p>
          <h2 className="font-display text-4xl font-bold leading-none text-white md:text-6xl">
            Talk to DUMA about your next AI system.
          </h2>
          <p className="mt-7 text-lg leading-9 text-mint/[0.72]">
            Tell us what you want to automate, improve, or launch. We will help you shape the right digital
            intelligence plan.
          </p>
          <div className="mt-8 space-y-3 text-mint/[0.78]">
            <p>Email: {contact.email}</p>
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
              <input className="field" type="email" placeholder="you@business.com" />
            </label>
            <label className="field-label">
              Phone
              <input className="field" type="tel" placeholder="+91" />
            </label>
            <label className="field-label">
              Business Name
              <input className="field" type="text" placeholder="Your business" />
            </label>
          </div>
          <label className="field-label mt-5">
            Need Help With
            <input className="field" type="text" placeholder="Automation, chatbot, website, CRM..." />
          </label>
          <label className="field-label mt-5">
            Message
            <textarea className="field min-h-36 resize-none" placeholder="Tell us what you want to build." />
          </label>
          <button className="premium-button mt-6 w-full border border-gold/70 bg-gold px-8 py-4 font-bold text-night" type="button">
            Book Free Consultation
          </button>
        </form>
      </div>
    </section>
  );
}

function ServiceModal({ service, onClose }) {
  if (!service) {
    return null;
  }

  return (
    <div className="modal-shell" role="dialog" aria-modal="true" aria-labelledby="service-title">
      <button className="modal-backdrop" type="button" aria-label="Close service details" onClick={onClose} />
      <article className="modal-card glass">
        <button className="modal-close" type="button" aria-label="Close service details" onClick={onClose}>
          x
        </button>
        <div className="service-banner">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-gold">DUMA Service</p>
            <h2 id="service-title" className="font-display text-4xl font-bold leading-none text-white md:text-6xl">
              {service.title}
            </h2>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <DetailBlock title="What this service does" copy={service.does} />
          <DetailBlock title="How DUMA delivers it" copy={service.delivery} />
          <DetailBlock title="Why choose DUMA" copy={service.why} />
          <div className="rounded-lg border border-mint/[0.12] bg-white/[0.035] p-5">
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-gold">Benefits for businesses</h3>
            <ul className="mt-4 space-y-3 text-mint/[0.72]">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold shadow-aureate" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-4 rounded-lg border border-gold/20 bg-gold/[0.08] p-5 md:flex-row md:items-center md:justify-between">
          <div className="text-sm leading-7 text-mint/[0.78]">
            <p>Email: {contact.email}</p>
          </div>
          <a className="premium-button border border-gold/70 bg-gold px-7 py-4 text-center font-bold text-night" href="#contact" onClick={onClose}>
            Talk to DUMA
          </a>
        </div>
      </article>
    </div>
  );
}

function DetailBlock({ title, copy }) {
  return (
    <div className="rounded-lg border border-mint/[0.12] bg-white/[0.035] p-5">
      <h3 className="text-sm font-black uppercase tracking-[0.18em] text-gold">{title}</h3>
      <p className="mt-4 leading-8 text-mint/[0.72]">{copy}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-mint/10 py-8">
      <div className="container-x flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
        <a href="#top" className="flex items-center gap-3">
          <DreamMark className="h-12 w-10" />
          <span className="font-display text-2xl font-bold text-white">DUMA AI Agency</span>
        </a>
        <p className="text-sm text-mint/[0.56]">Where Dreams Meet Digital Intelligence</p>
        <p className="text-sm text-mint/[0.45]">Copyright 2026 DUMA Agency. All rights reserved.</p>
      </div>
    </footer>
  );
}

function ParticleField() {
  return (
    <div className="particle-field pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      {Array.from({ length: 34 }).map((_, index) => (
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
