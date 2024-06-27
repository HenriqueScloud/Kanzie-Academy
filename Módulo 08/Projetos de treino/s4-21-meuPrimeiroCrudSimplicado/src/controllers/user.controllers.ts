import { UserServices } from './../services/user.services';
import { Request, Response } from "express";
import { IUser } from "../interfaces/User.interface";
import { IdGenerator, UserDataBase } from "../database/user.database";

export class UserControllers {
  getUsers(req: Request, res: Response): Response {
    const userServices = new UserServices()
    const response = userServices.getUsers()
    return res.status(200).json(response)
  }

  createUser(req: Request, res: Response): Response {
    const userServices = new UserServices();
    const response = userServices.createUser(req.body.name, req.body.email)
    return res.status(201).json(response);
  }

  deleteProduct(req:Request, res:Response):Response {
    const userServices = new UserServices();
    userServices.deleteProduct(req.params.id)
    return res.status(204).json({message: "Product deleted"})
  }
}
