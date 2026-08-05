const User = require("../model/user.model");
const slug = require("slugify");

exports.createUser = (role) => {
  return async (req, res) => {
    const { name, email, password, mobile } = req.body;
    const user = await User.create({ name, email, password, mobile, role });
    res.status(201).json({ message: "user crested", user });
  };
};

exports.updateUser = async (req, res) => {
  const { slug } = req.params;
  const user = await User.findOneAndUpdate({ slug }, req.body, { new: true });
  res.status(200).json({ message: "user  updated", user });
};

exports.getAllUsers = async (req, res) => {
  const users = await User.find();

  res.status(200).json({
    message: "User list",
    data: users,
  });
};

exports.getUser = async (req, res) => {
  const { slug } = req.params;
  const user = await User.findOne({ slug });

  res.status(200).json({
    message: "User",
    data: user,
  });
};
