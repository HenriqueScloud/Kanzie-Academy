import { IUser } from './../interfaces/user.interface';
import { IdGenerator, UsersDataBase } from "../dataBase/user.dataBase";

export class userServices {
  getUsers() {
    return UsersDataBase;
  }
  getUserById(id: number) {
    return UsersDataBase.find((user) => user.id === id);
  }
  createUser(data: any) {
    const newUser: IUser = {
      id: IdGenerator(),
      ...data,
    };
    UsersDataBase.push(newUser);
    return newUser;
  }
  deleteUser(id: string) {
    const index = UsersDataBase.findIndex((user) => user.id === Number(id));
    UsersDataBase.splice(index, 1);
  }
}
