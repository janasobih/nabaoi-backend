const Contact = require("../model/contact.model");
const slug = require("slugify");

exports.createContact = async (req, res) => {
  const { title, desc } = req.body;
  const contact = await Contact.create({
    title,
    desc,
    slug: slug(title, {
      lower: true,
      strict: true,
    }),
  });
  res.status(201).json({ message: "contact created", data: contact });
};

exports.updateContact = async (req, res) => {
  const { _id } = req.params;
  const contact = await Contact.findOneAndUpdate({ _id }, req.body, {
    new: true,
  });
  res.status(201).json({ message: "contact updated", data: contact });
};

exports.getAllContact = async (req, res) => {
  const contact = await Contact.find();
  res.status(200).json({ message: "contact list", data: contact });
};

exports.getOneContact = async (req, res) => {
  const { _id } = req.params;
  const contact = await Contact.findOne({ _id });
  res.status(200).json({ message: "contact ", data: contact });
};

exports.deleteContact = async (req, res) => {
  const { _id } = req.params;
  const contact = await Contact.findOneAndDelete({ _id });
  res.status(200).json({ message: "contact deleted", data: contact });
};
