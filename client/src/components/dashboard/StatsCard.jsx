import { motion } from "framer-motion";

function StatsCard({
  title,
  value,
  icon,
  color = "from-cyan-500 to-blue-500",
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{ duration: 0.25 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-lg"
    >
      {/* Background Glow */}
      <div
        className={`absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-r ${color} opacity-20 blur-3xl`}
      ></div>

      {/* Content */}
      <div className="relative flex items-center justify-between">

        <div>
          <p className="text-gray-400 text-sm font-medium">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            {value}
          </h2>
        </div>

        <div
          className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${color} text-3xl text-white shadow-lg`}
        >
          {icon}
        </div>

      </div>
    </motion.div>
  );
}

export default StatsCard;