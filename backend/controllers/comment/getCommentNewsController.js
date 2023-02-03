const PostModel = require("../../models/postModel");
const CommentModel = require("../../models/commentModel");
const createHttpError = require("http-errors");
const UserModel = require("../../models/userModel");

const getCommentNewsController = async (req, res, next) => {
  try {
    const news = [];

    const comments = await CommentModel.find().populate("commentedBy").limit(5);
    for (let i in comments) {
      const commentedBy = comments[i].commentedBy.username;
      //console.log("CommentedBy " + commentedBy);
      const postId = comments[i].post;
      const post = await PostModel.findById(postId).populate("createdBy");
      const postOwnerUsername = post.createdBy.username;
      //console.log("Owner " + post.createdBy.username);
      news.push({
        actionBy: commentedBy,
        actionOn: postOwnerUsername,
        actionInitials: post.content,
        actionTime: comments[i].createdAt,
        postId: postId,
      });
    }

    res.status(200).json({ news: news });
  } catch (err) {
    next(err);
  }
};

module.exports = getCommentNewsController;
