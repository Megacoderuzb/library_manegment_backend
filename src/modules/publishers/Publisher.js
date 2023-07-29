const mongoose = require("mongoose");

const PublisherSchema = new mongoose.Schema(
  {
    name: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    address: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    phone: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    book: {
      type: [mongoose.SchemaTypes.ObjectId],
      default: [],
      ref: "Book",
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

const Publisher = mongoose.model("Publisher", PublisherSchema);

module.exports = Publisher;
