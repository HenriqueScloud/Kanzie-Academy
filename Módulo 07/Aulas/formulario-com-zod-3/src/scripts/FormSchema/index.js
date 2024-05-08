import { z } from "zod"
export const FormSchema = z.object({
  name: z
    .string()
    .nonempty("o nome é obrigatorio !")
    .min(2, "É necessário pelo menos 2 caracteres !"),
  email: z
    .string()
    .nonempty(" o E-mail é obrigatorio !")
    .email("Forneça um E-mail válido !"),
  select: z.string().nonempty(" o modulo é obrigatorio !"),
  password: z
    .string()
    .nonempty("Senha é obrigatoria !")
    .regex(/(?=.*?[A-Z])/)
    .regex(/(?=.*?[a-z])/)
    .regex(/(?=.*?[0-9])/)
    .regex(/(?=.*?[#?!@$%^&*-])/)
    .min(8, "Sunha senha tem que ter no mínimo 8 dígitos !"),
});