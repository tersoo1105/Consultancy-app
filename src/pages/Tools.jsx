import AggregateCalculator from "../components/AggregateCalculator";
import SubjectCombination from "../components/subjectCombination";

function Tools() {
  return (
    <div>
      <h1>Student Tools</h1>
      <p>Aggregate calculator and JAMB subject checker</p>
      <AggregateCalculator />
      <SubjectCombination />
    </div>
  );
}

export default Tools;