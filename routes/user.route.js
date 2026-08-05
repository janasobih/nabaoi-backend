const express = require("express");
const router = express.Router();

const {
  createUser,
  getAllUsers,
  updateUser,
  getUser,
} = require("../controller/user.controller");

const { authenticate } = require("../middleware/auth.middleware");
const { authorize } = require("../middleware/role.moddleware");

router.post("/", createUser("user"));

router.post(
  "/createadmin",
  authenticate,
  authorize("admin"),
  createUser("admin"),
);

router.patch("/:slug", authenticate, updateUser);

router.get("/:slug", getUser);

router.get("/", authenticate, authorize("admin"), getAllUsers);

module.exports = router;
