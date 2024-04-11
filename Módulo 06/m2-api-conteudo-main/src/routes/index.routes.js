import userMovies from "./userMovies.js";
import userRouter from "./user.js";
import moviesRouter from "./moviesRoute.js";

export const appRoutes = (app) => {
  app.use("", userRouter);
  app.use("/movies", moviesRouter);
  app.use("/user/movies", userMovies);
};
