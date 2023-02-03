const PostModel = require("../../models/postModel");
const CommentModel = require("../../models/commentModel");
const createHttpError = require("http-errors");

const getCommentsOnPostController = async (req, res, next) => {
  const postId = req.params.id;
  const skip = req.query.skip;
  const limit = req.query.limit;

  try {
    if (!postId) {
      throw new createHttpError(400, "Post Id is required");
    }
    if (!skip) {
      throw new createHttpError(400, "Pagination skip value is required");
    }
    if (!limit) {
      throw new createHttpError(400, "Pagination limit value is required");
    }

    let comments = await CommentModel.find({ post: postId }, null, {
      skip: skip,
      limit: limit,
    })
      .sort({ createdAt: -1 })
      .populate("commentedBy");

    res.status(200).json({ comments: comments });
  } catch (err) {
    next(err);
  }
};

module.exports = getCommentsOnPostController;
