const mongoose = require("mongoose");

const policySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      requred: true,
    },
    desc: {
      type: String,
      requred: true,
    },
    slug: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Policy", policySchema);
