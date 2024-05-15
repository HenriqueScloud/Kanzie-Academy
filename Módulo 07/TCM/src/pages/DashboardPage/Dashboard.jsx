import style from "./index.module.scss";
import {useNavigate} from "react-router-dom"
export const Dashboard = () => {

  const navigate = useNavigate();






  // crair confirmações de usuario e pegar os valores que sarão passados dentro do return do usuario 







  
  return (
    <>
      <header className={style.header}>
        <div className="container">
          <figure>
            <img src="../src/assets/Logo.png" alt="midia" />
          </figure>
          <button onClick={()=>navigate('/')}>sair</button>
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
