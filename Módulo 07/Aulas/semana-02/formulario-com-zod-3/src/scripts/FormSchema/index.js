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
    .regex(/(?=.*?[A-Z])/,"é necessário pelo menos 1 letra maiuscula")
    .regex(/(?=.*?[a-z])/)
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos 1 número ")
    .regex(/(?=.*?[#?!@$%^&.*-])/, "É necessário pelo menos 1 caracter especial ")
    .min(8, "Sua senha tem que ter no mínimo 8 dígitos !"),
  confirmpassword: z.string().nonempty('É necessário confirmar sua senha.')

}).refine(({password, confirmpassword})=>password === confirmpassword,{
  message: "As senhas não são compativeis !",
  path: ["confirmpassword"]
});
// o refine é para quando precisamos validar dados com estruturas mais complexas dentro do z.object() !

// a estrutura do refine é composta por 2 itens: uma função callback e um obejct

// dentro da function passamos os valores de forma desestruturada, esses valores são as chaves do z.object() *({senha, confimaçãoSenha})=>{})*

//no object passamos duas chaves: massege e path;
//utilizamos o massege para dizer o erro; usamos o path para designar qual chave do z.object vai receber essa validação. *["confirmaçãoSenha"]* 