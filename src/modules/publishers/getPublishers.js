const { NotFoundError } = require("../../shared/errors");
const Publisher = require("./Publisher");

const listPublishers = async () => {
  const publishers = await Publisher.find({}).select("-password");
  if (!publishers) {
    throw new NotFoundError("Foydalanuvchi topilmadi.");
  }

  return publishers;
};

module.exports = listPublishers;
