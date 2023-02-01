const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const togglePostLikeController = require("../controllers/like/togglePostLikeController");
const toggleCommentLikeController = require("../controllers/like/toggleCommentLikeController");

// @POST
// @desc Like and unlike a post
router.post("/like", authMiddleware, togglePostLikeController);

// @POST
// @desc Like and unlike a comment
router.post("/like/comment/", authMiddleware, toggleCommentLikeController);


module.exports = router;
