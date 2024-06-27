import { IUser } from "../interfaces/user.interface";

export const UsersDataBase: IUser[] = [
  {
    id: 1,
    name: "John !",
    email: "john@gmail.com",
    },
]

let id = 0 ;

export const IdGenerator = () => {
  id++
  return id;
}