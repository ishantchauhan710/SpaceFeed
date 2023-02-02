const createHttpError = require("http-errors");
const PostModel = require("../../models/postModel");
const CommentModel = require("../../models/commentModel");

const deletePostController = async (req, res, next) => {
  const userId = req.session.userId;
  const postId = req.params.id;
  try {
    if (!userId) {
      throw new createHttpError("User id cannot be null");
    }
    if (!postId) {
      throw new createHttpError("Post id cannot be null");
    }

    const post = await PostModel.findById(postId);
    const comments = await CommentModel.find({ post: postId });

    // console.log("Post Owner ID: " + post.createdBy);
    // console.log("User ID: " + userId);
    if (post.createdBy != userId) {
      throw new createHttpError("Only the creator of post can delete it");
    }

    for (i in comments) {
      //console.log("Comment deleted: " + comments[i]);
      await comments[i].delete();
    }

    await post.delete();
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
};

module.exports = deletePostController;
