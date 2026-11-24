import SubjectCombination from "../components/subjectCombination";
import "./Tools.css";

function Subjects() {
  return (
    <div className="page-shell tool-page">
      <header className="page-heading">
        <p className="page-eyebrow">JAMB TOOL BOX · COURSE PLANNER</p>
        <h1>Choose the right subjects for your course.</h1>
        <p>
          Look up common UTME subject combinations for popular courses. Use the
          JAMB brochure and your institution’s current guidance to confirm.
        </p>
      </header>
      <SubjectCombination />
    </div>
  );
}

export default Subjects;
