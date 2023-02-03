const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const createHttpError = require("http-errors");
const socketIo = require("socket.io");
const port = process.env.PORT;
const { default: mongoose } = require("mongoose");
const errorHandlingMiddleware = require("./middlewares/errorHandlingMiddleware");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const likeRoutes = require("./routes/likeRoutes");
const commentRoutes = require("./routes/commentRoutes");
const { saveDummyUsersToDB } = require("./util/dummyUtil");
const http = require("http");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const NotificationModel = require("./models/notificationModel");
const app = express();
//console.clear();

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
app.use("/api", userRoutes);
app.use("/api", postRoutes);
app.use("/api", likeRoutes);
app.use("/api", commentRoutes);

// Use it to generate and store dummy data in database
// app.get("/dummy", async (req, res) => {
//   await saveDummyUsersToDB(20);
//   res.send("Success");
// });

app.use((req, res, next) => {
  next(createHttpError(404, "URL not found"));
});

app.use(errorHandlingMiddleware);

mongoose
  .set("strictQuery", true)
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("MongoDB connection established");

    const server = http.createServer(app);

    NotificationModel.watch().on("change", (data) => {
      let operationType = data.operationType;
      let objectId = data.documentKey._id;

      if (operationType == "insert") {
        NotificationModel.findById(objectId, function (err, notification) {
          if (err) {
            console.log("Error: " + err);
          } else {
            console.log("Result : ", JSON.stringify(notification));
          }
        });
      }
    });

    const io = socketIo(server, {
      cors: {
        origin: "http://localhost:3000",
      },
    });

    io.on("connection", (socket) => {
      //console.log("client connected: ", socket.id);

      socket.join("clock-room");

      socket.on("disconnect", (reason) => {
        console.log(reason);
      });
    });

    setInterval(() => {
      io.to("clock-room").emit("time", new Date());
    }, 1000);

    server.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch(console.error);
