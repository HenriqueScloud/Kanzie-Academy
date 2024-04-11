import User from "../database/models/user.js";
import pkgCrypt from "bcryptjs";
import pkgBcrypt from "bcryptjs";
import pkgJwt from "jsonwebtoken";
import { normalizeData } from "../helpers/index.js";
import { AppError } from "../errors/appError.js";
const { compare } = pkgCrypt;
const { hash } = pkgBcrypt;
const { sign } = pkgJwt;

class UserService {
  static register = async (userInfo) => {
    const { username, email, password } = normalizeData(userInfo);

    const user = await User.create({
      username,
      email,
      password: await hash(password, 8),
    });

    return { id: user.id, username, email };
  };

  static login = async ({ email, password }) => {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new AppError(401, "Invalid email or password");
    }

    const verifyPassword = await compare(password, user.password);

    if (!verifyPassword) {
      throw new AppError(401, "Invalid email or password");
    }

    const { id, username } = user;

    const token = sign({ user_id: id }, "kenzie", { expiresIn: "14d" });

    return { token, id, username, email };
  };
}

export default UserService;
