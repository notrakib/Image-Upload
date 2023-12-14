const UserService = require("../services/user.service");

exports.create_user = (req, res) => {
  UserService.create_user(req.body)
    .then((response) => {
      return res.status(200).json({
        data: response,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
};
