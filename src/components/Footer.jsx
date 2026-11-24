import { Link } from "react-router-dom";
import { WHATSAPP_URL } from "../data/contact";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <strong>JAMB TOOL BOX</strong>
          <p>
            Helpful admission resources, student tools, and guidance for your
            next step.
          </p>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          <Link to="/">Home</Link>
          <Link to="/#updates">Latest updates</Link>
          <Link to="/aggregate">Aggregate calculator</Link>
          <Link to="/subjects">Subject combinations</Link>
        </div>
        <div className="footer-column">
          <h2>Get in touch</h2>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Contact us on WhatsApp</a>
          <p className="footer-note">We’re here to help you plan with confidence.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} JAMB Tool Box. All rights reserved.</p>
        <p>Developed by Tersoo Iorwase</p>
      </div>
    </footer>
  );
}

export default Footer;
