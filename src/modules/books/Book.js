const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    publisher: {
      type: mongoose.Schema.ObjectId,
      ref: "Publisher",
    },
    author: {
      type: mongoose.Schema.ObjectId,
      ref: "Author",
    },
    loan: {
      type: [mongoose.SchemaTypes.ObjectId],
      default: [],
      ref: "Loan",
    },
    copies: {
      type: mongoose.SchemaTypes.Number,
      required: true,
    },

    is_deleted: {
      type: mongoose.SchemaTypes.Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
