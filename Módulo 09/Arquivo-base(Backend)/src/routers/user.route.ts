import { Router } from "express";
import { userControllers } from "../controllers/user.controllers";
import { IsUserMiddlewares } from "../middlewares/user.middleware";
export const userRouter = Router();

const UserControllers = new userControllers();
const userMiddleware = new IsUserMiddlewares();

userRouter.get("/", UserControllers.getUser);
userRouter.post("/", userMiddleware.email, UserControllers.createUser);
userRouter.delete("/:id", UserControllers.deleteUser);
