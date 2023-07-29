const { NotFoundError } = require("../../shared/errors");
const Borrower = require("./Borrower");

const showBorrower = async ({ id }) => {
  const borrower = await Borrower.findById(id).select("-password");

  if (!borrower) {
    throw new NotFoundError("Foydalanuvchi topilmadi.");
  }

  return borrower;
};

module.exports = showBorrower;
