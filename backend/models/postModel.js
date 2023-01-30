const { Schema, default: mongoose } = require("mongoose");

const PostSchema = new Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    content: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    mediaLink: {
      type: String,
      required: false,
    },
    likedBy: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
      require: true,
    },
  },
  { timestamps: true }
);

const PostModel = mongoose.model("Post", PostSchema);
module.exports = PostModel;
