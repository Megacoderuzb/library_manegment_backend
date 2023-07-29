const Author = require("../authors/Author");
const Publisher = require("../publishers/Publisher");
const Book = require("./Book");

const addBook = async (data) => {
  const result = await Book.create({ ...data });
  await Author.findByIdAndUpdate(data.author, { $push: { book: result._id } });
  await Publisher.findByIdAndUpdate(data.publisher, {
    $push: { book: result._id },
  });
  return result;
};

module.exports = addBook;
