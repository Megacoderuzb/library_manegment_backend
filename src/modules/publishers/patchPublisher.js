const { NotFoundError } = require("../../shared/errors");
const Publisher = require("./Publisher");

const editPublisher = async ({ id, ...changes }) => {
  const existing = await Publisher.findById(id);

  if (!existing) {
    throw new NotFoundError("Foydalanuvchi topilmadi.");
  }

  return Publisher.findByIdAndUpdate(id, changes, { new: true });
};

module.exports = editPublisher;
