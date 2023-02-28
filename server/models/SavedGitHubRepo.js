const { Schema, model, Types } = require("mongoose");
const moment = require("moment");

const savedGitHubRepoSchema = new Schema({
  //the following values are read via the github api
  gitHubID: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  repositoryName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  issues: [
    {
      title: { type: String },
      url: { type: String },
    },
  ],
  userComment: [
    {
      commentText: {
        type: String,
        require: true,
        minlength: 1,
        maxlength: 280,
        trim: true,
      },
      commentAuthor: { type: String, require: true, trim: true },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (createAt) =>
          moment(createAt).format("dddd, MMMM Do YYYY, h:mm:ss a"),
      },
    },
  ],

  userEmail: { type: String, trim: true },
});

const SavedGitHubRepo = model("SavedGitHubRepo", savedGitHubRepoSchema);

module.exports = SavedGitHubRepo;
