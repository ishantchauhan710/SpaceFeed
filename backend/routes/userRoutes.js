const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const suggestedUsersController = require("../controllers/user/suggestedUsersController");
const toggleUserFollowController = require("../controllers/user/toggleUserFollowController");
const router = express.Router();

router.get("/suggested", authMiddleware, suggestedUsersController);
router.post("/follow", authMiddleware, toggleUserFollowController);

module.exports = router;
