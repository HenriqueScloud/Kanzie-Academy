import { Router } from "express";
import MovieController from "../controllers/movies.controller.js";

const moviesRouter = Router();

moviesRouter.get("", MovieController.listMovies);
moviesRouter.get("/:movie_id", MovieController.listById);
moviesRouter.post("", MovieController.createMovie);
moviesRouter.patch("/:movie_id", MovieController.updateMovie);
moviesRouter.delete("/:movie_id", MovieController.deleteMovie);

export default moviesRouter;
