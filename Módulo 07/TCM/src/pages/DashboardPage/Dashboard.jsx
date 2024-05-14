import style from "./index.module.scss";

export const Dashboard = () => {
  return (
    <>
      <header className={style.header}>
        <div className="container">
          <figure>
            <img src="#" alt="kenzie Hub" />
          </figure>
          <button>sair</button>
        </div>
      </header>
      <main className={style.main}>
        <section>
          <div className="container">
            <h1>Olá, Henrique Silva Mendes ! </h1>
            <p>primeiro modulo ( Introdução ao Front-End )</p>
          </div>
        </section>
        <section>
          <div className="container">
            <h1>Que pena! Estamos em desenvolvimento :(</h1>
            <p>
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </p>
          </div>
        </section>
      </main>
    </>
  );
};
