import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/updates">Updates</Link>
      <Link to="/tools">Student Tools</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
