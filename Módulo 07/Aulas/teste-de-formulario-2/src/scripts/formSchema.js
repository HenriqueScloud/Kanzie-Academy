import { z } from "zod";

export const FormSchema = z.object({
  name: z.string().regex(/^[a-z ,.'-]+$/i),
  email: z.string().email('Ensira um E-mail válido !'),
  password: z
    .string()
    .regex(/(?=.*?[A-Z])/)
    .regex(/(?=.*?[a-z])/)
    .regex(/(?=.*?[#?!@$%^&*-])/)
    .regex(/(?=.*?[0-9])/)
    .min(8,'A senha tem que conter no mínimo 8 caracteres !'),
});