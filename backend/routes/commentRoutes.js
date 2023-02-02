const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const commentPostController = require("../controllers/comment/commentPostController");
const getCommentsOnPostController = require("../controllers/comment/getCommentsOnPostController");
const deleteCommentController = require("../controllers/comment/deleteCommentController");

// @POST
// @desc Comment on post
router.post("/comment", authMiddleware, commentPostController);

// @GET
// @desc Get comments for a particular post
router.get("/comment/:id", authMiddleware, getCommentsOnPostController);

// @DELETE
// @desc Delete a comment
router.delete("/comment/:id", authMiddleware, deleteCommentController);

module.exports = router;
