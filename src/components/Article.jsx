function Article({ title, category, body }) {
  return (
    <article>
      <small>{category}</small>
      <h2>{title}</h2>
      <p>{body}</p>
    </article>
  );
}

export default Article;
