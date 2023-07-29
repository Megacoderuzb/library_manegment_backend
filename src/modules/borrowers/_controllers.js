const express = require("express");
const httpValidator = require("../../shared/http-validator");
const {
  postRegisterBorrowerSchema,
  patchBorrowerSchema,
} = require("./_schemas");
const addBorrower = require("./add-borrower");
const editBorrower = require("./edit-borrower");
const showBorrower = require("./show-borrower");
const listBorrowers = require("./list_borrowers");
const removeBorrower = require("./remove-borrower");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postRegisterBorrower = async (req, res, next) => {
  try {
    console.log(req.body);
    httpValidator({ body: req.body }, postRegisterBorrowerSchema);

    const result = await addBorrower(req.body);

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
const patchBorrower = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, patchBorrowerSchema);
    const result = await editBorrower({ id: req.params.id, ...req.body });
    res.status(200).json({
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
const getBorrower = async (req, res, next) => {
  try {
    const result = await showBorrower({ id: req.params.id });
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getBorrowers = async (req, res, next) => {
  try {
    const result = await listBorrowers();
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteBorrower = async (req, res, next) => {
  try {
    const result = await removeBorrower({ id: req.params.id });
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postRegisterBorrower,
  patchBorrower,
  getBorrower,
  getBorrowers,
  deleteBorrower,
};
