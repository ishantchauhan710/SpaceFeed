const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const suggestedUsersController = require("../controllers/user/suggestedUsersController");
const router = express.Router();

router.get("/suggested", authMiddleware, suggestedUsersController);

module.exports = router;
