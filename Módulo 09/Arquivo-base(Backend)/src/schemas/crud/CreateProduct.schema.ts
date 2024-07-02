import { object, z } from "zod";

export const createProductBodySchema = z.object({
  name: z.string().min(1),
  email: z.string().min(8),
  price: z.number().min(0.01),
})

// utilizando o zod para criar uma forma de entrada para os dados da requisição e fazer a validação do dado de entrada do usuário.

// createProductBodySchema.parse(object)==================
// createProductBodySchema.parseAsync(object)================== propriedades assincronas

// linha de código que verifica se o dado recebido está em formado de objeto em linha javascript 