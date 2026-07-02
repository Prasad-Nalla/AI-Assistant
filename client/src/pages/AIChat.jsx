import { useState } from "react";
import API from "../services/api";

import Layout from "../components/dashboard/Layout";
import ChatHeader from "../components/chat/ChatHeader";
import DocumentSelector from "../components/chat/DocumentSelector";
import SuggestedQuestions from "../components/chat/SuggestedQuestions";
import ChatMessages from "../components/chat/ChatMessages";
import ChatInput from "../components/chat/ChatInput";

function AIChat() {
  const [selectedDocument, setSelectedDocument] = useState("");
  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!selectedDocument) {
      alert("Please select a document.");
      return;
    }

    if (question.trim() === "") return;

    const userMessage = {
      sender: "user",
      text: question,
    };

    setMessages((prev) => [...prev, userMessage]);

    try {
      setLoading(true);

      const res = await API.post("/chat", {
        documentId: selectedDocument,
        question,
      });

      const aiMessage = {
        sender: "ai",
        text: res.data.answer,
      };

      setMessages((prev) => [...prev, aiMessage]);

      setQuestion("");

    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Something went wrong while contacting Gemini.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>

      <div className="max-w-6xl mx-auto">

        <ChatHeader />

        <DocumentSelector
          selectedDocument={selectedDocument}
          setSelectedDocument={setSelectedDocument}
        />

        <SuggestedQuestions />

        <ChatMessages messages={messages} />

        <ChatInput
          question={question}
          setQuestion={setQuestion}
          handleSend={handleSend}
          loading={loading}
        />

      </div>

    </Layout>
  );
}

export default AIChat;