const express = require("express");
const {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
} = require("./index");

/**
 * @param {Error} err
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
module.exports = (err, req, res, next) => {
  console.log(err);
  let status = 500;

  if (err instanceof BadRequestError) status = 400;
  else if (err instanceof UnauthorizedError) status = 401;
  else if (err instanceof ForbiddenError) status = 403;
  else if (err instanceof NotFoundError) status = 404;

  res.status(status).json({ error: err.message });
};
