const { NotFoundError } = require("../../shared/errors");
const Book = require("./Book");

const removeBook = async ({ id }) => {
  const existing = await Book.findById(id);

  if (!existing) {
    throw new NotFoundError("Foydalanuvchi topilmadi.");
  }
  return Book.findByIdAndUpdate(id, { is_deleted: true }, { new: true });
};

module.exports = removeBook;
