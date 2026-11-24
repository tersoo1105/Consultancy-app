import AggregateCalculator from "../components/AggregateCalculator";
import "./Tools.css";

function Aggregate() {
  return (
    <div className="page-shell tool-page">
      <header className="page-heading">
        <p className="page-eyebrow">JAMB TOOL BOX · AGGREGATE</p>
        <h1>Estimate your admission score.</h1>
        <p>
          Add your JAMB, WAEC, and optional Post-UTME scores to get a clear
          estimate based on the results you have.
        </p>
      </header>
      <AggregateCalculator />
    </div>
  );
}

export default Aggregate;
