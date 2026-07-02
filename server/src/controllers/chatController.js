const Document = require("../models/Document");
const { generateChatResponse } = require("../services/geminiService");

const chatWithDocument = async (req, res) => {
  try {
    const { documentId, question } = req.body;

    if (!documentId || !question) {
      return res.status(400).json({
        success: false,
        message: "Document ID and question are required.",
      });
    }

    const document = await Document.findById(documentId);

    if (!document) {
      return res.status(404).json({
        success: false,
        message: "Document not found.",
      });
    }

    if (document.uploadedBy.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized.",
      });
    }

    const answer = await generateChatResponse(
      document.text,
      question
    );

    res.status(200).json({
      success: true,
      answer,
    });

  } catch (error) {
    console.error("Chat Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  chatWithDocument,
};