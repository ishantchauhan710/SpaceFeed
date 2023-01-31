const createHttpError = require("http-errors");
const CommentReplyModel = require("../../models/commentReplyModel");

const commentReplyController = async (req, res, next) => {
  const userId = req.session.userId;
  const { commentId, content } = req.body;

  try {
    if (!userId) {
      throw new createHttpError(400, "User authorization failed");
    }

    if (!commentId) {
      throw new createHttpError(400, "Comment Id is required");
    }

    if (!content || content.trim().length < 1) {
      throw new createHttpError(400, "Comment reply cannot be blank");
    }

    let commentReply = await CommentReplyModel.create({
      replyBy: userId,
      comment: commentId,
      content: content,
      likedBy: [],
    });

    commentReply = await commentReply.populate("replyBy");

    res.status(201).json({ reply: commentReply });
  } catch (err) {
    next(err);
  }
};

module.exports = commentReplyController;
