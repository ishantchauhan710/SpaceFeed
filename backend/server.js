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
const notificationRoutes = require("./routes/notificationRoutes");
const commentRoutes = require("./routes/commentRoutes");
const http = require("http");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const NotificationModel = require("./models/notificationModel");
const generateDummyDataInDB = require("./util/dummyUtil");
const app = express();
const logger = require("morgan");
var fs = require("fs");
var path = require("path");

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
app.use("/api", notificationRoutes);

app.use((req, res, next) => {
  next(createHttpError(404, "URL not found"));
});

app.use(errorHandlingMiddleware);

//Use it to generate and store dummy users in database
// app.get("/dummy", async (req, res) => {
//   await generateDummyDataInDB(30);
//   res.send("Success");
// });

// Uncomment it if you want to stay updated about server traffic
// var accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
//   flags: "a",
// });
// app.use(logger("combined", { stream: accessLogStream }));

mongoose
  .set("strictQuery", true)
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("MongoDB connection established");

    const server = http.createServer(app);

    const io = socketIo(server, {
      cors: {
        origin: "http://localhost:3000",
      },
    });

    io.on("connection", (socket) => {
      //console.log("client connected: ", socket.id);

      socket.on("join", function (data) {
        //console.log("User joined " + data.email);
        socket.join(data.email);
      });

      socket.on("disconnect", (reason) => {
        //console.log(reason);
      });
    });

    NotificationModel.watch().on("change", async (data) => {
      let operationType = data.operationType;
      let objectId = data.documentKey._id;

      if (operationType == "insert") {
        const notification = await NotificationModel.findById(
          objectId
        ).populate("belongsTo notifiedBy");

        if (notification.belongsTo.email != notification.notifiedBy.email) {
          io.sockets
            .in(notification.belongsTo.email)
            .emit("data", notification);
        }
      }
    });

    server.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch(console.error);
