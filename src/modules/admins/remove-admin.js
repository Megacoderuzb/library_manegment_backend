const { NotFoundError } = require("../../shared/errors");
const Admin = require("./Admin");

const removeAdmin = async ({ id }) => {
  const existing = await Admin.findById(id);

  if (!existing) {
    throw new NotFoundError("Foydalanuvchi topilmadi.");
  }
  // existing.is_deleted = true;
  return Admin.findByIdAndUpdate(id, { is_deleted: true }, { new: true });
};

module.exports = removeAdmin;
