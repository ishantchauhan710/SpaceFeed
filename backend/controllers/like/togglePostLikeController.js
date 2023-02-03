const createHttpError = require("http-errors");
const UserModel = require("../../models/userModel");
const PostModel = require("../../models/postModel");
const NotificationModel = require("../../models/notificationModel");

// Function to like or unlike a post
const togglePostLikeController = async (req, res, next) => {
  const userId = req.session.userId;
  const { postId } = req.body;
  try {
    if (!postId) {
      throw new createHttpError("Post ID cannot be blank");
    }

    const post = await PostModel.findById(postId);
    const likes = post.likedBy;
    let action;

    let updatedLikes;
    if (likes.includes(userId)) {
      // Unlike Post
      updatedLikes = likes.filter((item) => item != userId);
      action = "unlike";
    } else {
      // Like Post
      updatedLikes = [userId, ...likes];
      action = "like";
      const notification = await NotificationModel.create({
        belongsTo: post.createdBy,
        notifiedBy: userId,
        type: "like",
      });
    }

    if (updatedLikes === [null]) {
      updatedLikes = [];
    }

    post.likedBy = updatedLikes;
    await post.save();

    return res.status(200).json({ action: action });
  } catch (err) {
    next(err);
  }
};

module.exports = togglePostLikeController;
