const express = require("express");
const router = express.Router();

const {
  createPolicy,
  updatePolicy,
  getAllPolicy,
  getOnePolicy,
  deletePolicy,
} = require("../controller/policy.controller");

const { authenticate } = require("../middleware/auth.middleware");
const { authorize } = require("../middleware/role.moddleware");

router.post("/", authenticate, authorize("admin"), createPolicy);

router.patch("/:slug", authenticate, authorize("admin"), updatePolicy);

router.get("/", getAllPolicy);

router.get("/:slug", getOnePolicy);

router.delete("/:slug", authenticate, authorize("admin"), deletePolicy);

module.exports = router;
