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

const { authenticate } = require("../middleware/auth.middleware");
const { authorize } = require("../middleware/role.moddleware");

router.post(
  "/",
  uploads.single("img"),
  authenticate,
  authorize("admin"),
  createCategory,
);

router.get("/", getAllCategory);

router.get("/deletedcategory", getDeleteCategory);

router.get("/:slug", getOneCategory);

router.patch(
  "/:slug",
  uploads.single("img"),
  authenticate,
  authorize("admin"),
  updateCategory,
);

module.exports = router;
