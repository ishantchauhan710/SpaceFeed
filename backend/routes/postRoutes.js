const express = require("express");
const createPostController = require("../controllers/post/createPostController");
const getPostsController = require("../controllers/post/getPostsController");
const { imageStorageConfig } = require("../config/storageConfig");
const authMiddleware = require("../middlewares/authMiddleware");
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

module.exports = router;
