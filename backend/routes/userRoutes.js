const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const suggestedUsersController = require("../controllers/user/suggestedUsersController");
const toggleUserFollowController = require("../controllers/user/toggleUserFollowController");
const findUserController = require("../controllers/user/findUserController");
const userFollowersController = require("../controllers/user/userFollowersController");
const searchUsersController = require("../controllers/user/searchUsersController");
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

// @GET
// @desc Get followers of a user
router.get("/user/followers/:id", authMiddleware, userFollowersController);

// @GET
// @desc Get followers of a user
router.get("/user-search", authMiddleware, searchUsersController);

module.exports = router;
