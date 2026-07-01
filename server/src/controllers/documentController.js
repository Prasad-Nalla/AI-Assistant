const Document = require("../models/Document");
const fs=require("fs");
const path=require("path");
// Upload PDF
const uploadDocument = async (req, res) => {
  try {
    if (!req.file) {
      console.log("req.file =", req.file);

      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }
console.log("Saved path:", req.file.path);
    const newDoc = await Document.create({
      title: req.file.originalname,
      fileName: req.file.filename,
      filePath: req.file.path,
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

// Get all uploaded documents
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
// Delete Document
const deleteDocument = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);

    if (!document) {
      return res.status(404).json({
        success: false,
        message: "Document not found",
      });
    }

    // Allow only owner to delete
    if (document.uploadedBy.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
    }

    // Delete PDF from uploads folder
    const filePath = path.join(
      __dirname,
      "../../uploads",
      document.fileName
    );

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    // Delete from MongoDB
    await Document.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Document deleted successfully",
    });
  } catch (error) {
    console.error(error);

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
};