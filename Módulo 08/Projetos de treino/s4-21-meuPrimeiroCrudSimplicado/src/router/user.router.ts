import { Router } from "express";
import { UserControllers } from "../controllers/user.controllers";
import { isUserIdValid } from "../middlewares/isUserIdValid.middlewares";

export const UserRouter = Router();

const userControllers = new UserControllers();

UserRouter.post("/", userControllers.createUser);
UserRouter.get("/", userControllers.getUSers);
UserRouter.delete("/:id", isUserIdValid.execute, userControllers.deleteProduct)
 // o middleware serve para fazermos verificações de requisição valida dentro do nossas rotas de forma a não fugir da logica da nossa api. 