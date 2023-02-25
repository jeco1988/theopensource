const { Schema, model } = require("mongoose");

const languageSchema = new Schema({
  languageName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

const Language = model("Language", languageSchema);

module.exports = Language;
