const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const database = require("./util/database");

// models
const User = require("./models/user.model");
const Image = require("./models/image.model");

// routes
const userRoute = require("./routes/user.route");
const imageRoute = require("./routes/image.route");

// database connection
database
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "images")));
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

// routes
app.use("/user", userRoute);
app.use("/image", imageRoute);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running at: ${PORT}/`);
});
