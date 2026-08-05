const express = require("express");
const router = express.Router();

const {
  createCategory,
  getAllCategory,
  getOneCategory,
  updateCategory,
  getDeleteCategory,
} = require("../controller/category.controler");

const uploads = require("../middleware/multer.middleware");

router.post("/", uploads.single("img"), createCategory);

router.get("/", getAllCategory);

router.get("/deletedcategory", getDeleteCategory);

router.get("/:slug", getOneCategory);

router.patch("/:slug", uploads.single("img"), updateCategory);

module.exports = router;
