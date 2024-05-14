import { Input } from "../../components/Inputs";
import { useNavigate } from "react-router-dom";
import style from "./index.module.scss";
export const Login = () => {
  const Navigate = useNavigate();

  return (
    <>
      <header className={style.header}>
        <figure>
          <img src="../src/assets/Logo.png" alt="midia" />
        </figure>
      </header>
      <form className={style.form}>
        <h1>Login</h1>
        <Input
          label="Email"
          placeholder="Digite aqui seu email"
          type="text"
          id="email"
          name="email"
        />
        <br />
        <Input label="Senha" placeholder="Digite sua Senha" type="password" />
        <br />
        <button className="btn_primary" onClick={() => Navigate("/dashboard")}>
          Entrar
        </button>
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
