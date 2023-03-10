const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    dob: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    profilePictureURL: {
      type: String,
      required: false,
    },
    profileBanner: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    followings: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
      require: false,
      default: []
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
