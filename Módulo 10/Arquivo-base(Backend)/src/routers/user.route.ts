import { Router } from "express";
import { userControllers } from "../controllers/user.controllers";
import { IsUserMiddlewares } from "../middlewares/user.middleware";
import { ValidateRequest } from "../middlewares/ValidateRequest.middleware";
import {
  createUserBodySchema,
  editUserBodySchema,
} from "../schemas/crud/UserBodySchema.schema";

export const userRouter = Router();

const UserControllers = new userControllers();
const userMiddleware = new IsUserMiddlewares();
const validateRequest = new ValidateRequest();

userRouter.get("/", UserControllers.getUser);
userRouter.post(
  "/",
  userMiddleware.email,
  validateRequest.execute({ body: createUserBodySchema }),
  UserControllers.createUser
);
userRouter.delete("/:id", UserControllers.deleteUser);
userRouter.patch(
  "/:id",
  validateRequest.execute({ body: editUserBodySchema }),
  UserControllers.editUser
);
