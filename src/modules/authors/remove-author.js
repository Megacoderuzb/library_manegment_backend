const { NotFoundError } = require("../../shared/errors");
const Author = require("./Author");

const removeAuthor = async ({ id }) => {
  const existing = await Author.findById(id);

  if (!existing) {
    throw new NotFoundError("Foydalanuvchi topilmadi.");
  }
  return Author.findByIdAndUpdate(id, { is_deleted: true }, { new: true });
};

module.exports = removeAuthor;
