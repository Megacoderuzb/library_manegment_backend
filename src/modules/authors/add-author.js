const Author = require("./Author");

const addAuthor = async (data) => {
  const result = await Author.create({ ...data });

  return result;
};

module.exports = addAuthor;
