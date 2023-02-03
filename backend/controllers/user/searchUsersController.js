const createHttpError = require("http-errors");
const UserModel = require("../../models/userModel");

const searchUsersController = async (req, res, next) => {
  const text = req.query.search;
  try {
    if (!text) {
      throw new createHttpError(400, "Search query cannot be blank");
    }
    const user = await UserModel.find({
      $or: [{ email: { $regex: text } }, { username: { $regex: text } }],
    });
    res.status(200).json({ user: user });
  } catch (error) {
    next(error);
  }
};

module.exports = searchUsersController;
