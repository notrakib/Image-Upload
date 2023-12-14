const Image = require("../models/image.model");

exports.upload_image = async function (files) {
  try {
    if (files.image == undefined) {
      throw new Error("Please insert an image");
    }

    return await Image.create({
      path: files.image[0].path,
    });
  } catch (err) {
    throw new Error(err);
  }
};
