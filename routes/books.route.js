const express = require("express");
const router = express.Router();

const {
  createBooks,
  updateBook,
  getAllBooks,
  getBook,
} = require("../controller/books.controller");

const uploads = require("../middleware/multer.middleware");

const { authenticate } = require("../middleware/auth.middleware");
const { authorize } = require("../middleware/role.moddleware");

router.post(
  "/",
  uploads.single("img"),
  authenticate,
  authorize("admin"),
  createBooks,
);

router.get("/:slug", getBook);

router.patch(
  "/:slug",
  uploads.single("img"),
  authenticate,
  authorize("admin"),
  updateBook,
);

router.get("/", getAllBooks);

module.exports = router;
