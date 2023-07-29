const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config');
const { UnauthorizedError } = require('../errors');

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const isLoggedIn = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      throw new UnauthorizedError('Unauthorized.');
    }

    const decoded = jwt.verify(token, config.jwt.secret, { ignoreExpiration: false });

    req.user = decoded.user;

    next();
  } catch (error) {
    console.log(error);
    next(new UnauthorizedError(error.message));
  }
};

module.exports = isLoggedIn;
