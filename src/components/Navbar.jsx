import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/aggregate", label: "Aggregate calculator" },
  { to: "/subjects", label: "Subject combination checker" },
];

function Navbar() {
  return (
    <header className="site-header">
      <div className="navbar-inner">
        <Link className="brand-mark" to="/" aria-label="JAMB Tool Box home">
          <span className="brand-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.1 6.1a2.1 2.1 0 0 1-3-3l6.1-6.1a6 6 0 0 1 7.9-7.9l-3.8 3.8Z" />
            </svg>
          </span>
          <span>JAMB TOOL BOX</span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <span className="navbar-spacer" aria-hidden="true" />
      </div>
    </header>
  );
}

export default Navbar;
