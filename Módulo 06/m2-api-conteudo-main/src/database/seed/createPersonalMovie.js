import Movie from "../models/movie.js";

const createPersonalMovie = async (movie) => {
  return await Movie.create(movie);
};

export default createPersonalMovie;
