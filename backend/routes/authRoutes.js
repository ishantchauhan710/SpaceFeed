const express = require("express");
const { imageStorageConfig } = require("../config/storageConfig");
const loginController = require("../controllers/auth/loginController");
const signupController = require("../controllers/auth/signupController");
const userController = require("../controllers/auth/userController");
const logoutController = require("../controllers/auth/logoutController");

const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/signup", imageStorageConfig.single("picture"), signupController);
router.post("/login", loginController);
router.get("/user", authMiddleware, userController);
router.post("/logout", logoutController);

module.exports = router;
