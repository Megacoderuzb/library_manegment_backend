const express = require("express");
const isLoggedIn = require("../../shared/auth/is-loggedin");
const { postLoan, getLoan, getLoans } = require("./_controllers");

const router = express.Router();

router.post("/loans", isLoggedIn, postLoan);
router.get("/loans", isLoggedIn, getLoans);
router.get("/loans/:id", isLoggedIn, getLoan);

module.exports = router;
