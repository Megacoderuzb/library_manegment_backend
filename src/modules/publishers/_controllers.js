const express = require("express");
const httpValidator = require("../../shared/http-validator");
const {
  postPublisherSchema,
  showPublisherSchema,
  patchPublisherSchema,
  deletePublisherSchema,
  // getPublishersSchema,
} = require("./_schema");
const addPublisher = require("./addPublisher");
const showPublisher = require("./showPublisher");
const listPublishers = require("./getPublishers");
const editPublisher = require("./patchPublisher");
const removePublisher = require("./removePublisher");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const postPublisher = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postPublisherSchema);

    const result = await addPublisher({ ...req.body });

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
const getPublishers = async (req, res, next) => {
  try {
    // httpValidator({ query: req.query }, getPublishersSchema);

    const result = await listPublishers();

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
const getPublisher = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showPublisherSchema);

    const result = await showPublisher({ ...req.params });

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

const patchPublisher = async (req, res, next) => {
  try {
    httpValidator({ params: req.params, body: req.body }, patchPublisherSchema);

    const result = await editPublisher({
      id: req.params.id,
      ...req.body,
    });

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
const deletePublisher = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deletePublisherSchema);

    const result = await removePublisher({
      id: req.params.id,
    });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postPublisher,
  getPublishers,
  getPublisher,
  patchPublisher,
  deletePublisher,
};
