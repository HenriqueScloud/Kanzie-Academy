import { Input } from "../../components/Inputs";
import { useNavigate } from "react-router-dom";
import style from "./index.module.scss";
import { useForm } from "react-hook-form";
// import { forwardRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema } from "../../scripts/Zod/FormSchema";
// eslint-disable-next-line react/display-name
export const Login = () => {
  const Navigate = useNavigate();

  const navigate = useNavigate();

  // criando rotas de login para o dashboard

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(FormSchema),
  });

  const enviar = (data) => {
    console.log(data);
    navigate("/dashboard");
  };

  return (
    <>
      <header className={style.header}>
        <figure>
          <img src="../src/assets/Logo.png" alt="midia" />
        </figure>
      </header>
      <form className={style.form} onSubmit={handleSubmit(enviar)}>
        <h1>Login</h1>
        <Input
          label="Email"
          placeholder="Digite aqui seu email"
          type="text"
          id="email"
          name="email"
          {...register("email")}
        />
        {errors.email ? (
          <p className="errorMessage">{errors.email.message}</p>
        ) : null}
        <br />
        <Input
          label="Senha"
          placeholder="Digite sua Senha"
          type="password"
          id="Senha"
          name="Senha"
          {...register("senha")}
        />
        {errors.senha ? (
          <p className="errorMessage">{errors.senha.message}</p>
        ) : null}
        <br />
        <button type="submit" className="btn_primary">
          Entrar
        </button>
        <aside className={style.aside}>
          <p>Ainda não possui uma conta?</p>
          <button
            type="button"
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
