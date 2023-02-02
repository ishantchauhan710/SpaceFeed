const createHttpError = require("http-errors");
const UserModel = require("../../models/userModel");

const findUserController = async (req, res, next) => {
  const id = req.params.id;
  try {
    if (!id) {
      throw new createHttpError(400, "User id cannot be null");
    }
    const user = await UserModel.findById(id).populate("followings");
    res.status(200).json({ user: user });
  } catch (error) {
    next(error);
  }
};

module.exports = findUserController;
