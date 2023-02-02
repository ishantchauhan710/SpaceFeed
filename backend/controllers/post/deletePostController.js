const createHttpError = require("http-errors");
const PostModel = require("../../models/postModel");

const deletePostController = async (req, res, next) => {
  const userId = req.session.userId;
  const { postId } = req.body;
  try {
    if (!userId) {
      throw new createHttpError("User id cannot be null");
    }
    if (!postId) {
      throw new createHttpError("Post id cannot be null");
    }

    const post = await PostModel.findById(postId);
    if (post.createdBy !== userId) {
      throw new createHttpError("Only the creator of post can delete it");
    }

    await post.delete();
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
};

module.exports = deletePostController;
