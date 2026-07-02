function ChatMessages({ messages }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl h-[450px] p-6 overflow-y-auto">

      {messages.length === 0 ? (
        <div className="h-full flex items-center justify-center">

          <div className="text-center">

            <div className="text-7xl mb-4">
              🤖
            </div>

            <h2 className="text-white text-2xl font-bold">
              AI Assistant
            </h2>

            <p className="text-gray-400 mt-2">
              Select a document and start chatting.
            </p>

          </div>

        </div>
      ) : (
        <div className="space-y-5">

  {messages.map((msg, index) => (

    <div
      key={index}
      className={`flex ${
        msg.sender === "user"
          ? "justify-end"
          : "justify-start"
      }`}
    >

      <div
        className={`max-w-[70%] rounded-2xl px-5 py-3 ${
          msg.sender === "user"
            ? "bg-cyan-600 text-white"
            : "bg-white/10 text-white"
        }`}
      >
        {msg.text}
      </div>

    </div>

  ))}

</div>
      )}

    </div>
  );
}

export default ChatMessages;