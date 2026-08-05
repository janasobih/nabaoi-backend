const slug = require("slugify");
const Books = require("../model/books.model");

exports.createBooks = async (req, res) => {
  const { name, desc, stock, price, bookCategory, age } = req.body;
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
    img: req.file ? `/uploads/${req.file.filename}` : req.existingImage,
  });

  res.status(201).json({ message: "books created", data: books });
};

exports.updateBook = async (req, res) => {
  const { slug } = req.params;
  const books = await Books.findOneAndUpdate({ slug }, req.body, { new: true });

  res.status(201).json({ message: "book updated", data: books });
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
