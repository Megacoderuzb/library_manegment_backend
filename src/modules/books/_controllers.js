const express = require("express");
const httpValidator = require("../../shared/http-validator");

const addBook = require("./add_books");
const editBook = require("./edit_books");
const showBook = require("./show_book");
const listBooks = require("./list_books");
const removeBook = require("./remove_books");
const {
  showBookSchema,
  deleteBookSchema,
  postBookSchema,
  patchBookSchema,
} = require("./_schema");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postBook = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postBookSchema);

    const result = await addBook(req.body);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const patchBook = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, patchBookSchema);

    const result = await editBook({ id: req.params.id, ...req.body });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getBook = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showBookSchema);
    const result = await showBook({ id: req.params.id });
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getBooks = async (req, res, next) => {
  try {
    const result = await listBooks(req.query);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteBook = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteBookSchema);
    const result = await removeBook({ id: req.params.id });
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postBook,
  patchBook,
  getBook,
  getBooks,
  deleteBook,
};
