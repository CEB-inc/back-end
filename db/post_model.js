const mongoose = require("./connection");

// Registers model that uses the schema with connection
const PostModel = mongoose.model(
  "Post",
  // Creating Schema for each field in posts object
  new mongoose.Schema({
    category: {
      type: String,
      required: true,
    },
    media: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    post: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      default: 0,
    },
  })
);

module.exports = PostModel;
