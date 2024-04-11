import { Router } from "express";
import UserMoviesController from "../controllers/userMovies.controller.js";
import verifyToken from "../middlewares/authToken.middleware.js";

const userMoviesRouter = Router();

userMoviesRouter.get("", verifyToken, UserMoviesController.listMovies);
userMoviesRouter.post("", verifyToken, UserMoviesController.createMovie);
userMoviesRouter.patch("/:movie_id", verifyToken, UserMoviesController.updateMovie);
userMoviesRouter.delete("/:movie_id", verifyToken, UserMoviesController.deleteMovie);

export default userMoviesRouter;
