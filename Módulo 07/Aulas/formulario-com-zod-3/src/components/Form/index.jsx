import { useForm } from "react-hook-form";
import { Input } from "./Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema } from "../../scripts/FormSchema";
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
export const Form = forwardRef(({},ref) => {
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
        ref={ref}
        label="nome: "
        name="name"
        id="name"
        type="text"
        placeholder="seu nome !"
        {...register("nome")}
        {...(errors.name ? <p> {errors.name.message} </p> : null)}
      />
      <Input
        ref={ref}
        label="E-mail: "
        name="email"
        id="email"
        type="email"
        placeholder="seu E-mail !"
        {...register("email")}
        {...(errors.email ? <p> {errors.email.message} </p> : null)}
      />
      <Input
        ref={ref}
        label="Senha: "
        name="password"
        id="password"
        type="password"
        placeholder="Sua senha !"
        {...register("password")}
        {...(errors.password ? <p> {errors.password.message} </p> : null)}
      />

      <select
        ref={ref}
        {...register("select")}
        {...(errors.select ? <p> {errors.select.message} </p> : null)}
      >
        <option value=""> selecione um modulo</option>
        <option value="modulo 1">modulo 1</option>
        <option value="modulo 2">modulo 2</option>
        <option value="modulo 3">modulo 3</option>
      </select>

      <button type='submit'>Enviar</button>
    </form>
  );
});
