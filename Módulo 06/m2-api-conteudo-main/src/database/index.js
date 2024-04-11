import Sequelize from "sequelize";
import Movie from "./models/movie.js";
import User from "./models/user.js";

const config = {
  dialect: "sqlite",
  storage: "./database.sqlite",
};

const database = new Sequelize(config);

User.init(database);
Movie.init(database);

Movie.associate(database.models);

export default database;
