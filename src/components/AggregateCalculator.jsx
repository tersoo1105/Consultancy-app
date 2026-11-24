import { useState } from "react";

const initialWaecSubjects = Array.from({ length: 8 }, () => ({
  subject: "",
  score: "",
}));

function AggregateCalculator() {
  const [jamb, setJamb] = useState("");
  const [postUtme, setPostUtme] = useState("");
  const [waecSubjects, setWaecSubjects] = useState(initialWaecSubjects);
  const [aggregate, setAggregate] = useState(null);
  const [error, setError] = useState("");
  const [breakdown, setBreakdown] = useState([]);

  function updateWaecSubject(index, field, value) {
    setWaecSubjects((subjects) =>
      subjects.map((subject, subjectIndex) =>
        subjectIndex === index ? { ...subject, [field]: value } : subject,
      ),
    );
  }

  function handleCalculate(event) {
    event.preventDefault();
    const categories = [];
    const jambScore = jamb === "" ? null : Number(jamb);
    const postScore = postUtme === "" ? null : Number(postUtme);
    const enteredWaec = waecSubjects.filter(({ score }) => score !== "");

    if (jambScore !== null) {
      if (!Number.isFinite(jambScore) || jambScore < 0 || jambScore > 400) {
        setError("JAMB score must be between 0 and 400.");
        setAggregate(null);
        return;
      }
      categories.push({ label: "JAMB", score: jambScore / 4 });
    }

    if (postScore !== null) {
      if (!Number.isFinite(postScore) || postScore < 0 || postScore > 100) {
        setError("Post-UTME score must be between 0 and 100.");
        setAggregate(null);
        return;
      }
      categories.push({ label: "Post-UTME", score: postScore });
    }

    for (const { score } of enteredWaec) {
      const waecScore = Number(score);
      if (!Number.isFinite(waecScore) || waecScore < 0 || waecScore > 100) {
        setError("Each WAEC subject score must be between 0 and 100.");
        setAggregate(null);
        return;
      }
    }

    if (enteredWaec.length > 0) {
      const waecAverage =
        enteredWaec.reduce((total, { score }) => total + Number(score), 0) /
        enteredWaec.length;
      categories.push({ label: "WAEC subject average", score: waecAverage });
    }

    if (categories.length === 0) {
      setError("Enter at least one score to calculate your estimate.");
      setAggregate(null);
      return;
    }

    const total = categories.reduce((sum, category) => sum + category.score, 0);
    setError("");
    setBreakdown(categories);
    setAggregate((total / categories.length).toFixed(2));
  }

  return (
    <section className="tool-card aggregate-card" aria-labelledby="aggregate-title">
      <div className="tool-card-heading">
        <span className="tool-icon" aria-hidden="true">01</span>
        <div>
          <p className="tool-kicker">ADMISSION ESTIMATE</p>
          <h2 id="aggregate-title">Aggregate calculator</h2>
        </div>
      </div>
      <p className="tool-description">
        Enter the scores you have. Post-UTME is optional, and the calculator
        will estimate from whichever categories you provide.
      </p>

      <form className="aggregate-form" onSubmit={handleCalculate} noValidate>
        <div className="score-grid">
          <label className="score-field">
            <span>JAMB score <small>(0–400)</small></span>
            <input
              type="number"
              min="0"
              max="400"
              step="1"
              inputMode="numeric"
              value={jamb}
              onChange={(event) => setJamb(event.target.value)}
              placeholder="0"
            />
          </label>
          <label className="score-field">
            <span>Post-UTME score <small>(optional, 0–100)</small></span>
            <input
              type="number"
              min="0"
              max="100"
              step="any"
              inputMode="decimal"
              value={postUtme}
              onChange={(event) => setPostUtme(event.target.value)}
              placeholder="0"
            />
          </label>
        </div>

        <fieldset className="waec-fieldset">
          <legend>WAEC subject scores <span>Optional · enter up to 8</span></legend>
          <p className="fieldset-help">
            Add the subject name and your score out of 100. Only entered scores
            are included in the WAEC average.
          </p>
          <div className="waec-score-grid">
            {waecSubjects.map((subject, index) => (
              <div className="waec-score-row" key={index}>
                <label className="waec-subject-name">
                  <span className="visually-hidden">WAEC subject {index + 1} name</span>
                  <input
                    type="text"
                    value={subject.subject}
                    onChange={(event) =>
                      updateWaecSubject(index, "subject", event.target.value)
                    }
                    placeholder={`Subject ${index + 1}`}
                  />
                </label>
                <label className="waec-subject-score">
                  <span className="visually-hidden">
                    WAEC subject {index + 1} score out of 100
                  </span>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="any"
                    inputMode="decimal"
                    value={subject.score}
                    onChange={(event) =>
                      updateWaecSubject(index, "score", event.target.value)
                    }
                    placeholder="0"
                  />
                </label>
              </div>
            ))}
          </div>
        </fieldset>

        <button className="calculate-button" type="submit">
          Calculate my estimate
        </button>
      </form>

      {error && <p className="form-message form-error" role="alert">{error}</p>}
      {aggregate !== null && (
        <div className="aggregate-result" aria-live="polite">
          <p className="result-label">Estimated aggregate</p>
          <p className="result-score">{aggregate}<span> / 100</span></p>
          <ul className="result-breakdown">
            {breakdown.map(({ label, score }) => (
              <li key={label}>
                <span>{label}</span>
                <strong>{score.toFixed(2)}</strong>
              </li>
            ))}
          </ul>
        </div>
      )}
      <p className="calculation-note">
        Estimate only: JAMB is converted to a score out of 100, entered WAEC
        marks are averaged, and each available category (JAMB, WAEC, and
        Post-UTME) is weighted equally. Schools use different formulas, so
        confirm with your institution.
      </p>
    </section>
  );
}

export default AggregateCalculator;
