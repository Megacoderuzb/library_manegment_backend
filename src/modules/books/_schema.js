const Joi = require("joi");

exports.postBookSchema = {
  body: Joi.object({
    title: Joi.string().required(),
    publisher: Joi.string().required(),
    author: Joi.string().required(),
    copies: Joi.number().integer().required(),
  }),
};

exports.showBookSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

exports.patchBookSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
  body: Joi.object({
    title: Joi.string(),
    publisher: Joi.string(),
    author: Joi.string(),
    copies: Joi.number().integer(),
  }),
};

exports.deleteBookSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};
