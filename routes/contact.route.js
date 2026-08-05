const express = require("express");
const router = express.Router();

const {
  createContact,
  updateContact,
  getOneContact,
  getAllContact,
  deleteContact,
} = require("../controller/contact.controller");

const { authenticate } = require("../middleware/auth.middleware");
const { authorize } = require("../middleware/role.moddleware");

router.post("/", authenticate, authorize("admin"), createContact);

router.patch("/:_id", authenticate, authorize("admin"), updateContact);

router.get("/:_id", getOneContact);

router.get("/", getAllContact);

router.delete("/:_id", authenticate, authorize("admin"), deleteContact);

module.exports = router;
