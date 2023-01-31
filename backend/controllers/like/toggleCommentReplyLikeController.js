const createHttpError = require("http-errors");
const UserModel = require("../../models/userModel");
const CommentReplyModel = require("../../models/commentReplyModel");

// Function to like or unlike a comment reply
const toggleCommentReplyLikeController = async (req, res, next) => {
  const userId = req.session.userId;
  const { replyId } = req.body;
  try {
    if (!replyId) {
      throw new createHttpError(400, "Reply Id cannot be null");
    }
    const commentReply = await CommentReplyModel.findById(replyId);
    if (!commentReply) {
      throw new createHttpError(400, "Comment reply not found");
    }
    const likes = commentReply.likedBy;

    let updatedLikes;
    let action;
    if (likes.includes(userId)) {
      // Unlike Comment Reply
      updatedLikes = likes.filter((item) => item != userId);
      action = "unlike";
    } else {
      // Like Comment Reply
      updatedLikes = [userId, ...likes];
      action = "like";
    }

    if (updatedLikes === [null]) {
      updatedLikes = [];
    }

    commentReply.likedBy = updatedLikes;
    await commentReply.save();

    return res.status(200).json({ action: action });
  } catch (err) {
    next(err);
  }
};

module.exports = toggleCommentReplyLikeController;
