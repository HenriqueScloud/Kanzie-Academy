import { Request, Response } from "express";
import { IUser } from "../interfaces/User.interface";
import { IdGenerator, UserDataBase } from "../database/user.database";
import { ProgramUpdateLevel } from "typescript";

export class UserControllers {
  getUSers(req: Request, res: Response): Response {
    return res.status(200).json(UserDataBase);
  }

  createUser(req: Request, res: Response): Response {
    const newUser: IUser = {
      id: IdGenerator(),
      name: req.body.name,
      email: req.body.email,
    };
    UserDataBase.push(newUser);
    return res.status(201).json(newUser);
  }

  deleteProduct(req:Request, res:Response):Response {
    const index = UserDataBase.findIndex(product=>product.id === Number(req.params.id))
    UserDataBase.splice(index, 1)
    return res.status(204).json({message: "Product deleted"})
  }
}
