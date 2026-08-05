const mongoose = require("mongoose");

exports.connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_URI);
    console.log("database connected ");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
