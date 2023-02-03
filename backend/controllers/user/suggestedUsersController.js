const createHttpError = require("http-errors");
const UserModel = require("../../models/userModel");

const suggestedUsersController = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.session.userId);
    const suggestedUsers = await UserModel.aggregate([
      { $sample: { size: 11 } },
    ]);

    const filteredSuggestedUsers = suggestedUsers
      .filter((item) => item.email !== user.email)
      .slice(0, 10);

    return res.status(200).json({ suggestedUsers: filteredSuggestedUsers });
  } catch (err) {
    next(err);
  }
};

module.exports = suggestedUsersController;
