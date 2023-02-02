const express = require("express");
const createPostController = require("../controllers/post/createPostController");
const getPostsController = require("../controllers/post/getPostsController");
const storageConfig = require("../config/storageConfig");
const authMiddleware = require("../middlewares/authMiddleware");
const deletePostController = require("../controllers/post/deletePostController");
const { getPostController } = require("../controllers/post/getPostController");
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
router.get("/posts/user/:id", authMiddleware, getPostsController.getPosts);

// @GET
// @desc Get feed [Posts created by followings]
router.get("/posts/feed", authMiddleware, getPostsController.getFeed);

// @GET
// @desc Get a single post
router.get("/posts/post/:id", authMiddleware, getPostController);

// @DELETE
// @desc Delete a post
router.delete("/posts/post/:id", authMiddleware, deletePostController);

module.exports = router;
