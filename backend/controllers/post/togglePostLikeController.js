const createHttpError = require("http-errors");
const UserModel = require("../../models/userModel");
const PostModel = require("../../models/postModel");

// Function to like or unlike a post
const togglePostLikeController = async (req, res, next) => {
  const userId = req.session.userId;
  const { postId } = req.body;
  try {
    const post = await PostModel.findById(postId);
    const likes = post.likedBy;

    let updatedLikes;
    if (likes.includes(userId)) {
      // Unlike Post
      updatedLikes = likes.filter((item) => item != userId);
    } else {
      // Like Post
      updatedLikes = [userId, ...likes];
    }

    if (updatedLikes === [null]) {
      updatedLikes = [];
    }

    post.likedBy = updatedLikes;
    await post.save();

    return res.status(201).json({ post: post });
  } catch (err) {
    next(err);
  }
};

module.exports = togglePostLikeController;
