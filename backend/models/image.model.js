const { Sequelize, DataTypes } = require("sequelize");
const database = require("../util/database");

const Image = database.define(
  "Image",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    modelName: "Image",
    tableName: "image",
  }
);

// Image.sync({ alter: true })
//   .then(() => console.log("Image table created"))
//   .catch((error) => console.log("Error creating Image table", error));

module.exports = Image;
