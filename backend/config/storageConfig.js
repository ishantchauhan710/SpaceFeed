const createHttpError = require("http-errors");
const multer = require("multer");

const imageStorageConfig = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5000000 },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(
        new createHttpError(
          400,
          "Only PNG, JPG and JPEG format images allowed!"
        )
      );
    }
  },
});

module.exports = { imageStorageConfig };
