const PostModel = require("../../models/postModel");
const CommentModel = require("../../models/commentModel");
const createHttpError = require("http-errors");

const getCommentsOnPostController = async (req, res, next) => {
  const postId = req.params.id;
  try {
    if (!postId) {
      throw new createHttpError(400, "Post Id is required");
    }
    const comments = await CommentModel.find({ post: postId }).populate(
      "commentedBy"
    );

    res.status(201).json({ comments: comments });
  } catch (err) {
    next(err);
  }
};

module.exports = getCommentsOnPostController;
