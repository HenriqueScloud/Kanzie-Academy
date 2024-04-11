import { AppError, handleAppError, handleErrors } from "../errors/appError.js";
import { getUserId } from "../helpers/index.js";
import MovieService from "../services/movies.service.js";

class UserMoviesController {
  static listMovies = async (request, response) => {
    try {
      const userId = getUserId(request.headers.authorization);

      const movies = await MovieService.listUserMovies(userId);

      return response.status(200).send(movies);
    } catch (error) {
      return response.status(400).send(response.error);
    }
  };

  static createMovie = async (request, response) => {
    try {
      const userId = getUserId(request.headers.authorization);

      const movie = await MovieService.createMovie(request.body, userId);

      return response.status(201).json(movie);
    } catch (error) {
      if (error instanceof AppError) {
        handleAppError(error, response);
      } else {
        return response.status(400).send(handleErrors(error));
      }
    }
  };

  static updateMovie = async (request, response) => {
    try {
      const { movie_id } = request.params;

      const userId = getUserId(request.headers.authorization);

      const movie = await MovieService.updateMovie(
        movie_id,
        request.body,
        userId
      );

      return response.status(200).json(movie);
    } catch (error) {
      if (error instanceof AppError) {
        handleAppError(error, response);
      } else {
        return response.status(400).send(handleErrors(error));
      }
    }
  };

  static deleteMovie = async (request, response) => {
    try {
      const { movie_id } = request.params;

      const userId = getUserId(request.headers.authorization);

      await MovieService.deleteMovie(movie_id, userId);

      return response.status(200).json();
    } catch (error) {
      if (error instanceof AppError) {
        handleAppError(error, response);
      } else {
        return response.status(400).send(handleErrors(error));
      }
    }
  };
}

export default UserMoviesController;
