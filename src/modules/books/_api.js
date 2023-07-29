const express = require("express");
const isLoggedIn = require("../../shared/auth/is-loggedin");
const {
  postBook,
  getBooks,
  getBook,
  patchBook,
  deleteBook,
} = require("./_controllers");

const router = express.Router();

router.post("/books", isLoggedIn, postBook);
router.get("/books", isLoggedIn, getBooks);
router.get("/books/:id", isLoggedIn, getBook);
router.patch("/books/:id", isLoggedIn, patchBook);
router.delete("/books/:id", isLoggedIn, deleteBook);

module.exports = router;
