const UserModel = require("../../models/userModel");

const userController = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.session.userId)
      .exec();
    res.status(200).json({user: user});
  } catch (error) {
    next(error);
  }
};

module.exports = userController;
