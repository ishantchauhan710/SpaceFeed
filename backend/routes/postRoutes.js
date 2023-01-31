const express = require("express");
const createPostController = require("../controllers/post/createPostController");
const getPostsController = require("../controllers/post/getPostsController");
const { imageStorageConfig } = require("../config/storageConfig");
const authMiddleware = require("../middlewares/authMiddleware");
const togglePostLikeController = require("../controllers/post/togglePostLikeController");
const commentPostController = require("../controllers/post/commentPostController");
const toggleCommentLikeController = require("../controllers/post/toggleCommentLikeController");
const commentReplyController = require("../controllers/post/commentReplyController");
const toggleCommentReplyLikeController = require("../controllers/post/toggleCommentReplyLikeController");
const router = express.Router();

router.post(
  "/post",
  authMiddleware,
  imageStorageConfig.single("media"),
  createPostController
);
router.get("/myposts", authMiddleware, getPostsController.getPostsOfUser);
router.get(
  "/posts",
  authMiddleware,
  getPostsController.getPostsOfUserFollowings
);
router.post("/like", authMiddleware, togglePostLikeController);

router.post("/comment", authMiddleware, commentPostController);
router.post("/comment/like", authMiddleware, toggleCommentLikeController);

router.post("/comment/reply", authMiddleware, commentReplyController);
router.post(
  "/comment/reply/like",
  authMiddleware,
  toggleCommentReplyLikeController
);

module.exports = router;
