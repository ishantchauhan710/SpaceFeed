const createHttpError = require("http-errors");
const UserModel = require("../../models/userModel");
const PostModel = require("../../models/postModel");

const getPostsOfUser = async (req, res, next) => {
  try {
    const userId = req.session.userId;
    let posts = await PostModel.find({
      createdBy: userId,
    }).populate("createdBy");

    res.status(201).json({ posts: posts });
  } catch (err) {
    next(err.response.data.error);
  }
};

const getPostsOfUserFollowings = async (req, res, next) => {
  try {
    const userId = req.session._id;
    const user = await UserModel.findByid(userId);
    const followings = user.followings;

    let posts = [];

    followings.forEach(async (followingId) => {
      const postList = await PostModel.find({
        createdBy: followingId,
      });
      posts = [...postList, ...posts];
    });

    res.status(201).json({ posts: posts });
  } catch (err) {
    next(err.response.data.error);
  }
};

module.exports = { getPostsOfUser, getPostsOfUserFollowings };
