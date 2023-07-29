const { NotFoundError } = require("../../shared/errors");
const Author = require("./Author");

const editAuthor = async ({ id, ...changes }) => {
  const existing = await Author.findById(id);

  if (!existing) {
    throw new NotFoundError("Foydalanuvchi topilmadi.");
  }

  return Author.findByIdAndUpdate(id, changes, { new: true });
};

module.exports = editAuthor;
