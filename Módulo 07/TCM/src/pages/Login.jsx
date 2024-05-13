import { Link } from "react-router-dom";
import { Input } from "../components/Inputs";

export const Login = () => {
    return (
      <main>
        <header>
          <img src="#" alt="Kenzie Hub" />
        </header>
        <form>
          <h1>Login</h1>
          <Input label="Emal" placeholder="Digite seu Email" type="email" /><br />
          <Input label="Senha" placeholder="Digite sua Senha" type="Password" /><br />
          <button>Entrar</button>
        </form>

        <aside>
          <p>Ainda não possui uma conta?</p>
          <button>
            <Link to="/register">Cadastre-se</Link>
          </button>
        </aside>
      </main>
    );
};
