const express = require("express");
const router = express.Router();

const upload = require("../middleware/uploadMiddleware");
const protect = require("../middleware/authMiddleware");

const {
  uploadDocument,
  getDocuments,
  deleteDocument,
  generateDocumentSummary,
} = require("../controllers/documentController");

// Upload PDF
router.post(
  "/upload",
  protect,
  upload.single("file"),
  uploadDocument
);

// Get all uploaded documents
router.get("/", protect, getDocuments);

// Delete document
router.delete("/:id", protect, deleteDocument);

// Generate AI Summary
router.post("/:id/summary", protect, generateDocumentSummary);

module.exports = router;