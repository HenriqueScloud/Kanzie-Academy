// import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom"
import { Input } from "../components/Header/Input";
// import { forwardRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormSchema } from "../scripts/formSchema";




// eslint-disable-next-line react/display-name, react/prop-types
export const ContactPage = ( ) => {
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: zodResolver(FormSchema)
  })
  const navigate = useNavigate();

  const enviar = (data) => {
  
    console.log(data);
  };

  return (
    <>
      <h1>Contact Page</h1>

      <form onSubmit={handleSubmit(enviar)}>
        <Input
          label="Nome"
          type="text"
          name="name"
          id="name"
          placeholder="name"
          {...register("name")}
          {...(errors.name ? <p>{errors.name.message}</p> : null)}
        />
        <Input
          label="email"
          type="email"
          name="email"
          id="email"
          placeholder="email"
          {...register("email")}
          {...(errors.email ? <p>{errors.email.message}</p> : null)}
        />

        <Input
          label="password"
          type="password"
          name="password"
          id="password"
          placeholder="password"
          {...register("password")}
          {...(errors.password ? <p>{errors.password.message}</p> : null)}
        />

        <button>Submit</button>
      </form>
    </>
  );
};
