const Cart = require("../model/cart.model");

exports.addToCart = async (req, res) => {
  const { bookId, quantity } = req.body;

  let cart = await Cart.findOne({ user: req.user._id });

  if (!cart) {
    cart = new Cart({
      user: req.user._id,
      items: [],
    });
  }

  const item = cart.items.find((item) => item.book.toString() === bookId);

  if (item) {
    item.quantity += quantity;
  } else {
    cart.items.push({ book: bookId, quantity });
  }

  await cart.save();

  res.status(201).json({ message: "cart added", data: cart });
};

exports.getCart = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id }).populate(
    "items.book",
  );

  res.status(200).json({ message: "cart", data: cart });
};

exports.removeItem = async (req, res) => {
  const { bookId } = req.params;

  const cart = await Cart.findOne({
    user: req.user._id,
  });

  cart.items = cart.items.filter((item) => item.book.toString() !== bookId);

  await cart.save();

  res.json({
    message: "Book removed successfully",
  });
};

exports.updateQuantity = async (req, res) => {
  const { bookId } = req.params;
  const { quantity } = req.body;

  const cart = await Cart.findOne({ user: req.user._id });

  const item = cart.items.find((item) => item.book.toString() === bookId);

  if (item) {
    item.quantity = quantity;
  }

  await cart.save();

  res.status(200).json({ message: "cart", data: cart });
};

exports.clearCart = async (req, res) => {
  await Cart.findOneAndUpdate(
    { user: req.user._id },
    {
      items: [],
    },
  );

  res.json({
    message: "Cart cleared successfully",
  });
};
