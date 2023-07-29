const { NotFoundError } = require("../../shared/errors");
const Publisher = require("./Publisher");

const showPublisher = async ({ id }) => {
  const publisher = await Publisher.findById(id).select("-password");

  if (!publisher) {
    throw new NotFoundError("Foydalanuvchi topilmadi.");
  }

  return publisher;
};

module.exports = showPublisher;
