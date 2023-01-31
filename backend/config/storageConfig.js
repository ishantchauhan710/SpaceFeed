const createHttpError = require("http-errors");
const Multer = require("multer");
const FirebaseStorage = require("multer-firebase-storage");
const fbAdmin = require("firebase-admin");
const serviceAccount = require("../../secrets/spacefeed_firebase.json");
const { generateRandom } = require("../util/randomUtil");

const imageStorageConfig = Multer({
  storage: FirebaseStorage({
    bucketName: process.env.FIREBASE_STORAGE_BUCKET,
    credentials: fbAdmin.credential.cert(serviceAccount),
    public: true,
    nameSuffix: "_" + generateRandom(),
  }),
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
