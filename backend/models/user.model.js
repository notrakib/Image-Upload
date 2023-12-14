const { Sequelize, DataTypes } = require("sequelize");
const database = require("../util/database");

const User = database.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Test",
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
    },
  },
  {
    modelName: "User",
    tableName: "user",
  }
);

// User.sync({ alter: true })
//   .then(() => console.log("User table created"))
//   .catch((error) => console.log("Error creating User table", error));

module.exports = User;
