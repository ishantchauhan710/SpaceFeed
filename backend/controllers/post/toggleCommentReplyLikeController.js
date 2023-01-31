const createHttpError = require("http-errors");
const UserModel = require("../../models/userModel");
const CommentReplyModel = require("../../models/commentReplyModel");

// Function to like or unlike a comment reply
const toggleCommentReplyLikeController = async (req, res, next) => {
  const userId = req.session.userId;
  const { commentReplyId } = req.body;
  try {
    const commentReply = await CommentReplyModel.findById(commentReplyId);
    const likes = commentReply.likedBy;

    let updatedLikes;
    if (likes.includes(userId)) {
      // Unlike Comment Reply
      updatedLikes = likes.filter((item) => item != userId);
    } else {
      // Like Comment Reply
      updatedLikes = [userId, ...likes];
    }

    if (updatedLikes === [null]) {
      updatedLikes = [];
    }

    commentReply.likedBy = updatedLikes;
    await commentReply.save();

    return res.status(201).json({ commentReply: commentReply });
  } catch (err) {
    next(err);
  }
};

module.exports = toggleCommentReplyLikeController;
