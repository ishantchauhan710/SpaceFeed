const express = require("express");
const createPostController = require("../controllers/post/createPostController");

const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/post", authMiddleware, createPostController);

module.exports = router;
