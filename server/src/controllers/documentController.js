const Document = require("../models/Document");
const pdfParse = require("pdf-parse");
const fs = require("fs");
const path = require("path");

const { generateSummary } = require("../services/geminiService");

// =======================
// Upload PDF
// =======================
const uploadDocument = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    // Read uploaded PDF
    const dataBuffer = fs.readFileSync(req.file.path);

    // Extract text
    const pdfData = await pdfParse(dataBuffer);

    // Limit text length for Gemini
    const extractedText = (pdfData.text || "").substring(0, 30000);

    // Save document
    const newDoc = await Document.create({
      title: req.file.originalname,
      fileName: req.file.filename,
      filePath: req.file.path,
      text: extractedText,
      uploadedBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "File uploaded successfully",
      document: newDoc,
    });

  } catch (error) {
    console.error("Upload Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================
// Get Documents
// =======================
const getDocuments = async (req, res) => {
  try {
    const documents = await Document.find({
      uploadedBy: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      documents,
    });

  } catch (error) {
    console.error("Get Documents Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================
// Delete Document
// =======================
const deleteDocument = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);

    if (!document) {
      return res.status(404).json({
        success: false,
        message: "Document not found",
      });
    }

    if (document.uploadedBy.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const filePath = path.join(
      __dirname,
      "../../uploads",
      document.fileName
    );

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    await Document.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Document deleted successfully",
    });

  } catch (error) {
    console.error("Delete Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================
// Generate AI Summary
// =======================
const generateDocumentSummary = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);

    if (!document) {
      return res.status(404).json({
        success: false,
        message: "Document not found",
      });
    }

    if (document.uploadedBy.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
    }

    // Return cached summary if available
    if (document.summary && document.summary.trim() !== "") {
      return res.status(200).json({
        success: true,
        summary: document.summary,
        cached: true,
      });
    }

    if (!document.text || document.text.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Document text not available.",
      });
    }

    console.log("Generating summary using Gemini...");

    const summary = await generateSummary(document.text);

    document.summary = summary;

    await document.save();

    res.status(200).json({
      success: true,
      summary,
      cached: false,
    });

  } catch (error) {
    console.error("Summary Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  uploadDocument,
  getDocuments,
  deleteDocument,
  generateDocumentSummary,
};