const { Schema, default: mongoose } = require("mongoose");

const CommentReplySchema = new Schema(
  {
    replyBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    comment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
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

const CommentReplyModel = mongoose.model("CommentReply", CommentReplySchema);
module.exports = CommentReplyModel;
