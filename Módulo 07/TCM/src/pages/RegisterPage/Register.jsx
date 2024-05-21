import { Input } from "../../components/Inputs/index";
import { useNavigate } from "react-router-dom";
import style from "./index.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormRegisterSchema } from "../../scripts/Zod/FormRegisterSchema";
import { useContext } from "react";
import { TodoContext } from "../../Providers/TodoContext";
export const Register = () => {
  const navigate = useNavigate();
  const { userRegister } = useContext(TodoContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(FormRegisterSchema),
  });
  const enviar = async (data) => {
    userRegister(data, navigate);
    navigate("/");
  };
  return (
    <>
      <header className={style.header}>
        <figure>
          <img src="../src/assets/Logo.png" alt="midia" />
        </figure>
        <button onClick={() => navigate("/")}>Voltar</button>
      </header>
      <main className={style.main}>
        <h1>Crie sua conta</h1>
        <p>Rápido e grátis, vamos nessa !</p>
        <form className={style.form} onSubmit={handleSubmit(enviar)}>
          <Input
            label="Nome"
            placeholder="Digite aqui seu nome"
            type="text"
            id="name"
            name="name"
            {...register("name")}
          />
          {errors.name ? (
            <p className="errorMessage">{errors.name.message}</p>
          ) : null}
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
          <Input
            label="Senha"
            placeholder="Digite aqui sua Senha"
            type="password"
            id="password"
            name="password"
            {...register("password")}
          />
          {errors.password ? (
            <p className="errorMessage">{errors.password.message}</p>
          ) : null}
          <Input
            label="Confimar senha"
            placeholder="Digite novamente sua senha "
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword ? (
            <p className="errorMessage">{errors.confirmPassword.message}</p>
          ) : null}
          <Input
            label="Bio"
            placeholder="Fale sobre você "
            type="text"
            id="bio"
            name="bio"
            {...register("bio")}
          />
          {errors.bio ? (
            <p className="errorMessage">{errors.bio.message}</p>
          ) : null}
          <Input
            label="contato"
            placeholder="Opção de contato "
            type="text"
            id="contact"
            name="contact"
            {...register("contact")}
          />
          {errors.contact ? (
            <p className="errorMessage">{errors.contact.message}</p>
          ) : null}
          <label htmlFor="modulo">Selecionar Módulo</label>
          <br />
          <select
            name="course_module"
            className={style.select}
            {...register("course_module")}
          >
            <option value="Módulo 1">Módulo 1</option>
            <option value="Módulo 2">Módulo 2</option>
            <option value="Módulo 3">Módulo 3</option>
            <option value="Módulo 4">Módulo 4</option>
            <option value="Módulo 5">Módulo 5</option>
            <option value="Módulo 6">Módulo 6</option>
            <option value="Módulo 7">Módulo 7</option>
          </select>
          {errors.course_module ? (
            <p className="errorMessage">{errors.course_module.message}</p>
          ) : null}
          <button type="submit" className=" btn_primaryNegative">
            Cadastre-se
          </button>
        </form>
      </main>
    </>
  );
};
