const express = require("express");
const createPostController = require("../controllers/post/createPostController");
const getPostsController = require("../controllers/post/getPostsController");
const storageConfig = require("../config/storageConfig");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();


// @POST
// @desc Upload Post
router.post(
  "/posts/create",
  authMiddleware,
  storageConfig.single("media"),
  createPostController
);

// @GET
// @desc Get posts [Posts created by user]
router.get("/posts/:id", authMiddleware, getPostsController.getPosts);

// @GET
// @desc Get feed [Posts created by followings]
router.get(
  "/posts/feed",
  authMiddleware,
  getPostsController.getFeed
);

module.exports = router;
