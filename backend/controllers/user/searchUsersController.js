const createHttpError = require("http-errors");
const UserModel = require("../../models/userModel");

const searchUsersController = async (req, res, next) => {
  const text = req.query.search;
  try {
    if (!text) {
      throw new createHttpError(400, "Search query cannot be blank");
    }
    const users = await UserModel.find({
      $or: [{ email: { $regex: text } }, { username: { $regex: text } }],
    }).limit(5);
    res.status(200).json({ users: users });
  } catch (error) {
    next(error);
  }
};

module.exports = searchUsersController;
