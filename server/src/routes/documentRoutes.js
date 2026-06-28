const express = require("express");
const router = express.Router();

const upload = require("../middleware/uploadMiddleware");
const { uploadDocument,getDocuments } = require("../controllers/documentController");
const protect = require("../middleware/authMiddleware");

// upload PDF (protected route)
router.post(
  "/upload",
  protect,
  upload.single("file"),
  uploadDocument
);
router.get("/", protect, getDocuments);

module.exports = router;