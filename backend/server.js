const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const createHttpError = require("http-errors");

const cors = require("cors");
const port = process.env.PORT;
const { default: mongoose } = require("mongoose");
const errorHandlingMiddleware = require("./middlewares/errorHandlingMiddleware");
const authRoutes = require("./routes/authRoutes");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const app = express();
console.clear();

//app.use(cors());
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 1000,
    },
    rolling: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_CONNECTION_STRING,
    }),
  })
);

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
