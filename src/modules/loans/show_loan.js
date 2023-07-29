const { NotFoundError } = require("../../shared/errors");
const Loan = require("./Loan");

const showLoan = async ({ id }) => {
  const loan = await Loan.findById(id).populate([
    {
      path: "book",
      select: "title",
      populate: {
        path: "author",
        model: "Author",
        select: "name",
      },
    },
    {
      path: "admin",
      select: "full_name username",
    },
    {
      path: "borrower",
      select: "full_name address phone",
    },
  ]);

  if (!loan) {
    throw new NotFoundError("Topilmadi.");
  }

  return loan;
};

module.exports = showLoan;
