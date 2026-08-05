const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      requred: true,
    },
    desc: {
      type: String,
      requred: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Contact", contactSchema);
