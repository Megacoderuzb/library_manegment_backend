const { NotFoundError } = require("../../shared/errors");
const Loan = require("./Loan");

const showLoan = async (query) => {
  const { filter, sort, limit, offset } = query;

  const filterObj = filter ? JSON.parse(filter) : {};
  const sortObj = sort ? JSON.parse(sort) : { _id: 1 };
  const limitNum = limit ? parseInt(limit) : 10;
  const offsetNum = offset ? parseInt(offset) : 0;

  const matchingDocs = await Loan.find({ ...filterObj })
    .sort(sortObj)
    .skip(offsetNum)
    .limit(limitNum)
    .populate([
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

  const totalDocs = await Loan.countDocuments({ ...filterObj });

  if (!matchingDocs) {
    throw new NotFoundError("Foydalanuvchi topilmadi.");
  }

  return {
    results: matchingDocs,
    page_info: { limit: limitNum, offset: offsetNum, total: totalDocs },
  };
};

module.exports = showLoan;
