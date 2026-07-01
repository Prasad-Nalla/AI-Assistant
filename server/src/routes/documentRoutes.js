const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadMiddleware");
const protect = require("../middleware/authMiddleware");

const {
  uploadDocument,
  getDocuments,
  deleteDocument,
} = require("../controllers/documentController");

router.post(
  "/upload",
  protect,
  upload.single("file"),
  uploadDocument
);

router.get("/", protect, getDocuments);
router.delete("/:id", protect, deleteDocument);
module.exports = router;