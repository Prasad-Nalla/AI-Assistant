import { AnimatePresence, motion } from "framer-motion";

function SummaryModal({
  open,
  summary,
  onClose,
}) {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{
            scale: 0.8,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          exit={{
            scale: 0.8,
            opacity: 0,
          }}
          className="bg-slate-900 w-full max-w-3xl rounded-3xl border border-cyan-500/20 p-8 max-h-[80vh] overflow-y-auto"
        >
          <div className="flex justify-between items-center">

            <h2 className="text-3xl font-bold text-white">
              ✨ AI Summary
            </h2>

            <button
              onClick={onClose}
              className="text-white text-3xl"
            >
              ×
            </button>

          </div>

          <div className="mt-8 whitespace-pre-wrap leading-8 text-gray-300">
            {summary}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default SummaryModal;