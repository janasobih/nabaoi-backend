const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    bookCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    age: {
      from: {
        type: Number,
        required: true,
      },
      to: {
        type: Number,
        required: true,
      },
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Books", bookSchema);
