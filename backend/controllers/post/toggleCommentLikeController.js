const createHttpError = require("http-errors");
const UserModel = require("../../models/userModel");
const CommentModel = require("../../models/commentModel");

// Function to like or unlike a comment
const toggleCommentLikeController = async (req, res, next) => {
  const userId = req.session.userId;
  const { commentId } = req.body;
  try {
    const comment = await CommentModel.findById(commentId);
    const likes = comment.likedBy;

    let updatedLikes;
    if (likes.includes(userId)) {
      // Unlike Comment
      updatedLikes = likes.filter((item) => item != userId);
    } else {
      // Like Comment
      updatedLikes = [userId, ...likes];
    }

    if (updatedLikes === [null]) {
      updatedLikes = [];
    }

    comment.likedBy = updatedLikes;
    await comment.save();

    return res.status(201).json({ comment: comment });
  } catch (err) {
    next(err);
  }
};

module.exports = toggleCommentLikeController;
