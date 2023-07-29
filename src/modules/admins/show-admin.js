const { NotFoundError } = require("../../shared/errors");
const Admin = require("./Admin");

const showAdmin = async ({ id }) => {
  const admin = await Admin.findById(id).select("-password");

  if (!admin) {
    throw new NotFoundError("Foydalanuvchi topilmadi.");
  }

  return admin;
};

module.exports = showAdmin;
