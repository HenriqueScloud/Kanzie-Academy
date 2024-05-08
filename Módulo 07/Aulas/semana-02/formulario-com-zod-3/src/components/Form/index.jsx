import { useForm } from "react-hook-form";
import { Input } from "./Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema } from "../../scripts/FormSchema";

// eslint-disable-next-line react/display-name
export const Form =() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(FormSchema),
  });

  const enviar = (FormData) => {
    console.log(FormData);
    alert("mensagem enviada ");
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
      <select {...register("select")}>
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


      <button type="submit">Enviar</button>
    </form>
  );
};
