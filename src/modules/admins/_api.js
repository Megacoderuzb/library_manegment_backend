const express = require("express");
const isLoggedIn = require("../../shared/auth/is-loggedin");
const isSuper = require("../../shared/auth/isSuper");
const {
  postRegister,
  postLogin,
  editAdmin,
  getAdmin,
  deleteAdmin,
  getAdmins,
} = require("./_controllers");

const router = express.Router();

router.post("/admins", isLoggedIn, isSuper, postRegister);
router.post("/admins/login", postLogin);
router.get("/admins/:id", isLoggedIn, getAdmin);
router.get("/admins", isLoggedIn, getAdmins);
router.patch("/admins/me", isLoggedIn, editAdmin);
router.patch("/admins/:id", isLoggedIn, isSuper, editAdmin);
router.delete("/admins/:id", isLoggedIn, isSuper, deleteAdmin);

module.exports = router;
