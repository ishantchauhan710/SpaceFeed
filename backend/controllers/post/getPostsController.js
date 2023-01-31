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

    for (let i in followings) {
      //console.log("Following: ", followings[i]);
      const postList = await PostModel.find({
        createdBy: followings[i],
      }).populate("createdBy");
      posts = [...postList, ...posts];
    }

    //console.log(posts);
    res.status(201).json({ posts: posts });
  } catch (err) {
    next(err);
  }
};

module.exports = { getPostsOfUser, getPostsOfUserFollowings };
