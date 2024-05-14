import { Input } from "../../components/Inputs/index";
import { useNavigate } from "react-router-dom";
import style from "./index.module.scss";

export const Register = () => {
  const Navigate = useNavigate();
  return (
    <>
      <header className={style.header}>
        <figure>
          <img src="../src/assets/Logo.png" alt="midia" />
        </figure>
        <button onClick={() => Navigate("/")}>Voltar</button>
      </header>
      <main className={style.main}>
        <h1>Crie sua conta</h1>
        <p>Rápido e grátis, vamos nessa !</p>

        <form className={style.form}>
          <Input
            label="Nome"
            placeholder="Digite aqui seu nome"
            type="text"
            id="nome"
            name="nome"
          />
          <br />
          <br />
          <Input
            label="Email"
            placeholder="Digite aqui seu email"
            type="text"
            id="email"
            name="email"
          />
          <br />
          <br />
          <Input
            label="Senha"
            placeholder="Digite aqui sua Senha"
            type="password"
            id="Senha"
            name="senha"
          />
          <br />
          <br />
          <Input
            label="Confimar senha"
            placeholder="Digite novamente sua senha "
            type="password"
            id="confirmSenha"
            name="confirmSenha"
          />
          <br />
          <br />
          <Input
            label="Bio"
            placeholder="Fale sobre você "
            type="text"
            id="bio"
            name="bio"
          />
          <br />
          <br />

          <Input
            label="Contato"
            placeholder="Opção de contato "
            type="text"
            id="Contato"
            name="Contato"
          />
          <br />
          <br />

          <label htmlFor="modulo">Selecionar Módulo</label>
          <br />
          <select name="modulo" className={style.select}>
            <option value="Módulo 1">Módulo 1</option>
            <option value="Módulo 2">Módulo 2</option>
            <option value="Módulo 3">Módulo 3</option>
            <option value="Módulo 4">Módulo 4</option>
            <option value="Módulo 5">Módulo 5</option>
            <option value="Módulo 6">Módulo 6</option>
            <option value="Módulo 7">Módulo 7</option>
          </select>

          <br />
          <br />

          <button className=" btn_primaryNegative">Cadastre-se</button>
        </form>
      </main>
    </>
  );
};
