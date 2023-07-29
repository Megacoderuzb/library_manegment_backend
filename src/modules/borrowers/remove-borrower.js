const { NotFoundError } = require("../../shared/errors");
const Borrower = require("./Borrower");

const removeBorrower = async ({ id }) => {
  const existing = await Borrower.findById(id);

  if (!existing) {
    throw new NotFoundError("Foydalanuvchi topilmadi.");
  }
  // existing.is_deleted = true;
  return Borrower.findByIdAndUpdate(id, { is_deleted: true }, { new: true });
};

module.exports = removeBorrower;
