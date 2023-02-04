const createHttpError = require("http-errors");
const NotificationModel = require("../../models/notificationModel");
const UserModel = require("../../models/userModel");

// Function to follow or unfollow a user
const toggleUserFollowController = async (req, res, next) => {
  const id = req.session.userId;
  const { userToFollow } = req.body;
  try {
    const user = await UserModel.findById(id);
    const followings = user.followings;

    if (!userToFollow) {
      throw new createHttpError(400, "User to follow Id cannot be null");
    }

    let updatedFollowings;
    if (followings.includes(userToFollow)) {
      // Unfollow user
      //console.log("Unfollow" + followings)
      updatedFollowings = followings.filter((item) => item != userToFollow);
      //console.log("Unfollow Result" + updatedFollowings)
    } else {
      // Follow user
      //console.log("Follow" + followings)
      updatedFollowings = [userToFollow, ...followings];

      if (userToFollow != id) {
        const notification = await NotificationModel.create({
          belongsTo: userToFollow,
          notifiedBy: id,
          type: "follow",
          dataRef: id,
        });
      }

      //console.log("Follow Result" + updatedFollowings)
    }

    if (updatedFollowings === [null]) {
      updatedFollowings = [];
    }

    user.followings = updatedFollowings;
    await user.save();

    return res.status(201).json({ user: user });
  } catch (err) {
    next(err);
  }
};

module.exports = toggleUserFollowController;
