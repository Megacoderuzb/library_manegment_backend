const { NotFoundError } = require("../../shared/errors");
const Borrower = require("./Borrower");

const editBorrower = async ({ id, ...changes }) => {
  const existing = await Borrower.findById(id);

  if (!existing) {
    throw new NotFoundError("Foydalanuvchi topilmadi.");
  }

  return Borrower.findByIdAndUpdate(id, changes, { new: true });
};

module.exports = editBorrower;
