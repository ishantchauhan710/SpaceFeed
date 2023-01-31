const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const togglePostLikeController = require("../controllers/like/togglePostLikeController");
const toggleCommentLikeController = require("../controllers/like/toggleCommentLikeController");
const toggleCommentReplyLikeController = require("../controllers/like/toggleCommentReplyLikeController");

// @POST
// @desc Like and unlike a post
router.post("/like", authMiddleware, togglePostLikeController);

// @POST
// @desc Like and unlike a comment
router.post("/like/comment/", authMiddleware, toggleCommentLikeController);

// @POST
// @desc Like and unlike a comment reply
router.post(
  "/like/comment/reply/",
  authMiddleware,
  toggleCommentReplyLikeController
);

module.exports = router;
