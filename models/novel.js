const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
  body:   { type: String } // Might add number of words?
}, {
  timestamps: true
});

const commentSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
  body:   { type: String } // Might add number of words?
}, {
  timestamps: true
});

const novelSchema = new mongoose.Schema({
  creator:    { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title:      { type: String, trim: true, required: true, unique: true }, // Max length?
  image:      { type: String, trim: true, required: true, unique: true }, // Valid image time...
  wordCount:  { type: Number, required: true }, // Max number
  entries:    [entrySchema],
  status:     { type: String, enum: ["active", "finished"], default: "active" },
  comments:   [commentSchema],
  }, {
  timestamps: true
});

module.exports = mongoose.model("Novel", novelSchema);