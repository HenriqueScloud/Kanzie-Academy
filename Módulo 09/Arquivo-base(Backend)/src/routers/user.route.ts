import { Router } from "express";
import { userControllers } from "../controllers/user.controllers";
import { IsUserMiddlewares } from "../middlewares/user.middleware";
import { BodySchameValid } from "../middlewares/BodySchameValid.middleware";
import { createProductBodySchema } from "../schemas/crud/CreateProduct.schema";
export const userRouter = Router();

const UserControllers = new userControllers();
const userMiddleware = new IsUserMiddlewares();
const bodySchameValid = new BodySchameValid()

userRouter.get("/", UserControllers.getUser);
userRouter.post("/",userMiddleware.email, bodySchameValid.execute({body: createProductBodySchema}),   UserControllers.createUser);
userRouter.delete("/:id", UserControllers.deleteUser);
