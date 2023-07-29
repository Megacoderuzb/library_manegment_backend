const express = require("express");
require("dotenv/config");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const isSuper = (req, res, next) => {
  try {
    const { role } = req.user;
    if (role != "super_admin") {
      return res.status(403).json({
        message: "Forbidden",
      });
    }
    next();
  } catch (error) {
    res.status(401).json({
      message: "Unauthorized",
      error,
    });
  }
};
module.exports = isSuper;
