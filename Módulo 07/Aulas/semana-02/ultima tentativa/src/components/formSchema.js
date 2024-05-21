import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .nonempty("o nome é obrigatorio !")
    .min(2, "É necessário pelo menos 2 caracteres !"),
  email: z
    .string()
    .nonempty(" o E-mail é obrigatorio !")
    .email("Forneça um E-mail válido !"),
  select: z.string().nonempty(" o modulo é obrigatorio !"),
  massege: z
    .string()
    .nonempty("A mensagem e obrigatoria !")
    .min(8, "E necessário 8 digitos !"),
});
