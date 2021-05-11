const express = require("express");

const postController = require("../controllers/postController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router
  .route("/")
  .get(protect, postController.getAllPosts)
  .post(protect, postController.createPost)
  .delete(protect, postController.deleteAllPosts);

router
  .route("/:id")
  .get(protect, postController.getOnePost)
  .post(protect, postController.updatePost)
  .delete(protect, postController.deletePost);

module.exports = router;
