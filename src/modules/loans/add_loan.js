const Loan = require("./Loan");
const Admin = require("../admins/Admin");
const Borrower = require("../borrowers/Borrower");
const Book = require("../books/Book");
const { ForbiddenError, NotFoundError } = require("../../shared/errors");

const addBook = async (adm, data) => {
  if (!(await Admin.findOne({ _id: adm }))) {
    throw new ForbiddenError();
  }
  let books = await Book.find({ _id: data.book });
  let borrower = await Borrower.find({ _id: data.borrower });
  if (books[0].loan.length >= 10) {
    throw new ForbiddenError("your limit is reached ");
  }
  if (borrower[0].is_deleted || books[0].is_deleted) {
    throw new NotFoundError("This is deleted");
  }
  const result = await Loan.create({ ...data });
  await Book.findByIdAndUpdate(data.book, { $push: { loan: result._id } });
  await Admin.findByIdAndUpdate(adm, { $push: { loan: result._id } });
  await Borrower.findByIdAndUpdate(data.borrower, {
    $push: { loan: result._id },
  });
  return result;
};

module.exports = addBook;
