import { IsUserMiddlewares } from './../middlewares/user.middleware';
import { Router } from "express";
import { userControllers  } from "../controllers/user.controllers";

export const userRouter = Router()

const UserControllers = new userControllers()
const userMiddleware = new IsUserMiddlewares()

userRouter.get("/", UserControllers.getUser);
userRouter.post("/", UserControllers.createUser)
userRouter.delete("/:id", UserControllers.deleteUser);


