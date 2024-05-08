import { useForm } from "react-hook-form";
import { Input } from "./Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema } from "../../scripts/FormSchema";
import { API } from "../../services/api";

// eslint-disable-next-line react/display-name
export const Form =() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset // é para resetar o formulário após o envio das informações !
  } = useForm({
    resolver: zodResolver(FormSchema),
  });

  const userregister = async (formData) =>{
    try {
      const {data}= await API.post("/emails", formData)
      alert("mensagem enviada ");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const enviar = (FormData) => {
    userregister(FormData)
    reset()
  };

  return (
    <form onSubmit={handleSubmit(enviar)}>
      <Input
        label="nome: "
        name="name"
        id="name"
        type="text"
        placeholder="seu nome !"
        {...register("name")}
      /><br />
      {errors.name ? <p> {errors.name.message} </p> : null}<br />
      <Input
        label="E-mail: "
        name="email"
        id="email"
        type="email"
        placeholder="seu E-mail !"
        {...register("email")}
      /><br />
      {errors.email ? <p> {errors.email.message} </p> : null}<br />
      <select {...register("departament")}>
        <option value=""> selecione um modulo</option>
        <option value="modulo 1">modulo 1</option>
        <option value="modulo 2">modulo 2</option>
        <option value="modulo 3">modulo 3</option>
      </select><br />
      {errors.select ? <p> {errors.select.message} </p> : null}<br />
      <Input
        label="Senha: "
        name="password"
        id="password"
        type="password"
        placeholder="Sua senha !"
        {...register("password")}
      /><br />
      {errors.password ? <p> {errors.password.message} </p> : null}<br />

      <Input
        label="confirm Senha: "
        name="confirmpassword"
        id="confirmpassword"
        type="password"
        placeholder="confirm Sua senha !"
        {...register("confirmpassword")}
      /><br />
      {errors.confirmpassword ? <p> {errors.confirmpassword.message} </p> : null}<br />


      <textarea {...register("massege")} placeholder="deixe seua mensagem " ></textarea>


      <button type="submit">Enviar</button>
    </form>
  );
};
