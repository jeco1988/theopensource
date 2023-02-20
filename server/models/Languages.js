const { Schema, model } = require("mongoose");

const LanguageSchema = new Schema({
  languageName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

const Language = model("Language", LanguageSchema);

module.exports = Language;
