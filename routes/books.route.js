const express = require("express");
const router = express.Router();

const {
  createBooks,
  updateBook,
  getAllBooks,
  getBook,
} = require("../controller/books.controller");

const uploads = require("../middleware/multer.middleware");

router.post("/", uploads.single("img"), createBooks);

router.get("/:slug", getBook);

router.patch("/:slug", uploads.single("img"), updateBook);

router.get("/", getAllBooks);

module.exports = router;
