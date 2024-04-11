import pkgJwt from "jsonwebtoken";
import User from "../database/models/user.js";
import { AppError } from "../errors/appError.js";

const { verify } = pkgJwt;

const verifyToken = (request, response, next) => {
  try {
    let givenToken = request.headers.authorization;

    if (!request.headers) {
      return response.status(401).json("Headers required");
    }

    if (!givenToken) {
      return response.status(401).json("Missing authorization token");
    }

    if (givenToken.includes("Bearer")) {
      const [, token] = givenToken.split(" ");

      givenToken = token;
    }

    verify(givenToken, "kenzie", async (err, decoded) => {
      if (err) {
        return response.status(401).json("Invalid token");
      }

      const checkUser = await User.findOne({ where: { id: decoded.user_id } });

      if (!checkUser) {
        return response.status(401).json("Token expired");
      }

      decoded.user_logged = true;
      return next();
    });
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, response);
    }
  }
};

export default verifyToken;
