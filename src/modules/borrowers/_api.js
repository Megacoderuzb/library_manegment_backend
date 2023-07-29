const express = require("express");
const isLoggedIn = require("../../shared/auth/is-loggedin");
const {
  postRegisterBorrower,
  getBorrower,
  getBorrowers,
  patchBorrower,
  deleteBorrower,
} = require("./_controllers");

const router = express.Router();

router.post("/borrowers/register", isLoggedIn, postRegisterBorrower);
router.get("/borrowers", isLoggedIn, getBorrowers);
router.get("/borrowers/:id", isLoggedIn, getBorrower);
router.patch("/borrowers/:id", isLoggedIn, patchBorrower);
router.delete("/borrowers/:id", isLoggedIn, deleteBorrower);

module.exports = router;
