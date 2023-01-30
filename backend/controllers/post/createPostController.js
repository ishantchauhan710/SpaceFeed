const createHttpError = require("http-errors");
const PostModel = require("../../models/postModel");
const UserModel = require("../../models/userModel");

const createPostController = async (req, res, next) => {
  const { content } = req.body;
  const postOwner = req.session._id;

  try {
    if (!content || content.trim().length < 1) {
      throw new createHttpError(400, "Post content cannot be blank");
    }

    const post = await PostModel.create({
      createdBy: postOwner,
      content: content,
      mediaLink: "",
      likedBy: [],
    });
    res.status(201).json({ post: post });
  } catch (err) {
    next(err);
  }
};

module.exports = createPostController;
