import { Input } from "../../components/Inputs/index";
import { useNavigate } from "react-router-dom";
import style from "./index.module.scss";
import { useForm } from "react-hook-form";
import { forwardRef } from "react";
// import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
export const Register = forwardRef((props, ref) => {
  const Navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  // fazer o registro do usuario dentro da api e encaminhalo para dentro do dashboard

  const enviar = (data) => {
    console.log(data);
    // Navigate("/dashboard");
  };

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
        <form className={style.form} onSubmit={handleSubmit(enviar)}>
          <Input
            ref={ref}
            label="Nome"
            placeholder="Digite aqui seu nome"
            type="text"
            id="name"
            name="name"
            {...register('name')}
          />
          <Input
            ref={ref}
            label="Email"
            placeholder="Digite aqui seu email"
            type="text"
            id="email"
            name="email"
            {...register("email")}
          />
          <Input
            ref={ref}
            label="Senha"
            placeholder="Digite aqui sua Senha"
            type="password"
            id="Senha"
            name="senha"
            {...register("Senha")}
          />
          <Input
            ref={ref}
            label="Confimar senha"
            placeholder="Digite novamente sua senha "
            type="password"
            id="confirmSenha"
            name="confirmSenha"
            {...register("confirmSenha")}
          />
          <Input
            ref={ref}
            label="Bio"
            placeholder="Fale sobre você "
            type="text"
            id="bio"
            name="bio"
            {...register("bio")}
          />
          <Input
            ref={ref}
            label="contato"
            placeholder="Opção de contato "
            type="text"
            id="contato"
            name="contato"
            {...register("contato")}
          />
          <label htmlFor="modulo">Selecionar Módulo</label>
          <br />
          <select
            ref={ref}
            name="modulo"
            className={style.select}
            {...register("modulo")}
          >
            <option value="Módulo 1">Módulo 1</option>
            <option value="Módulo 2">Módulo 2</option>
            <option value="Módulo 3">Módulo 3</option>
            <option value="Módulo 4">Módulo 4</option>
            <option value="Módulo 5">Módulo 5</option>
            <option value="Módulo 6">Módulo 6</option>
            <option value="Módulo 7">Módulo 7</option>
          </select>
          <button type='submit' className=" btn_primaryNegative" >
            Cadastre-se
          </button>
        </form>
      </main>
    </>
  );
});
