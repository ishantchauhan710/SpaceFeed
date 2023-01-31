const express = require("express");
const storageConfig = require("../config/storageConfig");
const loginController = require("../controllers/auth/loginController");
const signupController = require("../controllers/auth/signupController");
const userController = require("../controllers/auth/userController");
const logoutController = require("../controllers/auth/logoutController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

// @POST
// @desc Signup
router.post("/auth/signup", storageConfig.single("picture"), signupController);

// @POST
// @desc Login
router.post("/auth/login", loginController);

// @GET
// @desc Get logged in user details
router.get("/auth/user", authMiddleware, userController);

// @POST
// @desc Logout
router.post("/auth/logout", logoutController);

module.exports = router;
