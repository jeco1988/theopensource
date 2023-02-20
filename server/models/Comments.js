const { Schema, model } = require("mongoose");
const User = require("./User");
const moment = require("moment");

const CommentsSchema = new Schema({
  commentId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  commentText: { type: String, require: true },
  user: [User],
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createAt) => moment(createAt).format("dddd, MMMM Do YYYY, h:mm:ss a"),
  },
});
const Comments = model("Comments", CommentsSchema);

module.exports = Comments;
