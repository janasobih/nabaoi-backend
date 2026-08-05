const express = require("express");
const router = express.Router();

const {
  createContact,
  updateContact,
  getOneContact,
  getAllContact,
  deleteContact,
} = require("../controller/contact.controller");

router.post("/", createContact);

router.patch("/:_id", updateContact);

router.get("/:_id", getOneContact);

router.get("/", getAllContact);

router.delete("/:_id", deleteContact);

module.exports = router;
