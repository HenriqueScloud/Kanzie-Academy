import { Router } from "express";
import { UserControllers } from "../controllers/user.controllers";
import { isUserIdValid } from "../middlewares/isUserIdValid.middlewares";
import { IsUserEmailUnique } from "../middlewares/isUserEmailUnique.middlewares";

export const UserRouter = Router();
const userControllers = new UserControllers();

UserRouter.post("/", IsUserEmailUnique.execute, userControllers.createUser);
UserRouter.get("/", userControllers.getUsers);
UserRouter.delete("/:id", isUserIdValid.execute, userControllers.deleteProduct)
 // o middleware serve para fazermos verificações de requisição valida dentro do nossas rotas de forma a não fugir da logica da nossa api. 