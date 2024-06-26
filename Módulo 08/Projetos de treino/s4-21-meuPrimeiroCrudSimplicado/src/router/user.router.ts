import { Router } from "express";
import { UserControllers } from "../controllers/user.controllers";

export const UserRouter = Router();

const userControllers = new UserControllers();

UserRouter.post("/", userControllers.createUser);
UserRouter.get("/", userControllers.getUSers);
UserRouter.delete("/:id", userControllers.deleteProduct)
