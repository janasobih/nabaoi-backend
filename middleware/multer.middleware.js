const multer = require("multer");

const path = require("path");

const fs = require("fs");

const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  const allowed = [".jpg", ".jpeg", ".png"];

  if (!allowed.includes(ext)) {
    return cb(new Error("Only images are allowed"));
  }

  const filePath = path.join(__dirname, "../uploads", file.originalname);

  if (fs.existsSync(filePath)) {
    req.existingImage = `/uploads/${file.originalname}`;
    return cb(null, false);
  }

  cb(null, true);
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const MB = 1024 * 1024;
module.exports = multer({
  storage,
  fileFilter,
  limits: { fileSize: 2 * MB },
});
