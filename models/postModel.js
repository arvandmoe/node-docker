const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "Posts must have a title!"],
  },
  body: {
    type: String,
    require: [true, "Posts must have a body!"],
  },
});

const Post = mongoose.model("Post" ,postSchema);
module.exports = Post;
