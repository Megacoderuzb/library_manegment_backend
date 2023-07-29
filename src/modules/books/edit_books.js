const { NotFoundError } = require("../../shared/errors");
const Book = require("./Book");

const editBook = async ({ id, ...changes }) => {
  const existing = await Book.findById(id);

  if (!existing) {
    throw new NotFoundError("Foydalanuvchi topilmadi.");
  }

  return Book.findByIdAndUpdate(id, changes, { new: true });
};

module.exports = editBook;
