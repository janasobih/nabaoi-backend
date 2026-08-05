const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema(
  {
    img: {
      type: String,
    },

    title: {
      type: String,
      required: true,
    },

    subTitle: {
      type: String,
      required: true,
    },

    tag: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Home", homeSchema);
