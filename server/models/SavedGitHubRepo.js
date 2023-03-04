const { Schema, model, Types } = require("mongoose");
const moment = require("moment");

const savedGitHubRepoSchema = new Schema({
  //the following values are read via the github api
  gitHubID: {
    type: String,
    required: true,
    trim: true,
  },
  owner: {
    type: String,
    required: true,
    trim: true,
  },
  repositoryName: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  language: {
    type: String,
    required: true,
    trim: true,
  },
  url: {
    type: String,
    required: true,
    trim: true,
  },
  issues: [
    {
      title: { type: String },
      url: { type: String, required: true, trim: true },
    },
  ],
  userComment: [
    {
      commentText: {
        type: String,

        minlength: 1,
        maxlength: 280,
        trim: true,
      },
      commentAuthor: { type: String, trim: true },
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
