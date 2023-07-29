const express = require("express");
const httpValidator = require("../../shared/http-validator");
const {
  postRegisterAdminSchema,
  postLoginAdminSchema,
  patchMeSchema,
  patchAdminSchema,
  deleteAdminSchema,
} = require("./_schemas");
const addAdmin = require("./add-admin");
const loginAdmin = require("./login-admin");
const editAdm = require("./edit-admin");
const showAdmin = require("./show-admin");
const removeAdmin = require("./remove-admin");
const listAdmin = require("./list_admins");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postRegister = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postRegisterAdminSchema);

    const result = await addAdmin(req.body);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const postLogin = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postLoginAdminSchema);

    const result = await loginAdmin(req.body);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const editAdmin = async (req, res, next) => {
  try {
    httpValidator(
      { body: req.body },
      !req.params.id ? patchMeSchema : patchAdminSchema
    );
    const result = await editAdm({
      id: req.params.id || req.user.id,
      ...req.body,
      is_super: req.params.id ? true : false,
    });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAdmin = async (req, res, next) => {
  try {
    const result = await showAdmin({ id: req.params.id });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getAdmins = async (req, res, next) => {
  try {
    const data = await listAdmin(req.query);

    res.status(200).json({
      data: [data.results, data.page_info],
    });
  } catch (error) {
    next(error);
  }
};

const deleteAdmin = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteAdminSchema);
    const result = await removeAdmin({ id: req.params.id });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postRegister,
  postLogin,
  editAdmin,
  getAdmin,
  getAdmins,
  deleteAdmin,
};
