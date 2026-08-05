const express = require("express");
const router = express.Router();

const {
  addToCart,
  getCart,
  updateQuantity,
  removeItem,
  clearCart,
} = require("../controller/cart.controller");

router.post("/", addToCart);

router.get("/", getCart);

router.patch("/update/:bookId", updateQuantity);

router.delete("/:bookId", removeItem);

router.delete("/", clearCart);

module.exports = router;
