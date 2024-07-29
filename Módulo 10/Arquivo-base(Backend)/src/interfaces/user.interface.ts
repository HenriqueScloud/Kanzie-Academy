import { z } from "zod";
import {
  UserBodySchema,
  createUserBodySchema,
  editUserBodySchema,
} from "../schemas/crud/UserBodySchema.schema";
export type TUser = z.infer<typeof UserBodySchema>;
export type TCreateUserBody = z.infer<typeof createUserBodySchema>;
export type TEditUserBody = z.infer<typeof editUserBodySchema>;
