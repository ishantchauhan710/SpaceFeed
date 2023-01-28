const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const createHttpError = require("http-errors");
const { isHttpError } = require("http-errors");
const port = process.env.PORT;
const { default: mongoose } = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const app = express();

app.use(express.json());
app.use("/api", authRoutes);

app.use((req, res, next) => {
  next(createHttpError(404, "URL not found"));
});

app.use((err, req, res, next) => {
  console.error(err);
  let errMessage = "An unknown error occurred";
  let statusCode = 500;
  if (isHttpError(err)) {
    errMessage = err.message;
    statusCode = err.status;
  }
  res.status(statusCode).json({ error: errMessage });
});

mongoose
  .set("strictQuery", true)
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("MongoDB connection established");
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch(console.error);
