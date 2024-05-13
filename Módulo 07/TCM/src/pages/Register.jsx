import { Input } from "../components/Inputs/index";

export const Register = () => {
  return (
    <>
      <header>
        <h1>register</h1>
        <button>Voltar</button>
      </header>
      <main>
        <h1>Crie sua conta</h1>
        <p>Rápido e grátis, vamos nessa !</p>

        <form>
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
            id="Senha"
            name="senha"
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
          <label htmlFor="modulo">Selecionar Módulo</label><br />
          <select name="modulo" id="modulo">
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

          <button>Cadastre-se</button>
        </form>
      </main>
    </>
  );
};
