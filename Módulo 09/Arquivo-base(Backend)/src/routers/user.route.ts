import { isCreateProductBodySchameValid } from './../middlewares/isCreateProductBodySchameValid.middleware';
import { Router } from "express";
import { userControllers } from "../controllers/user.controllers";
import { IsUserMiddlewares } from "../middlewares/user.middleware";
export const userRouter = Router();

const UserControllers = new userControllers();
const userMiddleware = new IsUserMiddlewares();
const IsCreateProductBodySchameValid = new isCreateProductBodySchameValid()

userRouter.get("/", UserControllers.getUser);
userRouter.post("/",userMiddleware.email, IsCreateProductBodySchameValid.execute,  UserControllers.createUser);
userRouter.delete("/:id", UserControllers.deleteUser);
