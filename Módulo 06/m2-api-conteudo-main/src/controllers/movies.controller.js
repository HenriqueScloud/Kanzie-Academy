import { AppError, handleAppError, handleErrors } from "../errors/appError.js";
import MovieService from "../services/movies.service.js";

class MovieController {
  static listMovies = async (_, response) => {
    try {
      const movies = await MovieService.listMovies();

      return response.status(200).send(movies);
    } catch (error) {
      return response.status(400).send(response.error);
    }
  };

  static listById = async (request, response) => {
    try {
      const { movie_id } = request.params;

      const movie = await MovieService.movieById(movie_id);

      return response.status(200).json(movie);
    } catch (error) {
      if (error instanceof AppError) {
        handleAppError(error, response);
      } else {
        return response.status(400).send(handleErrors(error));
      }
    }
  }

  static createMovie = async (request, response) => {
    try {
      const movie = await MovieService.createMovie(request.body);

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

      const movie = await MovieService.updateMovie(movie_id, request.body);

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

      await MovieService.deleteMovie(movie_id);

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

export default MovieController;
