const UserModel = require("../../models/userModel");

const userController = async (req, res, next) => {
  try {
    let user = await UserModel.findById(req.session.userId);
    user = await user.populate("followings");
    res.status(200).json({ user: user });
  } catch (error) {
    next(error);
  }
};

module.exports = userController;
