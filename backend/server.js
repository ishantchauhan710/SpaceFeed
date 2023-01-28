const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const authRoutes = require("./routes/authRoutes");
const app = express();

app.use(express.json());
app.use("/api", authRoutes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
