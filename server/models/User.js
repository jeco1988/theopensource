const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const SavedGitHubRepo = require("./SavedGitHubRepo");

const userSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
      "Must match an email address!",
    ],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  gitHubUsername: { type: String, trim: true },
  myFavourites: [{ type: Schema.Types.ObjectId, ref: "SavedGitHubRepo" }],
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
