const express = require("express");
const { imageStorageConfig } = require("../config/storageConfig");
const signupController = require("../controllers/auth/signupController");
const router = express.Router();

router.post("/signup", imageStorageConfig.single("picture"), signupController);

module.exports = router;
