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
      type: String, // follow / comment
      require: true,
    },
    data: {
      type: String, // i.e comment content
      require: true,
      default: ""
    },
  },
  { timestamps: true }
);

const NotificationModel = mongoose.model("Notification", NotificationSchema);
module.exports = NotificationModel;
