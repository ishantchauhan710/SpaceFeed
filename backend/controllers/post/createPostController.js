const createHttpError = require("http-errors");
const PostModel = require("../../models/postModel");

const createPostController = async (req, res, next) => {
  const { content } = req.body;
  const postOwner = req.session.userId;
  const mediaUrl = req.file ? req.file.publicUrl : "";

  try {
    if (!postOwner) {
      throw new createHttpError(400, "User authorization failed");
    }

    if ((!content || content.trim().length < 1) && !mediaUrl) {
      throw new createHttpError(
        400,
        "Post should contain either some text or a media file"
      );
    }

    const post = await PostModel.create({
      createdBy: postOwner,
      content: content,
      mediaLink: mediaUrl,
      likedBy: [],
    });
    res.status(201).json({ post: post });
  } catch (err) {
    next(err);
  }
};

module.exports = createPostController;
