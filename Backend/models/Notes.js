const mongoose = require("mongoose");

const NotesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  tag: {
    type: String,
    default: "General",
  },
});

module.exports = mongoose.model("note", NotesSchema);
