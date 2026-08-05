const express = require("express");
const router = express.Router();

const {
  createHome,
  updateHome,
  getHome,
} = require("../controller/home.controller");

const uploads = require("../middleware/multer.middleware");

router.post("/", uploads.single("img"), createHome);

router.patch("/:_id", uploads.single("img"), updateHome);

router.get("/:_id", getHome);

module.exports = router;
