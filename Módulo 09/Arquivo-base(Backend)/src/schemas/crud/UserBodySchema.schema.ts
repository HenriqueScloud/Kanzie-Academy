import { object, z } from "zod";





export const UserBodySchema = z.object({
  id: z.number().positive(),
  name: z.string().min(1),
  email: z.string().min(8),
  price: z.number().min(0.01),
})

export const createUserBodySchema = UserBodySchema.omit({id: true})
export const editUserBodySchema = UserBodySchema.omit({id: true}).partial()