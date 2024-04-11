import Movie from "../database/models/movie.js";
import { AppError } from "../errors/appError.js";
import { normalizeData, removeUnnecessaryKeys } from "../helpers/index.js";

class MovieService {
  static listMovies = async () => {
    const movies = await Movie.findAll();

    return movies;
  };

  static listUserMovies = async (userId) => {
    const movies = await Movie.findAll({ where: { user_id: userId } });

    return movies;
  };


  static movieById = async (movieId) => {
    const movie = await Movie.findByPk(movieId)

    return movie
  }

  static createMovie = async (sentMovie, user_id = null) => {
    const normalizedMovie = normalizeData(sentMovie);

    const { title, image, category, rating, synopsis } = normalizedMovie;

    const movie = await Movie.create({
      title,
      image,
      category,
      rating,
      synopsis,
      user_id,
    });

    return movie;
  };

  static updateMovie = async (movieId, movieUpdates, user_id = null) => {
    const movie = await Movie.findOne({ where: { id: movieId } });

    if (!movie) {
      throw new AppError(404, "Movie not found.");
    }

    movieUpdates = removeUnnecessaryKeys(movieUpdates);

    if (Object.keys(movieUpdates).length == 0) {
      throw new AppError(
        401,
        "You must pass at least one of these keys and its corresponding value: [title, image, category, rating, synopsis]"
      );
    }

    if (!movie.user_id || movie.user_id == user_id) {
      const updatedMovie = movie.update(movieUpdates);

      return updatedMovie;
    }

    throw new AppError(401, "You must own this movie to update it.");
  };

  static deleteMovie = async (movieId, user_id = null) => {
    const movie = await Movie.findOne({ where: { id: movieId } });

    if (!movie) {
      throw new AppError(404, "Movie not found.");
    }

    if (!movie.user_id || movie.user_id == user_id) {
      return movie.destroy();
    }

    throw new AppError(401, "You must own this movie to delete it.");
  };
}

export default MovieService;
