const { NotFoundError } = require("../../shared/errors");
const Loan = require("./Loan");

const showLoan = async () => {
  const found = await Loan.find({});

  if (!found) {
    throw new NotFoundError("Foydalanuvchi topilmadi.");
  }

  return found;
};

module.exports = showLoan;
