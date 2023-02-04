const isHttpError = require("http-errors");
var fs = require("fs");
var path = require("path");

var accessErrorStream = fs.createWriteStream(
  path.join(__dirname, "error.log"),
  {
    flags: "a",
  }
);

const errorHandlingMiddleware = (err, req, res, next) => {
  let errMessage = "An unknown error occurred";
  let statusCode = 500;
  if (isHttpError(err)) {
    errMessage = err.message;
    statusCode = err.status;
  }
  //console.log(err);
  accessErrorStream.write(
    `Error: ${JSON.stringify(err)}\nOccured on: ${new Date()}\n\n`
  );
  res.status(statusCode).json({ error: errMessage });
};

module.exports = errorHandlingMiddleware;
