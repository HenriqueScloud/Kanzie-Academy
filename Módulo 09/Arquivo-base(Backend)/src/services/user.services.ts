import { TCreateUserBody, TEditUserBody, TUser } from "../interfaces/user.interface";
import { IdGenerator, UsersDataBase } from "../dataBase/user.dataBase";

export class userServices {
  getUsers() {
    return UsersDataBase;
  }
  getUserById(id: number) {
    return UsersDataBase.find((user) => user.id === id);
  }
  createUser(data:TCreateUserBody) {
    const newUser: TUser = {
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

  editUser(id:string , data: TEditUserBody){
    const user = UsersDataBase.find(user=>user.id===Number(id)) as TUser;
    const index = UsersDataBase.findIndex((user) => user.id === Number(id));

    const newUser = {...user, ...data}
    UsersDataBase.splice(index, 1, newUser);
    return newUser
  }
}
