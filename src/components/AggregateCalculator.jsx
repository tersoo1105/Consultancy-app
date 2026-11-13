import { useState } from "react";

function AggregateCalculator() {
  const [jamb, setJamb] = useState("");
  const [postUtme, setPostUtme] = useState("");
  const [aggregate, setAggregate] = useState(null);
  const [error, setError] = useState("");
  function handleCalculate() {
    const jambScore = Number(jamb);
    const postScore = Number(postUtme);

    if (jamb === "" || postUtme === "") {
      setError("Please fill in both scores."); setAggregate(null); return;
    }
    if (jambScore < 0 || jambScore > 400) {
      setError("JAMB score must be between 0 and 400."); setAggregate(null); return;
    }
    if (postScore < 0 || postScore > 100) {
      setError("Post UTME score must be between 0 and 100."); setAggregate(null); return;
    }

    setError(""); setAggregate((jambScore / 8 + postScore / 2).toFixed(2));
  }
  return (
    <div className="tool-card">
      <h2>Aggregate Calculator</h2>
      <p>Aggregate = (JAMB / 8) + (Post UTME / 2)</p>
      <label>JAMB score (0 - 400)</label>
      <input type="number" value={jamb} onChange={(e) => setJamb(e.target.value)} placeholder="e.g. 280" />
      <label>Post UTME score (0 - 100)</label>
      <input type="number" value={postUtme} onChange={(e) => setPostUtme(e.target.value)} placeholder="e.g. 70" />
      <button onClick={handleCalculate}>Calculate</button>
      {error && <p className="error">{error}</p>}
      {aggregate !== null && <p className="result">Your aggregate is {aggregate} / 100</p>}
      <p className="note">Some schools use a different formula. Confirm with your school.</p>
    </div>
  );
}
export default AggregateCalculator;
