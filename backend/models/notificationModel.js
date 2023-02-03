const { mongoose, Schema } = require("mongoose");

const NotificationSchema = new Schema(
  {
    belongsTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    notifiedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    type: {
      type: String, // follow / like / comment / commentlike
      require: true,
    },
  },
  { timestamps: true }
);

const NotificationModel = mongoose.model("Notification", NotificationSchema);
module.exports = NotificationModel;
