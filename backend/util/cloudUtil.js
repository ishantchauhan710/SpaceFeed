const { initializeApp, cert } = require("firebase-admin/app");
const { getStorage } = require("firebase-admin/storage");
const serviceAccount = require("../../secrets/spacefeed_firebase.json");

initializeApp({
  credential: cert(serviceAccount),
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
});

const bucket = getStorage().bucket();

const uploadFileToStorage = async (filePath) => {
  const uploadOptions = {
    destination: "huehue.png",
    public: true,
  };
  const data = await bucket.upload(filePath, uploadOptions);
  const metadata = data[0].metadata;
  const mediaLink = metadata.mediaLink;
  console.log("File uploaded: " + mediaLink);
};

const uploadFileToStoragee = (filePath) => {
  const uploadedFile = bucket
    .upload(filePath, { public: true })
    .then((data) => {
      const metadata = data[0].metadata;
      const filename = metadata.name;
      const mediaLink = metadata.mediaLink;
      //console.log("File uploaded: ", data[0].metadata.selfLink);
    });
};

module.exports = { uploadFileToStorage };
