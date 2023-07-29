const { NotFoundError } = require("../../shared/errors");
const Book = require("./Book");

const showBook = async ({ id }) => {
  const book = await Book.findById(id).populate([
    {
      path: "publisher",
      select: "name address phone",
    },
    {
      path: "author",
      select: "name",
    },
  ]);

  if (!book) {
    throw new NotFoundError("Foydalanuvchi topilmadi.");
  }

  return book;
};

module.exports = showBook;
