const express = require("express");
const UserController = require("../controllers/user.controller");

const router = express.Router();

router.post("/create-user", UserController.create_user);

module.exports = router;
