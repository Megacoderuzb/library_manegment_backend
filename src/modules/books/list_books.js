const { NotFoundError } = require("../../shared/errors");
const Book = require("./Book");

const listBook = async (query) => {
  const { q, filter, sort, limit, offset } = query;
  // { $regex: new RegExp(q, "i") };

  const queryObj = q ? { title: { $regex: q, $options: "i" } } : {};
  const filterObj = filter ? JSON.parse(filter) : {};
  const sortObj = sort ? JSON.parse(sort) : { _id: 1 };
  const limitNum = limit ? parseInt(limit) : 10;
  const offsetNum = offset ? parseInt(offset) : 0;

  const matchingDocs = await Book.find({ $and: [queryObj, filterObj] })
    .sort(sortObj)
    .skip(offsetNum)
    .limit(limitNum)
    .populate([
      {
        path: "publisher",
        select: "name address phone",
      },
      {
        path: "author",
        select: "name",
      },
    ]);
  const totalDocs = await Book.countDocuments({
    $and: [queryObj, filterObj],
  });

  if (!matchingDocs) {
    throw new NotFoundError("Foydalanuvchi topilmadi.");
  }

  return {
    results: matchingDocs,
    page_info: { limit: limitNum, offset: offsetNum, total: totalDocs },
  };
};

module.exports = listBook;
