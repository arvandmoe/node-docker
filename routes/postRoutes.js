const express = require("express");

const postController = require("../controllers/postController");

const router = express.Router()

router
  .route("/")
  .get(postController.getAllPosts)
  .post(postController.createPost)
  .delete(postController.deleteAllPosts);

router
  .route("/:id")
  .get(postController.getOnePost)
  .post(postController.updatePost)
  .delete(postController.deletePost);

module.exports = router;  
