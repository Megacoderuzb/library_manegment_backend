const express = require("express");
const isLoggedIn = require("../../shared/auth/is-loggedin");
const {
  postAuthor,
  getAuthors,
  getAuthor,
  patchAuthor,
  deleteAuthor,
} = require("./_controllers");

const router = express.Router();

router.post("/authors", isLoggedIn, postAuthor);
router.get("/authors", isLoggedIn, getAuthors);
router.get("/authors/:id", isLoggedIn, getAuthor);
router.patch("/authors/:id", isLoggedIn, patchAuthor);
router.delete("/authors/:id", isLoggedIn, deleteAuthor);

module.exports = router;
