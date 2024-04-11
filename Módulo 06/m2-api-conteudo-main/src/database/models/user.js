import Sequelize, { Model } from "sequelize";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull: false,
        },
        username: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "username can't be empty!",
            },
            notNull: {
              msg: "username is required!",
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: {
            msg: "email already exists!",
          },
          validate: {
            isEmail: {
              msg: "Insert a valid email!",
            },
            notNull: {
              msg: "email is required!",
            },
          },
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "password can't be empty",
            },
            notNull: {
              msg: "password is required!",
            },
          },
        },
      },
      {
        timestamps: false,
        tableName: "users",
        sequelize,
      }
    );
  }
}

export default User;
