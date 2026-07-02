const User = require("../models/User");
const Document = require("../models/Document");

const getProfile = async (req, res) => {
  try {
    // Logged in user
    const user = await User.findById(req.user.id).select("-password");

    // User documents
    const documents = await Document.find({
      uploadedBy: req.user.id,
    }).sort({ createdAt: -1 });

    // AI summaries count
    const summaries = documents.filter(
      (doc) => doc.summary && doc.summary.trim() !== ""
    ).length;

    res.status(200).json({
      success: true,

      user,

      stats: {
        documents: documents.length,
        uploads: documents.length,
        summaries,
        chats: 0, // We'll update this later
      },

      recentDocuments: documents.slice(0, 5),
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
  getProfile,
};