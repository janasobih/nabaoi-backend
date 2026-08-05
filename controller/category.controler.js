const slug = require("slugify");
const Category = require("../model/category.model");

exports.createCategory = async (req, res) => {
  const { name, title, desc, isDeleted } = req.body;
  const category = await Category.create({
    name,
    slug: slug(name),
    title,
    desc,
    isDeleted,
    img: req.file ? `/uploads/${req.file.filename}` : req.existingImage,
  });
  res.status(201).json({
    message: "category created",
    data: category,
  });
};

exports.updateCategory = async (req, res) => {
  const { slug } = req.params;

  const category = await Category.findOneAndUpdate({ slug }, req.body, {
    new: true,
  });

  res.status(200).json({
    message: "category updated",
    data: category,
  });
};

exports.getAllCategory = async (req, res) => {
  const category = await Category.find({ isDeleted: false });
  res.status(201).json({
    message: "category list",
    data: category,
  });
};

exports.getOneCategory = async (req, res) => {
  const { slug } = req.params;
  const category = await Category.findOne({ slug, isDeleted: false });
  res.status(201).json({
    message: "category ",
    data: category,
  });
};

exports.getDeleteCategory = async (req, res) => {
  const category = await Category.find({ isDeleted: true });
  res.status(201).json({
    message: "deleted category list",
    data: category,
  });
};
