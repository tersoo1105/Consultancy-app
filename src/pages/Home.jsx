import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Article from "../components/Article";
import EmailContactForm from "../components/EmailContactForm";
import WhatsAppFloat from "../components/WhatsAppFloat";
import { WHATSAPP_URL } from "../data/contact";
import updates from "../data/updates";
import "./Home.css";

const services = [
  {
    number: "01",
    title: "JAMB & WAEC updates",
    description:
      "Keep up with the latest JAMB, WAEC, and Post-UTME news in one place.",
    link: "/#updates",
    linkText: "View latest updates",
  },
  {
    number: "02",
    title: "Student tools",
    description:
      "Explore helpful tools for checking subject combinations and estimating your aggregate.",
    link: "/tools",
    linkText: "Explore tools",
  },
  {
    number: "03",
    title: "Personal guidance",
    description:
      "Have a question about your next step? Get in touch with our team.",
    link: WHATSAPP_URL,
    linkText: "Contact us",
    external: true,
  },
];

const faqs = [
  {
    question: "Is the aggregate calculator an official JAMB score?",
    answer:
      "No. It is a general estimate using the scores you enter. Each institution may use a different formula, so always confirm the official method with your school.",
  },
  {
    question: "Can I calculate my estimate without Post-UTME?",
    answer:
      "Yes. Post-UTME is optional. The calculator uses the score categories you provide and equally weights the available categories.",
  },
  {
    question: "How many WAEC subjects can I add?",
    answer:
      "You can enter up to eight subject names and scores. The calculator averages the WAEC scores you enter; blank score fields are not included.",
  },
  {
    question: "Are the listed subject combinations official?",
    answer:
      "They are common combinations for the listed courses, but requirements can vary by institution and change over time. Check the latest JAMB brochure and your chosen school’s admission guidance.",
  },
];

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#updates") {
      const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth";
      document.getElementById("updates")?.scrollIntoView({
        behavior,
        block: "start",
      });
    }
  }, [location.hash]);

  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="home-eyebrow">STUDENT TOOLKIT &amp; ADMISSION HUB</p>
          <h1>Smarter tools for your admission journey.</h1>
          <p className="home-intro">
            Calculate your aggregates, check course requirements, and track
            verified admission updates—all in one place.
          </p>
        </div>

        <aside className="home-highlight" aria-label="What you can do here">
          <span className="home-highlight-mark" aria-hidden="true">
            ✳
          </span>
          <p className="home-highlight-label">Quick Access</p>
          <h2>Not sure where to start?</h2>
          <p>
            Run an eligibility check in seconds, or reach out directly for
            one-on-one admission guidance.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            Talk to an advisor <span aria-hidden="true">↗</span>
          </a>
        </aside>
      </section>

      <section className="home-updates" id="updates" aria-labelledby="home-updates-title">
        <div className="home-updates-inner">
          <div className="home-section-heading">
            <div>
              <p className="home-eyebrow">STAY IN THE LOOP</p>
              <h2 id="home-updates-title">Latest admission updates</h2>
            </div>
            <p>
              JAMB and WAEC news in one place. Confirm dates and requirements
              with official sources before acting.
            </p>
          </div>
          <div className="home-updates-grid">
            {updates.map((item) => (
              <Article
                key={item.id}
                title={item.title}
                category={item.category}
                body={item.body}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="home-services" aria-labelledby="home-services-title">
        <div className="home-section-heading">
          <div>
            <p className="home-eyebrow">HOW WE CAN HELP</p>
            <h2 id="home-services-title">Start with what you need.</h2>
          </div>
          <p>Explore the resources available to support your next step.</p>
        </div>

        <div className="home-service-grid">
          {services.map((service) => (
            <article className="home-service-card" key={service.number}>
              <span className="home-service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {service.external ? (
                <a href={service.link} target="_blank" rel="noreferrer">
                  {service.linkText} <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <Link to={service.link}>
                  {service.linkText} <span aria-hidden="true">→</span>
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="home-contact" aria-labelledby="home-contact-title">
        <div className="home-contact-inner">
          <div className="home-contact-copy">
            <p className="home-eyebrow">GET IN TOUCH</p>
            <h2 id="home-contact-title">Send us a message.</h2>
            <p>
              Have a question about JAMB Tool Box? Fill in the form and we’ll get
              back to you by email.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Prefer WhatsApp? Chat with us <span aria-hidden="true">↗</span>
            </a>
          </div>
          <EmailContactForm />
        </div>
      </section>

      <section className="home-faq" aria-labelledby="home-faq-title">
        <div className="home-faq-heading">
          <p className="home-eyebrow">GOOD TO KNOW</p>
          <h2 id="home-faq-title">Frequently asked questions</h2>
          <p>Quick answers to help you use JAMB Tool Box with confidence.</p>
        </div>
        <div className="home-faq-list">
          {faqs.map((faq) => (
            <details className="home-faq-item" key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <WhatsAppFloat />
    </div>
  );
}

export default Home;
