const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const createHttpError = require("http-errors");

const cors = require("cors");
const port = process.env.PORT;
const { default: mongoose } = require("mongoose");
const errorHandlingMiddleware = require("./middlewares/errorHandlingMiddleware");
const authRoutes = require("./routes/authRoutes");
const app = express();
console.clear();

app.use(cors());
app.use(express.json());
app.use("/api", authRoutes);

app.use((req, res, next) => {
  next(createHttpError(404, "URL not found"));
});

app.use(errorHandlingMiddleware);

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
