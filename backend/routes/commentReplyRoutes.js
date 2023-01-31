const express = require("express");
const commentReplyController = require("../controllers/commentreply/commentReplyController");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

// @POST
// @desc Reply a comment
router.post("/comment/reply/", authMiddleware, commentReplyController);

module.exports = router;
