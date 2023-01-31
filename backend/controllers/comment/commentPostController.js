const createHttpError = require("http-errors");
const CommentModel = require("../../models/commentModel");

const commentPostController = async (req, res, next) => {
  const userId = req.session.userId;
  const { postId, content } = req.body;

  try {
    if (!userId) {
      throw new createHttpError(400, "User authorization failed");
    }

    if (!postId) {
      throw new createHttpError(400, "Post Id cannot be null");
    }

    if (!content || content.trim().length < 1) {
      throw new createHttpError(400, "Comment cannot be blank");
    }

    let comment = await CommentModel.create({
      commentedBy: userId,
      post: postId,
      content: content,
      likedBy: [],
    });

    comment = await comment.populate("commentedBy");
    res.status(201).json({ comment: comment });
  } catch (err) {
    next(err);
  }
};

module.exports = commentPostController;
