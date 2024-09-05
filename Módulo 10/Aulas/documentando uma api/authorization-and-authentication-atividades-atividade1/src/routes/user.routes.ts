import { Router } from "express";
import { container } from "tsyringe";
import { UserServices } from "../services/user.services";
import { UserControllers } from "../controllers/user.controllers";
import { VerifyToken } from "../middlewares/verifyToken.middleware";

container.registerSingleton("UserServices", UserServices);
const userControllers = container.resolve(UserControllers);

export const userRouter = Router();

userRouter.post("/", (req, res) => userControllers.register(req, res));
userRouter.post("/login", (req, res) => userControllers.login(req, res));
userRouter.get("/", VerifyToken.execute, (req, res) => userControllers.getUser(req, res));
