const { NotFoundError } = require("../../shared/errors");
const Book = require("./Book");

const listBook = async () => {
  const books = await Book.find({}).select();

  if (!books) {
    throw new NotFoundError("Foydalanuvchi topilmadi.");
  }

  return books;
};

module.exports = listBook;
