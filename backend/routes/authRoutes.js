const express = require("express");
const {
  loginController,
  signupController,
} = require("../controllers/authControllers");
const router = express.Router();

router.post("/signup", signupController);

module.exports = router;
