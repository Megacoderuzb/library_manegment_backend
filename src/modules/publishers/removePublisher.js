const { NotFoundError } = require("../../shared/errors");
const Publisher = require("./Publisher");

const removePublisher = async ({ id }) => {
  const existing = await Publisher.findById(id);

  if (!existing) {
    throw new NotFoundError("Foydalanuvchi topilmadi.");
  }
  // existing.is_deleted = true;
  return Publisher.findByIdAndUpdate(id, { is_deleted: true }, { new: true });
};

module.exports = removePublisher;
