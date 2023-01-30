const createHttpError = require("http-errors");
const UserModel = require("../../models/userModel");

const suggestedUsersController = async (req, res, next) => {
  try {
    const suggestedUsers = await UserModel.find({}, null, { limit: 10 });
    return res.status(201).json({ suggestedUsers: suggestedUsers });
  } catch (err) {
    next(err);
  }
};

module.exports = suggestedUsersController;
