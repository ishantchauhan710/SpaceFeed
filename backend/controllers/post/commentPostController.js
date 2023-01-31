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
      throw new createHttpError(400, "Post ID is required");
    }

    if ((!content || content.trim().length < 1) && !mediaUrl) {
      throw new createHttpError(400, "Comment cannot be blank");
    }

    const comment = await CommentModel.create({
      commentedBy: userId,
      post: postId,
      content: content,
      likedBy: [],
    });
    res.status(201).json({ comment: comment });
  } catch (err) {
    next(err);
  }
};

module.exports = commentPostController;
