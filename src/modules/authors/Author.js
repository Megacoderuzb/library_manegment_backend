const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    is_deleted: {
      type: mongoose.SchemaTypes.Boolean,
      default: false,
    },
    book: {
      type: [mongoose.SchemaTypes.ObjectId],
      default: [],
      ref: "Book",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
