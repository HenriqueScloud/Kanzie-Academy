import { useContext } from "react";
import style from "./index.module.scss";
import { Link } from "react-router-dom";
import { TodoContext } from "../../Providers/TodoContext";
export const Dashboard = () => {
  const { user, userLogout } = useContext(TodoContext);
  return (
    <>
      <header className={style.header}>
        <div className="container">
          <figure>
            <img src="../src/assets/Logo.svg" alt="midia" />
          </figure>
          <Link
            to="/"
            onClick={() => {
              userLogout();
            }}
          >
            sair
          </Link>
        </div>
      </header>
      <main className={style.main}>
        <section>
          <div className="container">
            <h1>Olá, {user?.name} ! </h1>
            <p>{user?.course_module} - ( Introdução ao Front-End )</p>
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
