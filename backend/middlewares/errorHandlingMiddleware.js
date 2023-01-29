const  isHttpError  = require("http-errors");

const errorHandlingMiddleware = (err, req, res, next) => {
  let errMessage = "An unknown error occurred";
  let statusCode = 500;
  if (isHttpError(err)) {
    errMessage = err.message;
    statusCode = err.status;
  }
  res.status(statusCode).json({ error: errMessage });
};

module.exports = errorHandlingMiddleware;
