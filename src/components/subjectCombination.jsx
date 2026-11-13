import { useState } from "react";
import subjectCombinations from "../data/subjectsData";

function SubjectCombination() {
  const [selected, setSelected] = useState("");
  const found = subjectCombinations.find((item) => item.course === selected);

  return (
    <div className="tool-card">
      <h2>JAMB Subject Combination</h2>
      <label htmlFor="course">Select your course</label>
      <select id="course" value={selected} onChange={(e) => setSelected(e.target.value)}>
        <option value="">-- Choose a course --</option>
        {subjectCombinations.map((item) => (
          <option key={item.course} value={item.course}>{item.course}</option>
        ))}
      </select>
      {found && (
        <div className="result">
          <h3>{found.course}</h3>
          <ol>
            <li>Use of English (compulsory)</li>
            {found.subjects.map((subject) => <li key={subject}>{subject}</li>)}
          </ol>
        </div>
      )}
    </div>
  );
}

export default SubjectCombination;
