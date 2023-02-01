const createHttpError = require("http-errors");
const UserModel = require("../../models/userModel");
const PostModel = require("../../models/postModel");

const userStatsController = async (req, res, next) => {
  const userId = req.params.id;
  try {
    if (!userId) {
      throw new createHttpError(400, "UserId cannot be null");
    }

    const user = await UserModel.findById(userId);
    const followers = await UserModel.find({ followings: { $in: [userId] } });
    const followings = user.followings;
    const posts = await PostModel.find({ createdBy: userId });

    const stats = {
      followers: followers.length ? followers.length : "0",
      followings: followings.length ? followings.length : "0",
      posts: posts.length ? posts.length : "0",
    };

    console.log("stats" + stats);

    res.status(200).json({
      stats: stats,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = userStatsController;
