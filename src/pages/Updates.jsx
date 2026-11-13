import Article from "../components/Article";
import updates from "../data/updates";

function Updates() {
  return (
    <div>
      <h1>Latest Updates</h1>
      {updates.map((item) => (
        <Article key={item.id} title={item.title} category={item.category} body={item.body} />
      ))}
    </div>
  );
}

export default Updates;
