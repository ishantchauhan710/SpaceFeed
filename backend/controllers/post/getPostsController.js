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
    next(err);
  }
};

const getPostsOfUserFollowings = async (req, res, next) => {
  const userId = req.session.userId;
  try {
    const user = await UserModel.findById(userId);
    const followings = user.followings;

    let posts = [];

    // Get posts of user
    let userPostList = await PostModel.find({
      createdBy: userId,
    }).populate("createdBy");
    posts = [...userPostList, ...posts];

    // Get posts of followings
    for (let i in followings) {
      const postList = await PostModel.find({
        createdBy: followings[i],
      }).populate("createdBy");
      posts = [...postList, ...posts];
    }

    const sortedPosts = posts.sort((i, j) => {
      return new Date(j.createdAt) - new Date(i.createdAt);
    });

    res.status(201).json({ posts: sortedPosts });
  } catch (err) {
    next(err);
  }
};

module.exports = { getPostsOfUser, getPostsOfUserFollowings };
