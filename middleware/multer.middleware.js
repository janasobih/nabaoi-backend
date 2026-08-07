const multer = require("multer");

const path = require("path");

const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  const allowed = [".jpg", ".png", ".jpeg", ".PNG"];
  console.log(allowed.includes(ext), ext);
  if (!allowed.includes(ext)) {
    return cb(new Error("Only imges are allowed"));
  }

  cb(null, true);
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const MB = 1024 * 1024;
module.exports = multer({
  storage,
  fileFilter,
  limits: { fileSize: 2 * MB },
});
