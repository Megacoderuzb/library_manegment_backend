const Joi = require("joi");

exports.postRegisterBorrowerSchema = {
  body: Joi.object({
    full_name: Joi.string(),
    address: Joi.string(),
    phone: Joi.string(),
  }),
};

exports.patchBorrowerSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
  body: Joi.object({
    full_name: Joi.string(),
    address: Joi.string(),
    phone: Joi.string(),
  }),
};
