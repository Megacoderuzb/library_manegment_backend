const { NotFoundError } = require("../../shared/errors");
const Author = require("./Author");

const showAuthor = async ({ id }) => {
  const author = await Author.findById(id).select();

  if (!author) {
    throw new NotFoundError("Foydalanuvchi topilmadi.");
  }

  return author;
};

module.exports = showAuthor;
