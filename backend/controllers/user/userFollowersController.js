const createHttpError = require("http-errors");
const UserModel = require("../../models/userModel");

const userFollowersController = async (req, res, next) => {
  const userId = req.params.id;
  try {
    if (!userId) {
      throw new createHttpError(400, "UserId cannot be null");
    }
    const followers = await UserModel.find({ followings: { $in: [userId] } });
    res.status(200).json({
      followers: followers,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = userFollowersController;
