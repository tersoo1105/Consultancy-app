import { Link } from "react-router-dom";
import "./Tools.css";

const tools = [
  {
    number: "01",
    title: "Aggregate calculator",
    description:
      "Estimate your admission score using JAMB, WAEC subject scores, and optional Post-UTME.",
    to: "/aggregate",
    action: "Open calculator",
  },
  {
    number: "02",
    title: "Subject combination checker",
    description:
      "Find common UTME subject requirements for your intended course.",
    to: "/subjects",
    action: "Check subjects",
  },
];

function Tools() {
  return (
    <div className="page-shell tools-hub">
      <header className="page-heading">
        <p className="page-eyebrow">JAMB TOOL BOX</p>
        <h1>Practical tools for your next step.</h1>
        <p>Choose a tool to help plan your admission journey.</p>
      </header>
      <div className="tools-hub-grid">
        {tools.map((tool) => (
          <article className="tool-hub-card" key={tool.number}>
            <span className="tool-icon" aria-hidden="true">{tool.number}</span>
            <h2>{tool.title}</h2>
            <p>{tool.description}</p>
            <Link to={tool.to}>{tool.action} <span aria-hidden="true">→</span></Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Tools;
