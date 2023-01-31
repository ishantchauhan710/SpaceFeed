const { Schema, default: mongoose } = require("mongoose");

const CommentSchema = new Schema(
  {
    commentedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      require: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    likedBy: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
      require: true,
    },
  },
  { timestamps: true }
);

const CommentModel = mongoose.model("Comment", CommentSchema);
module.exports = CommentModel;
