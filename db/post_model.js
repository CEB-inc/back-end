const mongoose = require("./connection");

// Registers model that uses the schema with connection
const PostModel = mongoose.model(
  "Post",
  // Creating Schema for each field in posts object
  new mongoose.Schema(
    {
      // This connects the user model to each post through the "ref: 'User'"
      // and attaches an ObjectId
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
      category: {
        type: String,
        required: false,
      },
      media: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      body: {
        type: String,
        required: true,
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      timestamps: true,
    }
  )
);

module.exports = PostModel;
