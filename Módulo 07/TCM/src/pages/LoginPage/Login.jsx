import { Input } from "../../components/Inputs";
import { useNavigate } from "react-router-dom";
import style from "./index.module.scss";
export const Login = () => {
  const Navigate = useNavigate();
  return (
    <>
      <header className={style.header}>
        <figure>
          <img src="#" alt="Kenzie Hub" />
        </figure>
      </header>
      <form className={style.form}>
        <h1>Login</h1>
        <Input label="Emal" placeholder="Digite seu Email" type="email" />
        <br />
        <Input label="Senha" placeholder="Digite sua Senha" type="Password" />
        <br />
        <button className="btn_primary">Entrar</button>
        <aside className={style.aside}>
          <p>Ainda não possui uma conta?</p>
          <button
            className="btn_desabilitado"
            onClick={() => Navigate("/register")}
          >
            Cadastre-se
          </button>
        </aside>
      </form>
    </>
  );
};
