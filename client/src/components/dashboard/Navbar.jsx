import {
  FaSearch,
  FaBell,
  FaUserCircle,
} from "react-icons/fa";

function Navbar() {
  return (
    <header className="h-20 flex items-center justify-between px-8 border-b border-white/10 bg-white/5 backdrop-blur-xl">

      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-gray-400 mt-1">
          Welcome back! Manage your AI documents effortlessly.
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">

        {/* Search */}
        <div className="relative hidden md:block">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search documents..."
            className="w-72 bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder-gray-400 outline-none focus:border-cyan-400 transition"
          />
        </div>

        {/* Notification */}
        <button className="relative w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition">
          <FaBell className="text-xl text-gray-300" />

          <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-2">

          <FaUserCircle className="text-4xl text-cyan-400" />

          <div className="text-left">
            <p className="text-white font-semibold">
              Prasad
            </p>

            <p className="text-gray-400 text-sm">
              AI Explorer
            </p>
          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;