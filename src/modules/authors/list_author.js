const { NotFoundError } = require("../../shared/errors");
const Author = require("./Author");

const showAuthor = async (query) => {
  const { q, filter, sort, limit, offset } = query;
  // { $regex: new RegExp(q, "i") };

  const queryObj = q ? { name: { $regex: q, $options: "i" } } : {};
  const filterObj = filter ? JSON.parse(filter) : {};
  const sortObj = sort ? JSON.parse(sort) : { _id: 1 };
  const limitNum = limit ? parseInt(limit) : 10;
  const offsetNum = offset ? parseInt(offset) : 0;

  const matchingDocs = await Author.find({ $and: [queryObj, filterObj] })
    .sort(sortObj)
    .skip(offsetNum)
    .limit(limitNum);
  const totalDocs = await Author.countDocuments({
    $and: [queryObj, filterObj],
  });

  // res.json({ results: matchingDocs, total: totalDocs });
  // const Author = await Author.find({}).select("-password");
  if (!matchingDocs) {
    throw new NotFoundError("Foydalanuvchi topilmadi.");
  }

  return {
    results: matchingDocs,
    page_info: { limit: limitNum, offset: offsetNum, total: totalDocs },
  };
};

module.exports = showAuthor;
