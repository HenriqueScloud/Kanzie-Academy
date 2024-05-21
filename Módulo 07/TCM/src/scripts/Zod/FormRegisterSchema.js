import { z } from "zod";
export const FormRegisterSchema = z
  .object({
    name: z
      .string()
      .min(2, "O nome precisa ter mais de 2 caracteres ")
      .nonempty("O nome é obrigatório !"),
    email: z
      .string()
      .nonempty("O E-mail é obrigatório !")
      .email("insira um e-mail válido"),
    password: z
      .string()
      .min(8, "A senha precisa ter no minimo 8 caracteres")
      .nonempty("A senha é obrigatória !")
      .regex(
        /(?=.*?[A-Z])/,
        "A senha precisa ter no minimo uma letra maiúscula"
      )
      .regex(
        /(?=.*?[a-z])/,
        "A senha precisa ter no minimo uma letra minúscula"
      )
      .regex(/(?=.*?[0-9])/, "A senha precisa ter no minimo um número")
      .regex(
        /(?=.*?[#?!@$%^&.*-])/,
        "A senha precisa ter no minimo um caracter especial"
      ),
    confirmPassword: z.string(),
    bio: z
      .string()
      .min(8, "A biografia precisar ter mais de 8 caracteres.")
      .nonempty("A bio é obrigatória !"),
    contact: z
      .string()
      .nonempty("O contato é obrigatório !")
      .min(8, "O contato é obrigatório"),
    course_module: z
      .string()
      .min(1, "O módulo é obrigaatório")
      .nonempty("O módulo é obrigatório !"),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não são compativeis !",
    path: ["confirmPassword"],
  });
