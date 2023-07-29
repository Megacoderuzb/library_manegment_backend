const mongoose = require("mongoose");

const LoanSchema = new mongoose.Schema(
  {
    book: {
      type: mongoose.SchemaTypes.String,
      ref: "Book",
    },
    out_date: {
      type: mongoose.SchemaTypes.Date,
      default: Date.now(),
    },
    due_date: {
      type: mongoose.SchemaTypes.Date,
      required: true,
    },
    admin: {
      type: mongoose.SchemaTypes.String,
      ref: "Admin",
    },
    borrower: {
      type: mongoose.SchemaTypes.String,
      ref: "Borrower",
    },
    
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Loan = mongoose.model("Loan", LoanSchema);

module.exports = Loan;
