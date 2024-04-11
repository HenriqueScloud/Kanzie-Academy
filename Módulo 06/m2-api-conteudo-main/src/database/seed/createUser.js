import User from "../models/user.js";
import pkgBcrypt from "bcryptjs";
const { hash } = pkgBcrypt;

const populateUser = async () => {
  return await User.create({
    username: "Kenzinho",
    email: "kenzinho@gmail.com",
    password: await hash("123456", 8),
  });
};

export default populateUser;
