const createHttpError = require("http-errors");
const UserModel = require("../../models/userModel");
const CommentModel = require("../../models/commentModel");

// Function to like or unlike a comment
const toggleCommentLikeController = async (req, res, next) => {
  const userId = req.session.userId;
  const { commentId } = req.body;
  try {
    if (!commentId) {
      throw new createHttpError(400, "Comment Id cannot be blank");
    }
    const comment = await CommentModel.findById(commentId);
    const likes = comment.likedBy;

    let updatedLikes;
    let action;
    if (likes.includes(userId)) {
      // Unlike Comment
      updatedLikes = likes.filter((item) => item != userId);
      action = "unlike";
    } else {
      // Like Comment
      updatedLikes = [userId, ...likes];
      action = "like";
    }

    if (updatedLikes === [null]) {
      updatedLikes = [];
    }

    comment.likedBy = updatedLikes;
    await comment.save();

    return res.status(201).json({ action: action });
  } catch (err) {
    next(err);
  }
};

module.exports = toggleCommentLikeController;
