import { handleErrors } from "../errors/appError.js";
import UserService from "../services/user.service.js";

class UserController {
  static register = async (request, response) => {
    try {
      const user = await UserService.register(request.body);

      return response.status(201).json(user);
    } catch (error) {
      return response.status(400).send(handleErrors(error));
    }
  };

  static login = async (request, response) => {
    try {
      const user = await UserService.login(request.body);

      return response.status(200).json(user);
    } catch (error) {
      return response.status(400).send(handleErrors(error));
    }
  };
}

export default UserController;
