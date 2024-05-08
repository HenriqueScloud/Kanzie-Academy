import { Inputs } from "./Inputs/Inputs";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


export const Form = () => {
  const {register, handleSubmit}= useForm()

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const submit = (formData) => {
    navigate("/");
    console.log(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <h1>formulario de registro </h1>
        <Inputs
          type="text"
          title="name"
          placeholder="Seu nome"
          id="name"
          {...register("name")}
        />
        <br />
        <Inputs
          type="email"
          title="email"
          placeholder="Seu email"
          id="email"
          {...register("email")}
        />
        <br />
        <Inputs
          type="password"
          title="Senha"
          placeholder="Crie sua senha"
          id="senha"
          {...register("password")}
        />
        <br />
        <input type="submit" onClick={submit} />
      </form>
    </>
  );
};
