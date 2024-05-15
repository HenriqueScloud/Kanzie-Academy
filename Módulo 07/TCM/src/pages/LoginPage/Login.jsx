import { Input } from "../../components/Inputs";
import { useNavigate } from "react-router-dom";
import style from "./index.module.scss";
import { useForm } from "react-hook-form";
import { forwardRef } from "react";
// eslint-disable-next-line react/display-name
export const Login = forwardRef((props, ref) => {
  const Navigate = useNavigate();




  const navigate = useNavigate()

  // criando rotas de login para o dashboard 

  const { register, handleSubmit }= useForm()

  const enviar = (data) =>{
    console.log(data);
    navigate('/dashboard')
    
  }










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
        ref={ref}
          label="Email"
          placeholder="Digite aqui seu email"
          type="text"
          id="email"
          name="email"
          {...register("email")}
        />
        <br />
        <Input
        ref={ref}
          label="Senha"
          placeholder="Digite sua Senha"
          type="password"
          id='senha'
          name='senha'
          {...register("senha")}
        />
        <br />
        <button type='submit' className="btn_primary" >
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
});
