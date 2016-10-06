const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
  body:   { type: String },
  wordCount: { type: Number, max: 200, required: true } // Might add number of words?
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
  title:      { type: String, trim: true, required: true, unique: true, minlength: 1, maxlength: 50 }, // Max length?
  image:      { type: String, trim: true, required: true, unique: true }, // Valid image time...
  // wordCount:  { type: Number, required: true }, // Max number
  entries:    [entrySchema],
  status:     { type: String, enum: ["active", "finished"], default: "active" },
  comments:   [commentSchema],
  }, {
  timestamps: true
});

module.exports = {
  novel: mongoose.model("Novel", novelSchema),
  entry: mongoose.model("Entry", entrySchema),
  comment: mongoose.model("Comment", commentSchema)
};
