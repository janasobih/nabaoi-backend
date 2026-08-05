const express = require("express");
const router = express.Router();

const {
  createPolicy,
  updatePolicy,
  getAllPolicy,
  getOnePolicy,
  deletePolicy,
} = require("../controller/policy.controller");

router.post("/", createPolicy);

router.patch("/:slug", updatePolicy);

router.get("/", getAllPolicy);

router.get("/:slug", getOnePolicy);

router.delete("/:slug", deletePolicy);

module.exports = router;
