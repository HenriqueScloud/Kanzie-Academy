import { z } from "zod";

/*
name - string - com pelo menos 2 caracteres
description - string - com pelo menos 20 caracteres e com no máximo 250 caracteres
category - string - opcional
price - number - valor mínimo de 1 centavo
*/

export const createProductBodySchema = z.object({
    name: z.string().min(2),
    description: z.string().min(20).max(250),
    category: z.string().optional(),
    price: z.number().min(1)
})