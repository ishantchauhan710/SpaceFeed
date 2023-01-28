const express = require("express");
const {
  loginController,
  signupController,
} = require("../controllers/authControllers");
const router = express.Router();

router.get("/signup", signupController);

module.exports = router;
