const multer = require("multer");
const path = require("path");

// Set storage engine
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

// Check file type (optional)
const fileFilter = (req, file, cb) => {
  const filetypes = /jpeg|jpg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);
  if (extname && mimetype) {
    return cb(null, true);
  }
  cb("Images only (jpeg, jpg, png)");
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
