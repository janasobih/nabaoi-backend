const Policy = require("../model/policy.model");

const slug = require("slugify");

exports.createPolicy = async (req, res) => {
  const { title, desc } = req.body;
  const policy = await Policy.create({
    title,
    desc,
    slug: slug(title, {
      lower: true,
      strict: true,
    }),
  });
  res.status(201).json({ message: "policy created", data: policy });
};

exports.updatePolicy = async (req, res) => {
  const { slug } = req.params;
  const policy = await Policy.findOneAndUpdate({ slug }, req.body, {
    new: true,
  });
  res.status(201).json({ message: "policy updated", data: policy });
};

exports.getAllPolicy = async (req, res) => {
  const policy = await Policy.find();
  res.status(200).json({ message: "policy list", data: policy });
};

exports.getOnePolicy = async (req, res) => {
  const { slug } = req.params;
  const policy = await Policy.findOne({ slug });
  res.status(200).json({ message: "policy ", data: policy });
};

exports.deletePolicy = async (req, res) => {
  const { slug } = req.params;
  const policy = await Policy.findOneAndDelete({ slug });
  res.status(200).json({ message: "policy deleted", data: policy });
};
