import { useState } from "react";
import subjectCombinations from "../data/subjectsData";

function SubjectCombination() {
  const [selected, setSelected] = useState("");
  const found = subjectCombinations.find((item) => item.course === selected);

  return (
    <section className="tool-card subject-card" aria-labelledby="subject-checker-title">
      <div className="tool-card-heading">
        <span className="tool-icon" aria-hidden="true">02</span>
        <div>
          <p className="tool-kicker">COURSE PLANNER</p>
          <h2 id="subject-checker-title">JAMB subject combination</h2>
        </div>
      </div>
      <p className="tool-description">
        Choose a course to see its commonly required UTME subjects.
      </p>
      <label className="course-select-label" htmlFor="course">Your intended course</label>
      <select
        className="course-select"
        id="course"
        value={selected}
        onChange={(event) => setSelected(event.target.value)}
      >
        <option value="">Select a course</option>
        {subjectCombinations.map((item) => (
          <option key={item.course} value={item.course}>{item.course}</option>
        ))}
      </select>
      {found ? (
        <div className="subject-result" aria-live="polite">
          <h3>{found.course}</h3>
          <p>Required UTME subjects</p>
          <ol>
            <li><span>Use of English</span><em>Compulsory</em></li>
            {found.subjects.map((subject) => (
              <li key={subject}><span>{subject}</span></li>
            ))}
          </ol>
          <p className="calculation-note">
            Requirements can vary by institution. Check the latest JAMB
            brochure and your chosen school before registering.
          </p>
        </div>
      ) : (
        <div className="subject-empty-state">
          <span aria-hidden="true">↗</span>
          <p>Your subject combination will appear here.</p>
        </div>
      )}
    </section>
  );
}

export default SubjectCombination;
