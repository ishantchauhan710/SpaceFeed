const createHttpError = require("http-errors");
const PostModel = require("../../models/postModel");
const CommentModel = require("../../models/commentModel");

const deleteCommentController = async (req, res, next) => {
  const userId = req.session.userId;
  const commentId = req.params.id;
  try {
    if (!userId) {
      throw new createHttpError("User id cannot be null");
    }
    if (!commentId) {
      throw new createHttpError("Comment id cannot be null");
    }

    const comment = await CommentModel.findById(commentId).populate("post");

    if (userId == comment.commentedBy || userId == comment.post.createdBy) {
      await comment.delete();
      res.sendStatus(200);
    } else {
      throw new createHttpError(
        400,
        "Only the post owner or the comment owner can delete a comment"
      );
    }
  } catch (err) {
    next(err);
  }
};

module.exports = deleteCommentController;
