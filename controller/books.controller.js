const slug = require("slugify");
const Books = require("../model/books.model");
const uploadToCloudinary = require("../middleware/cloudinary.middleware");

exports.createBooks = async (req, res) => {
  const { name, desc, stock, price, bookCategory, age } = req.body;
  let imageUrl = null;
  if (req.file) {
    const result = await uploadToCloudinary(req.file.buffer, "nabaoi/books");

    imageUrl = result.secure_url;
  }
  const books = await Books.create({
    name,
    slug: slug(name),
    desc,
    stock,
    price,
    bookCategory,
    age: {
      from: Number(age.from),
      to: Number(age.to),
    },
    img: imageUrl,
  });

  res.status(201).json({
    message: "books created",
    data: books,
  });
};

exports.updateBook = async (req, res) => {
  const { slug } = req.params;
  const updateData = {
    ...req.body,
  };

  if (req.file) {
    const result = await uploadToCloudinary(req.file.buffer, "nabaoi/books");

    updateData.img = result.secure_url;
  }
  const books = await Books.findOneAndUpdate({ slug }, updateData, {
    new: true,
  });
  res.status(200).json({
    message: "book updated",
    data: books,
  });
};

exports.getAllBooks = async (req, res) => {
  const books = await Books.find();

  res.status(200).json({ message: "books list", data: books });
};

exports.getBook = async (req, res) => {
  const { slug } = req.params;
  const books = await Books.findOne({ slug });

  res.status(200).json({ message: "book", data: books });
};
