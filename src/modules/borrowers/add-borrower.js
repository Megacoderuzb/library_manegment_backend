const { hash } = require("bcryptjs");
const Borrower = require("./Borrower");

const addBorrower = async (data) => {
  // const hashedPassword = await hash(data.password, 10);
  const result = await Borrower.create({ ...data });

  return result;
};

module.exports = addBorrower;
