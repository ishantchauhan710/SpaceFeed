const path = require("path");

const getFileName = (filePath) => {
  const fileNameWithExtension = path.parse(filePath).base;
  const fileName = fileNameWithExtension.split(".")[0];
  return fileName;
};

const getFileMimeType = (filePath) => {
  const mimeType = path.extname(filePath);
  return mimeType;
};

const isImageFile = (filePath) => {
  const mimeType = getFileMimeType(filePath);
  return mimeType.toLowerCase() === ".jpg" || mimeType.toLowerCase() === ".png";
};

module.exports = { getFileName, getFileMimeType, isImageFile };
