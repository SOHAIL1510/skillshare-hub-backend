const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  title: String,
  category: String,
  description: String,
  datetime: Date,
  mode: String,
});

module.exports = mongoose.model("Session", sessionSchema);