const PostModel = require("../../models/postModel");
const CommentModel = require("../../models/commentModel");
const createHttpError = require("http-errors");

const getCommentsOnPostController = async (req, res, next) => {
  const postId = req.params.id;
  const skip = req.query.skip;
  try {
    if (!postId) {
      throw new createHttpError(400, "Post Id is required");
    }
    if (!skip) {
      throw new createHttpError(400, "Pagination skip value is required");
    }

    let comments = await CommentModel.find({ post: postId }, null, {
      skip: skip,
      limit: 2,
    }).populate("commentedBy");

    res.status(200).json({ comments: comments });
  } catch (err) {
    next(err);
  }
};

module.exports = getCommentsOnPostController;
