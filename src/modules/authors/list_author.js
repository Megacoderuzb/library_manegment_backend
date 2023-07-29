const { NotFoundError } = require("../../shared/errors");
const Author = require("./Author");

const showAuthor = async () => {
  const author = await Author.find({}).select();

  if (!author) {
    throw new NotFoundError("Foydalanuvchi topilmadi.");
  }

  return author;
};

module.exports = showAuthor;
