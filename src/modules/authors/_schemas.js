const Joi = require("joi");

exports.postRegisterAuthorSchema = {
  body: Joi.object({
    name: Joi.string(),
  }),
};

exports.patchAuthorSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
  body: Joi.object({
    name: Joi.string(),
  }),
};
