import { z } from "zod";
export const FormRegisterSchema = z
  .object({
    name: z
      .string()
      .min(2, "O nome precisa ter mais de 2 caracteres ")
      .nonempty("Campo obrigatório !"),
    email: z
      .string()
      .nonempty("Campo obrigatório !")
      .email("insira um e-mail válido"),
    password: z
      .string()
      .nonempty("Campo obrigatório !")
      .min(8, "A senha precisa ter no minimo 8 caracteres")
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
    confirmPassword: z.string().nonempty("Campo obrigatório !"),
    bio: z
      .string()
      .nonempty("Campo obrigatório !")
      .min(8, "A biografia precisar ter mais de 8 caracteres."),
    contact: z
      .string()
      .nonempty("OCampo obrigatório !")
      .min(8, "O contato é obrigatório"),
    course_module: z
      .string()
      .min(1, "Campo obrigatório !")
      .nonempty("Campo obrigatório !"),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não são compativeis !",
    path: ["confirmPassword"],
  });
