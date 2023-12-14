const ImageService = require("../services/image.service");

exports.upload_image = (req, res) => {
  ImageService.upload_image(req.files)
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
