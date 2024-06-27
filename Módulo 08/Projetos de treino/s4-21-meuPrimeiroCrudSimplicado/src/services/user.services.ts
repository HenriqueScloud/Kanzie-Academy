import { IdGenerator, UserDataBase } from "../database/user.database";
import { IUser } from "../interfaces/User.interface";


export class UserServices {
  getUsers() {
    return UserDataBase;
  }

  createUser(name:string, email:string) {
    const newUser: IUser = {
      id: IdGenerator(),
      name,
      email,
    };
    UserDataBase.push(newUser);
    return newUser;
  }

  deleteProduct(id:string) {
    const index = UserDataBase.findIndex(
      (product) => product.id === Number(id)
    );
    UserDataBase.splice(index, 1);
  }
}