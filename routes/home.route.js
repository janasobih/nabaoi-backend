const express = require("express");
const router = express.Router();

const {
  createHome,
  updateHome,
  getHome,
} = require("../controller/home.controller");

const uploads = require("../middleware/multer.middleware");

const { authenticate } = require("../middleware/auth.middleware");
const { authorize } = require("../middleware/role.moddleware");

router.post(
  "/",
  uploads.single("img"),
  authenticate,
  authorize("admin"),
  createHome,
);

router.patch(
  "/:_id",
  uploads.single("img"),
  authenticate,
  authorize("admin"),
  updateHome,
);

router.get("/:_id", getHome);

module.exports = router;
