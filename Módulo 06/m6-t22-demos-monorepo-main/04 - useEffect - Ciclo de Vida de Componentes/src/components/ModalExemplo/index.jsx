import { useState, useEffect } from "react";
import { fetchAPI } from "../../services/api";

export const ModalExemplo = ({ setVisible }) => {
  const [counter, setCounter] = useState(0);
  const [articles, setArticle] = useState([]);

  const getArticles = async () => {
    const articlesArray = await fetchAPI();
    console.log(articlesArray);
    setArticle(articlesArray);
  };

  console.log("fui remontado");
  // getArticles();

  // onMount
  useEffect(() => {
    console.log("componente montado, executar uma 1x função");

    getArticles();
  }, []);

  return (
    <div className="modal">
      <h2>Modal</h2>

      <article>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum minima
        facilis in, cumque tempore quos unde saepe tempora laborum? Error ex,
        nobis praesentium cupiditate deleniti hic sequi laboriosam neque
        asperiores!
      </article>

      <button className="btn lg" onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>

      <button className="btn lg" onClick={() => setVisible(false)}>
        Fechar Modal
      </button>

      {articles.map(({ id, title, summary }) => {
        return (
          <article key={id}>
            <h3>{title}</h3>
            <p>{summary}</p>
          </article>
        );
      })}
    </div>
  );
};
