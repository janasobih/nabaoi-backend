const dotenv = require("dotenv");
dotenv.config();
port = process.env.PORT;

const path = require("path");

const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const { connectDB } = require("./config/db.config");
connectDB();

app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
  res.json({ message: "API is running successfully " });
});

app.use("/api/v1/home", require("./routes/home.route"));
app.use("/api/v1/category", require("./routes/category.route"));
app.use("/api/v1/books", require("./routes/books.route"));
app.use("/api/v1/policy", require("./routes/policy.route"));
app.use("/api/v1/contact", require("./routes/contact.route"));
app.use("/api/v1/user", require("./routes/user.route"));
app.use("/api/v1/cart", require("./routes/cart.route"));
app.use("/api/v1/auth", require("./routes/auth.route"));

if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app;
