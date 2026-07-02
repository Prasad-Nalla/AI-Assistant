import { motion, AnimatePresence } from "framer-motion";

function LoadingModal({ open }) {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="w-[420px] rounded-3xl bg-slate-900 border border-cyan-500/20 shadow-2xl p-8 text-center"
        >
          <div className="text-6xl mb-5 animate-bounce">
              🤖
          </div>

          <h2 className="text-2xl font-bold text-white">
            AI Assistant
          </h2>

          <p className="text-gray-400 mt-3">
            Reading your document...
          </p>

          <div className="mt-8 h-2 rounded-full bg-slate-700 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Generating AI Summary...
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default LoadingModal;