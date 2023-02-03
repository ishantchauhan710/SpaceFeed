const NotificationModel = require("../../models/notificationModel");

const getNotificationsController = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const notifications = await NotificationModel.find({
      belongsTo: userId,
    }).populate("belongsTo notifiedBy");

    res.json({ notifications: notifications });
  } catch (err) {
    next(err);
  }
};

module.exports = getNotificationsController;
