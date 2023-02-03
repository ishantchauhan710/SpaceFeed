const { initializeApp, cert } = require("firebase-admin/app");
const { getStorage } = require("firebase-admin/storage");

const serviceAccount = require("../../secrets/spacefeed_firebase.json");

initializeApp({
  credential: cert(serviceAccount),
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
});

const bucket = getStorage().bucket();

const deleteFile = async (url) => {
  const fileName = url.split("appspot.com/")[1];
  await bucket.file(fileName).delete();
  //console.log(`${fileName} deleted`);
};

module.exports = { deleteFile };
