const Home = require("../model/home.model");

exports.createHome = async (req, res) => {
  const { title, subTitle, tag } = req.body;
  const home = await Home.create({
    title,
    subTitle,
    tag,
    img: req.file ? `/uploads/${req.file.filename}` : req.existingImage,
  });
  res.status(201).json({ messsage: "home created", data: home });
};

exports.updateHome = async (req, res) => {
  const { _id } = req.params;
  const home = await Home.findOneAndUpdate({ _id }, req.body, {
    new: true,
  });
  res.status(201).json({ messsage: "home updated", data: home });
};

exports.getHome = async (req, res) => {
  const { _id } = req.params;
  const home = await Home.findOne({ _id });
  res.status(200).json({ messsage: "home", data: home });
};
