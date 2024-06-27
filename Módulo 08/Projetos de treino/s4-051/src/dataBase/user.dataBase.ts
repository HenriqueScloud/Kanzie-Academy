import { IUser } from "../interfaces/user.interface";

export const UsersDataBase: IUser[] = []

let id = 0 ;

export const IdGenerator = () => {
  id++
  return id;
}