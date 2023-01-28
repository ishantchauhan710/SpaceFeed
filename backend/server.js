const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const { default: mongoose } = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const app = express();

app.use(express.json());
app.use("/api", authRoutes);

const port = process.env.PORT;

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
