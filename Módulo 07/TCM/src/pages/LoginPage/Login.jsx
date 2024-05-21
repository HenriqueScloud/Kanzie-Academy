import { Input } from "../../components/Inputs";
import { useNavigate } from "react-router-dom";
import style from "./index.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormLoginSchema } from "../../scripts/Zod/FormLoginSchema";
import { TodoContext } from "../../Providers/TodoContext";
import { useContext } from "react";
export const Login = () => {
  const Navigate = useNavigate();
  const { userLogin } = useContext(TodoContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(FormLoginSchema),
  });
  const submit = async (data) => {
    userLogin(data, Navigate);
    Navigate("/dashboard");
  };
  return (
    <>
      <header className={style.header}>
        <figure>
          <img src="../src/assets/Logo.png" alt="midia" />
        </figure>
      </header>
      <form className={style.form} onSubmit={handleSubmit(submit)}>
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
          id="password"
          name="password"
          {...register("password")}
        />
        {errors.password ? (
          <p className="errorMessage">{errors.password.message}</p>
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
