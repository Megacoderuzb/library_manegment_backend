const { NotFoundError } = require("../../shared/errors");
const Admin = require("./Admin");

const listAdmin = async (query) => {
  const { q, filter, sort, limit, offset } = query;
  // if (q) {
  //   filter.name = { $regex: new RegExp(q, "i") };
  // }

  const queryObj = q ? { full_name: { $regex: q, $options: "i" } } : {};
  const filterObj = filter ? JSON.parse(filter) : {};
  const sortObj = sort ? JSON.parse(sort) : { _id: 1 };
  const limitNum = limit ? parseInt(limit) : 10;
  const offsetNum = offset ? parseInt(offset) : 0;

  const matchingDocs = await Admin.find({ $and: [queryObj, filterObj] })
    .sort(sortObj)
    .skip(offsetNum)
    .limit(limitNum);
  const totalDocs = await Admin.countDocuments({ $and: [queryObj, filterObj] });

  // res.json({ results: matchingDocs, total: totalDocs });
  // const admin = await Admin.find({}).select("-password");
  if (!matchingDocs) {
    throw new NotFoundError("Foydalanuvchi topilmadi.");
  }

  return {
    results: matchingDocs,
    page_info: { limit: limitNum, offset: offsetNum, total: totalDocs },
  };
};

module.exports = listAdmin;
