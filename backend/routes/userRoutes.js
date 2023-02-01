const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const suggestedUsersController = require("../controllers/user/suggestedUsersController");
const toggleUserFollowController = require("../controllers/user/toggleUserFollowController");
const findUserController = require("../controllers/user/findUserController");
const router = express.Router();

// @POST
// @desc Follow and unfollow
router.post("/user/follow", authMiddleware, toggleUserFollowController);

// @GET
// @desc Suggest users to follow
router.get("/user/suggested", authMiddleware, suggestedUsersController);

// @GET
// @desc Get details of a particular user
router.get("/user/:id", authMiddleware, findUserController);

module.exports = router;
