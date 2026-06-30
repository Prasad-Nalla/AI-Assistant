import {
  FaRobot,
  FaHome,
  FaFilePdf,
  FaCloudUploadAlt,
  FaComments,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="w-72 bg-white/5 backdrop-blur-2xl border-r border-white/10 flex flex-col">

      {/* Logo */}
      <div className="h-24 flex items-center justify-center border-b border-white/10">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 flex items-center justify-center">

            <FaRobot className="text-white text-xl" />

          </div>

          <div>

            <h2 className="text-white font-bold text-lg">
              AI Assistant
            </h2>

            <p className="text-gray-400 text-sm">
              Smart Workspace
            </p>

          </div>

        </div>

      </div>

      {/* Menu */}

      <nav className="flex-1 mt-8 px-4">

        <ul className="space-y-3">

          <li className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl">
            <button className="flex items-center gap-4 w-full px-5 py-4 text-white">
              <FaHome />
              Dashboard
            </button>
          </li>

          <li>
            <button className="flex items-center gap-4 w-full px-5 py-4 rounded-xl text-gray-300 hover:bg-white/10 transition">
              <FaFilePdf />
              Documents
            </button>
          </li>

          <li>
            <button className="flex items-center gap-4 w-full px-5 py-4 rounded-xl text-gray-300 hover:bg-white/10 transition">
              <FaCloudUploadAlt />
              Upload
            </button>
          </li>

          <li>
            <button className="flex items-center gap-4 w-full px-5 py-4 rounded-xl text-gray-300 hover:bg-white/10 transition">
              <FaComments />
              AI Chat
            </button>
          </li>

          <li>
            <button className="flex items-center gap-4 w-full px-5 py-4 rounded-xl text-gray-300 hover:bg-white/10 transition">
              <FaUser />
              Profile
            </button>
          </li>

        </ul>

      </nav>

      {/* Logout */}

      <div className="p-4 border-t border-white/10">

        <button className="flex items-center gap-4 w-full px-5 py-4 rounded-xl text-red-400 hover:bg-red-500/10 transition">

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;