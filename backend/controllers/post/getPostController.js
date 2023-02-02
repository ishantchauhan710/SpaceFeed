const createHttpError = require("http-errors");
const PostModel = require("../../models/postModel");

const getPostController = async (req, res, next) => {
  const postId = req.params.id;
  try {
    if (!postId) {
      throw new createHttpError("Post id cannot be null");
    }
    const post = await PostModel.findById(postId).populate("createdBy likedBy");

    res.status(200).json({ post: post });
  } catch (err) {
    next(err);
  }
};

module.exports = { getPostController };
