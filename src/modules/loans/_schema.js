const Joi = require("joi");

exports.postLoanSchema = {
  body: Joi.object({
    book: Joi.string().required(),
    borrower: Joi.string().required(),
    due_date: Joi.date().greater(Date.now()).required(),
  }),
};
exports.showLoanSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};
