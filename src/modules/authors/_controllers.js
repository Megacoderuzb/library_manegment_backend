const express = require("express");
const httpValidator = require("../../shared/http-validator");
const { postRegisterAuthorSchema, patchAuthorSchema } = require("./_schemas");
const addAuthor = require("./add-author");
const editAuthor = require("./edit-author");
const showAuthor = require("./show-author");
const listAuthors = require("./list_author");
const removeAuthor = require("./remove-author");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postAuthor = async (req, res, next) => {
  try {
    console.log(req.body);
    httpValidator({ body: req.body }, postRegisterAuthorSchema);
    const result = await addAuthor(req.body);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const patchAuthor = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, patchAuthorSchema);

    const result = await editAuthor({ id: req.params.id, ...req.body });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAuthor = async (req, res, next) => {
  try {
    const result = await showAuthor({ id: req.params.id });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getAuthors = async (req, res, next) => {
  try {
    const result = await listAuthors();

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteAuthor = async (req, res, next) => {
  try {
    const result = await removeAuthor({ id: req.params.id });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postAuthor,
  patchAuthor,
  getAuthor,
  getAuthors,
  deleteAuthor,
};
