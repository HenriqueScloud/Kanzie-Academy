import Sequelize, { Model, DataTypes } from "sequelize";

class Movie extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull: false,
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: {
            msg: "this title already exists in the database",
          },
          validate: {
            notEmpty: {
              msg: "title can't be empty!",
            },
            notNull: {
              msg: "title is required!",
            },
          },
        },
        image: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "image can't be empty!",
            },
            notNull: {
              msg: "image is required!",
            },
          },
        },
        category: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "category can't be empty!",
            },
            notNull: {
              msg: "category is required!",
            },
          },
        },
        rating: {
          type: Sequelize.NUMBER,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "rating can't be empty!",
            },
            notNull: {
              msg: "rating is required!",
            },
            isInt: {
              msg: "rating must be an integer number.",
            },
            isIn: {
              args: [[1, 2, 3, 4, 5]],
              msg: "rating must be a number from 1 to 5.",
            },
          },
        },
        synopsis: {
          type: Sequelize.TEXT,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "synopsis can't be empty!",
            },
            notNull: {
              msg: "synopsis is required!",
            },
          },
        },
      },
      {
        timestamps: false,
        tableName: "movies",
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "owner",
    });
  }
}

export default Movie;
