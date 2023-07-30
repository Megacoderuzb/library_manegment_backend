const express = require("express");
const httpValidator = require("../../shared/http-validator");
const addLoan = require("./add_loan");
const showLoan = require("./show_loan");
const listLoans = require("./list_loan");
const { postLoanSchema } = require("./_schema");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postLoan = async (req, res, next) => {
  try {
    console.log(req.body);
    httpValidator({ body: req.body }, postLoanSchema);

    const result = await addLoan(req.user.id, req.body);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const getLoan = async (req, res, next) => {
  try {
    const result = await showLoan({ id: req.params.id });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getLoans = async (req, res, next) => {
  try {
    const result = await listLoans(req.query);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postLoan,
  getLoan,
  getLoans,
};
