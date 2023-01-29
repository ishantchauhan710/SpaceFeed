const { initializeApp, cert } = require("firebase-admin/app");
const { getStorage } = require("firebase-admin/storage");
const serviceAccount = require("../../secrets/spacefeed_firebase.json");
const { getFileMimeType, getFileName } = require("./fileUtil");

initializeApp({
  credential: cert(serviceAccount),
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
});

const bucket = getStorage().bucket();

const uploadFileToStorage = async (filePath, fileName) => {
  const mimeType = getFileMimeType(filePath);
  const originalFileName = getFileName(filePath);

  const uploadOptions = {
    destination: originalFileName + "_" + fileName + mimeType,
    public: true,
  };
  const data = await bucket.upload(filePath, uploadOptions);
  const metadata = data[0].metadata;
  const mediaLink = metadata.mediaLink;
  return mediaLink;
};

module.exports = { uploadFileToStorage };
