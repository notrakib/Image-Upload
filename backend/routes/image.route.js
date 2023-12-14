const express = require("express");
const multer = require("multer");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const ImageController = require("../controllers/image.controller");

const router = express.Router();

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    if (!fs.existsSync("public/upload_images")) {
      fs.mkdirSync("public/upload_images", { recursive: true });
    }
    cb(null, "public/upload_images");
  },
  filename: (req, file, cb) => {
    cb(null, uuidv4() + "--" + file.originalname);
  },
});
const upload = multer({ storage: fileStorageEngine });

router.post(
  "/upload-image",
  upload.fields([
    {
      name: "image",
      maxCount: 1,
    },
  ]),
  ImageController.upload_image
);

module.exports = router;
