import { Link } from "react-router-dom";
import "./Home.css";

const services = [
  {
    number: "01",
    title: "Admission updates",
    description:
      "Keep up with the latest JAMB, WAEC, and Post-UTME news in one place.",
    link: "/updates",
    linkText: "Browse updates",
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
    link: "/contact",
    linkText: "Contact us",
  },
];

function Home() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="home-eyebrow">YOUR EDUCATION, YOUR NEXT STEP</p>
          <h1>Make your next move with confidence.</h1>
          <p className="home-intro">
            Get clear admission updates, useful student tools, and guidance to
            help you plan what comes next.
          </p>
          <div className="home-actions">
            <Link className="home-button home-button-primary" to="/updates">
              See latest updates <span aria-hidden="true">→</span>
            </Link>
            <Link className="home-text-link" to="/tools">
              Explore student tools
            </Link>
          </div>
        </div>

        <aside className="home-highlight" aria-label="What you can do here">
          <span className="home-highlight-mark" aria-hidden="true">
            ✳
          </span>
          <p className="home-highlight-label">A little more clarity</p>
          <h2>One place to plan your next step.</h2>
          <p>
            Find timely information and practical resources for your education
            journey.
          </p>
          <Link to="/contact">
            Talk to us <span aria-hidden="true">↗</span>
          </Link>
        </aside>
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
              <Link to={service.link}>
                {service.linkText} <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
