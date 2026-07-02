const questions = [
  "Summarize",
  "Key Skills",
  "Projects",
  "Education",
  "Experience",
];

function SuggestedQuestions() {
  return (
    <div className="flex flex-wrap gap-3 my-6">

      {questions.map((q) => (
        <button
          key={q}
          className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500 hover:text-white transition"
        >
          {q}
        </button>
      ))}

    </div>
  );
}

export default SuggestedQuestions;