const Joi = require("joi");

exports.postRegisterAdminSchema = {
  body: Joi.object({
    full_name: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    is_super: Joi.boolean().default(false),
    is_deleted: Joi.boolean().default(false),
  }),
};

exports.postLoginAdminSchema = {
  body: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
};
exports.getAdminsSchema = {
  query: Joi.object({
    q: Joi.string(),
    sort: Joi.string(),
    filter: Joi.string(),
    limit: Joi.string(),
    offset: Joi.string(),
  }),
};

exports.patchMeSchema = {
  body: Joi.object({
    full_name: Joi.string(),
    username: Joi.string(),
    password: Joi.string(),
  }),
};

exports.showAdminSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

exports.patchAdminSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
  body: Joi.object({
    full_name: Joi.string(),
    username: Joi.string(),
    password: Joi.string(),
  }),
};

exports.updatePasswordSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
  body: Joi.object({
    password: Joi.string().required(),
  }),
};

exports.deleteAdminSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};
