const createHttpError = require("http-errors");
const UserModel = require("../../models/userModel");
const PostModel = require("../../models/postModel");

const getPosts = async (req, res, next) => {
  const userId = req.params.id;
  try {
    if (!userId) {
      throw new createHttpError("User id cannot be null");
    }
    let posts = await PostModel.find({
      createdBy: userId,
    }).populate("createdBy likedBy");

    res.status(201).json({ posts: posts });
  } catch (err) {
    next(err);
  }
};

const getFeed = async (req, res, next) => {
  const userId = req.session.userId;
  try {
    const user = await UserModel.findById(userId);
    const followings = user.followings;

    let posts = [];

    // Get posts of user
    let userPostList = await PostModel.find({
      createdBy: userId,
    }).populate("createdBy likedBy");
    posts = [...userPostList, ...posts];

    // Get posts of followings
    for (let i in followings) {
      const postList = await PostModel.find({
        createdBy: followings[i],
      }).populate("createdBy likedBy");
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

module.exports = { getPosts, getFeed };
