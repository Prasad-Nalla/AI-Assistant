const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

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
- Use simple and professional English.

Document:

${text}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text.trim();

  } catch (error) {
    console.error("Gemini Error:", error);

    throw new Error("Failed to generate AI summary.");
  }
};

module.exports = {
  generateSummary,
};