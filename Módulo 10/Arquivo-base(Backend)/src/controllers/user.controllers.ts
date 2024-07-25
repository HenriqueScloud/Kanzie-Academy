import { Request, Response, request } from "express";
import { userServices } from "../services/user.services";

export class userControllers {
  getUser(req: Request, res: Response): Response {
    const UserServices = new userServices();
    const response = UserServices.getUsers();
    return res.status(200).json(response);
  }
  createUser = (req: Request, res: Response): Response => {
    const UserServices = new userServices();
    const response = UserServices.createUser(req.body);
    return res.status(201).json(response);
  };
  deleteUser(req: Request, res: Response): Response {
    const UserServices = new userServices();
    const response = UserServices.deleteUser(req.params.id);
    return res.status(204).json(response);
  }
  editUser(req: Request, res: Response) {
    const UserServices = new userServices();
    const response = UserServices.editUser(req.params.id, req.body);
    return res.status(200).json(response);
  }
}
