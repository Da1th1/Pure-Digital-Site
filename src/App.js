import "./App.css";
import { useEffect, useRef, useState } from "react";
import heroVideo from "./assets/hero.mp4";
import logoWhite from "./assets/puredigital-white.png";
import mark from "./assets/mark.png";
import { SITE, SERVICES, PROCESS, FAQ } from "./content";

const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent("New project enquiry")}`;

function useDublinTime() {
  const fmt = () =>
    new Intl.DateTimeFormat("en-IE", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/Dublin",
    }).format(new Date());
  const [time, setTime] = useState(fmt);
  useEffect(() => {
    const id = setInterval(() => setTime(fmt()), 15000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function HeroVideo() {
  const ref = useRef(null);
  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (reduce?.matches) ref.current?.pause();
  }, []);
  return (
    <video
      ref={ref}
      className="hero-video"
      src={heroVideo}
      poster="/hero-poster.jpg"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
    />
  );
}

function Header() {
  return (
    <header className="site-header">
      <a href="#top" className="brand" aria-label="Pure Digital home">
        <img src={logoWhite} alt="Pure Digital" width="86" height="52" />
      </a>
      <nav aria-label="Main">
        <ul className="nav">
          <li><a className="pill" href="#services">Services</a></li>
          <li><a className="pill" href="#process">Process</a></li>
          <li><a className="pill" href="#faq">FAQ</a></li>
        </ul>
      </nav>
      <a className="pill pill-solid" href={mailto}>Start a project</a>
    </header>
  );
}

function Hero() {
  const time = useDublinTime();
  return (
    <section className="hero panel" id="top">
      <HeroVideo />
      <div className="hero-shade" />
      <Header />
      <div className="hero-body">
        <p className="eyebrow">App development studio · Dublin, Ireland</p>
        <h1 className="hero-title">
          Just Pure.
          <br />
          <em>Digital innovation.</em>
        </h1>
        <p className="hero-lede">
          We design and build iOS, Android and web apps for ambitious founders,
          small businesses and sports organisations, from first sketch to App Store launch.
        </p>
        <div className="hero-ctas">
          <a className="pill pill-solid pill-lg" href={mailto}>Start a project</a>
          <a className="pill pill-lg" href="#services">What we build</a>
        </div>
      </div>
      <div className="hero-foot">
        <span>
          <span className="dot" aria-hidden="true" /> Dublin, IE · {time}
        </span>
        <img src={mark} alt="" width="40" height="40" className="hero-mark" />
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["iOS apps", "Android apps", "Web apps", "Product design", "AI integration", "Made in Dublin"];
  const row = items.map((t) => (
    <span key={t}>
      {t}
      <i aria-hidden="true">✦</i>
    </span>
  ));
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">{row}{row}</div>
    </div>
  );
}

function Manifesto() {
  return (
    <section className="section manifesto" aria-labelledby="manifesto-h">
      <h2 id="manifesto-h" className="display">Manifesto</h2>
      <p className="statement">
        We don't build apps for the sake of it. We find the <mark>real problem</mark>, strip
        away everything that doesn't matter and ship software people <mark>actually use</mark>.
      </p>
      <div className="manifesto-cols">
        <p>
          Pure means simple, honest and fast. Simple products that are a joy to use. Honest
          advice about what to build, and what not to. Fast feedback, with a working build in
          your hands every week.
        </p>
        <p>
          We're a small senior team based in Dublin. You talk to the people designing and
          writing your app, not an account manager. And when it launches, we're still here.
        </p>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section" id="services" aria-labelledby="services-h">
      <div className="section-head">
        <h2 id="services-h" className="display">What we build</h2>
        <p className="section-intro">
          Mobile and web app development, product design and AI integration for companies
          in Ireland, the UK and Europe.
        </p>
      </div>
      <div className="cards">
        {SERVICES.map((s) => (
          <article className="card" key={s.n}>
            <span className="card-n">{s.n}</span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
            <ul className="tags">
              {s.tags.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section panel panel-dark" id="process" aria-labelledby="process-h">
      <h2 id="process-h" className="display">How we work</h2>
      <ol className="steps">
        {PROCESS.map((p, i) => (
          <li key={p.step}>
            <span className="step-n">0{i + 1}</span>
            <h3>{p.step}</h3>
            <p>{p.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Faq() {
  return (
    <section className="section" id="faq" aria-labelledby="faq-h">
      <div className="section-head">
        <h2 id="faq-h" className="display">FAQ</h2>
        <p className="section-intro">Straight answers about working with an app developer in Dublin.</p>
      </div>
      <div className="faq">
        {FAQ.map((f, i) => (
          <details key={f.q} open={i === 0}>
            <summary><h3>{f.q}</h3></summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer className="panel contact" id="contact">
      <p className="eyebrow">Got an idea? Let's get physical or keep it digital.</p>
      <a className="get-in-touch" href={mailto}>Get in touch</a>
      <p className="contact-email">
        <a href={mailto}>{SITE.email}</a>
      </p>
      <div className="contact-foot">
        <span>© {new Date().getFullYear()} {SITE.name} · App developers in {SITE.city}, {SITE.country}</span>
        <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">
          Instagram {SITE.instagramHandle}
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Hero />
      <Marquee />
      <main id="main">
        <Manifesto />
        <Services />
        <Process />
        <Faq />
      </main>
      <Contact />
      <div className="grain" aria-hidden="true" />
    </>
  );
}
