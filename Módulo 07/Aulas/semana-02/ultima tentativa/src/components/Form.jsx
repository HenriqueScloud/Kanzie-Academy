import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema } from "./formSchema";
import React from "react";


export const Form = () =>{

  const {register, handleSubmit,formState: {errors}} = useForm({
    resolver:zodResolver(formSchema)
  })


  const submit = (formData) =>{
    console.log(formData);
    alert('sua mensagem foi enviada com sucesso !')

  }



  return (
    <form onSubmit={handleSubmit(submit)}>
      <input 
        type="text" 
        placeholder="seu nome" 
        {...register("name")} />
      {errors.name ? <p> {errors.name.message} </p> : null}
      <input 
        type="email" 
        placeholder="seu email" 
        {...register("email")} />
      {errors.email ? <p> {errors.email.message} </p> : null}

      <select {...register("select")}>
        <option value="">selecione um valor</option>
        <option value="ensino">ensino</option>
        <option value="design">design </option>
        <option value="programação">programação</option>
      </select>
      {errors.select ? <p> {errors.select.message} </p> : null}

      <textarea
        placeholder="sua mensagem !"
        {...register("massege")}
      ></textarea>
      {errors.massege ? <p> {errors.massege.message} </p> : null}

      <button type="submit">enviar</button>
    </form>
  );
}