import { IUser } from "../interfaces/User.interface";

export const UserDataBase: IUser[] = [];

let id = 0;

export const IdGenerator = () => {
  id++;
  return id;
};
