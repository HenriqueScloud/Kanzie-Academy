import { z } from "zod";
export const FormLoginSchema = z.object({
  email: z
    .string()
    .nonempty("O E-mail é obrigatório !")
    .email("insira um e-mail válido"),
  password: z.string().nonempty("A senha é obrigatória !"),
});
