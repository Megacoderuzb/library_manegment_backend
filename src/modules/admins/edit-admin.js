const { NotFoundError } = require("../../shared/errors");
const Admin = require("./Admin");

const editAdm = async ({ id, ...changes }) => {
  const existing = await Admin.findById(id);

  if (!existing) {
    throw new NotFoundError("Foydalanuvchi topilmadi.");
  }

  return Admin.findByIdAndUpdate(id, changes, { new: true });
};

module.exports = editAdm;
