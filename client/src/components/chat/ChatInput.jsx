function ChatInput({
  question,
  setQuestion,
  handleSend,
  loading,
}) {
  return (
    <div className="mt-6 flex gap-4">

      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask anything about the document..."
        className="flex-1 rounded-xl bg-white/5 border border-white/10 p-4 text-white outline-none focus:border-cyan-500"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend();
          }
        }}
      />

      <button
        onClick={handleSend}
        disabled={loading}
        className="px-8 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:scale-105 transition disabled:opacity-50"
      >
        {loading ? "Thinking..." : "Send"}
      </button>

    </div>
  );
}

export default ChatInput;