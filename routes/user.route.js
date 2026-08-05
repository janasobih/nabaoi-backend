const express = require("express");
const router = express.Router();

const {
  createUser,
  getAllUsers,
  updateUser,
  getUser,
} = require("../controller/user.controller");

// const { authnticate } = require("../middleware/auth.middleware");

// const { authorize } = require("../middleware/role.middleware");

router.post("/", createUser);

// router.post(
//   "/createadmin",
//   authnticate,
//   authorize("admin"),
//   createUser("admin"),
// );

router.patch("/:slug", updateUser);

router.get("/:slug", getUser);

router.get("/", getAllUsers);

module.exports = router;
