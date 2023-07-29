const { NotFoundError } = require("../../shared/errors");
const Borrower = require("./Borrower");

const showBorrower = async () => {
  const borrower = await Borrower.find({}).select("-password");

  if (!borrower) {
    throw new NotFoundError("Foydalanuvchi topilmadi.");
  }

  return borrower;
};

module.exports = showBorrower;
