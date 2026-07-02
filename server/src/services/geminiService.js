const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// =========================
// Generate Summary
// =========================
const generateSummary = async (text) => {
  try {
    const prompt = `
You are an expert AI Document Assistant.

Your task is to summarize the following document.

Instructions:
- Use Markdown formatting.
- Keep the summary under 250 words.
- Use clear headings.
- Use bullet points.
- Highlight the most important information.
- If present, include:
  - Overview
  - Key Skills
  - Education
  - Projects
  - Experience
  - Important Points

Document:

${text}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text.trim();
  } catch (error) {
    console.error("Gemini Summary Error:", error);
    throw new Error("Failed to generate AI summary.");
  }
};

// =========================
// Chat With PDF
// =========================
const generateChatResponse = async (documentText, question) => {
  try {
    const prompt = `
You are an AI Document Assistant.

Answer ONLY using the information available in the document.

Rules:
- Use Markdown.
- If the answer isn't in the document, say:
  "This information is not available in the uploaded document."
- Be professional.
- Use bullet points whenever possible.

Document:

${documentText}

--------------------------------

Question:

${question}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text.trim();
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    throw new Error("Failed to generate AI response.");
  }
};

module.exports = {
  generateSummary,
  generateChatResponse,
};