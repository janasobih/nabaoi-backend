const Home = require("../model/home.model");
const slug = require("slugify");
const uploadToCloudinary = require("../middleware/cloudinary.middleware");

exports.createHome = async (req, res) => {
  const { title, subTitle, tag } = req.body;

  let imageUrl = null;

  if (req.file) {
    const result = await uploadToCloudinary(req.file.buffer, "nabaoi/home");

    imageUrl = result.secure_url;
  }
  const home = await Home.create({
    title,
    subTitle,
    tag,
    slug: slug(title),
    img: imageUrl,
  });

  res.status(201).json({
    message: "home created",
    data: home,
  });
};

exports.updateHome = async (req, res) => {
  const { slug } = req.params;
  const home = await Home.findOneAndUpdate({ slug }, req.body, {
    new: true,
  });
  res.status(201).json({ messsage: "home updated", data: home });
};

exports.getHome = async (req, res) => {
  const { slug } = req.params;
  const home = await Home.findOne({ slug });
  res.status(200).json({ messsage: "home", data: home });
};
